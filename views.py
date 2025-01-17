from flask import Blueprint, render_template, request, flash, redirect, url_for, abort, jsonify
from Finvestox.config import BrokerConfig
from Finvestox.models import *
from flask_login import login_required, current_user
from Finvestox.users.utils import make_chart
from Finvestox.main.utils import *
from Finvestox.algo.utils import *
import pytz
from pya3 import *
import uuid
import time
import redis

algo = Blueprint('algo', __name__)
tz = pytz.timezone("Asia/Calcutta")

redis_client = redis.StrictRedis(host='172.235.26.92', port=6379, password='#FinvestoxSakthiKumar1810', db=0, decode_responses=True, socket_timeout=5)

@algo.route('/', subdomain='algo')
def algo_main():
    return redirect(url_for('algo.algo_home'))

@algo.route('/dashboard/', subdomain='algo', methods=['GET', 'POST'])
@login_required
def algo_home():
    if not current_user.is_algo_access:
        abort(403)
    broker = Broker.query.filter_by(user_id=current_user.id).first()
    trades = None
    account_id = None
    symbol = None
    symbols = []
    if broker:
        account_id = broker.account_id
        trades = Trade.query.filter_by(broker_id=broker.id).filter_by(active=True).all()
        if trades:
            if current_user.last_visited_option_symbol == None:
                current_user.last_visited_option_symbol = trades[0].fyers_data_symbol
                db.session.commit()
            symbol = current_user.last_visited_option_symbol
            symbols = [trade.fyers_data_symbol for trade in trades]
    if request.method == 'POST':
        # take inputs from frontend (user)
        account_id = request.form.get('account_id', account_id).strip().upper()
        password = request.form.get('password')
        TOTP_Key = request.form.get('totp_key').strip()
        api_key = request.form.get('api_key').strip()
        broker = Broker.query.filter_by(user_id=current_user.id).first()
        sessionID = None

        try:
            alice = Aliceblue(user_id=account_id, api_key=api_key)
            alice_session = alice.get_session_id()
            sessionID_message = alice_session.get('emsg', '')
            if 'User does not login' in sessionID_message:
                try:
                    sessionID = login_broker(account_id=account_id, password=password, TOTP_Key=TOTP_Key, app_code=BrokerConfig.ALICE_APP_ID, api_secret=BrokerConfig.ALICE_SECRET_ID)
                except Exception as e:
                    print(f"Error Occurred: {e}")
                    flash("Kindly verify your login credentials.", "danger")
                    return redirect(url_for('algo.algo_home'))
            else:
                sessionID = alice_session.get('sessionID', None)
            if sessionID:
                alice = Aliceblue(user_id=account_id, api_key=api_key, session_id=sessionID)
                profile = alice.get_profile()
                balance = alice.get_balance()[0]
                if not broker:
                    no_of_brokers = Broker.query.count()
                    if no_of_brokers >= BrokerConfig.ALLOWED_NUMBER_OF_BROKERS:
                        send_email_to_admin("Add New Server", "User is trying to add new broker. Please add more servers.")
                        flash("Please contact admin. Limit exceed.", "danger")
                        return redirect(url_for('algo.algo_home'))
                    unique_id = f"{uuid.uuid4()}-{int(time.time())}"
                    status = False
                    if 'nse_fo' in profile.get('exchEnabled', None):
                        status = True
                        message = "Broker added successfully."
                        flag = "success"
                    else:
                        message = "The broker was added successfully, but trades cannot be initiated because NFO is not yet enabled in the linked account."
                        flag = "danger"
                    broker = Broker(id=unique_id, account_id=account_id, password=password, TOTP_Key=TOTP_Key, api_key=api_key, 
                                    session_id=sessionID, mobile_number=profile.get('cellAddr', None),
                                    email_address=profile.get('emailAddr', None), products=profile.get('product', None),
                                    enabled_exchange=profile.get('exchEnabled', None), status=status, is_logged_in=True,
                                    available_balance=balance.get('net', 0.00), margin_used=balance.get('cncMarginUsed', 0.00),
                                    user_id=current_user.id)
                    db.session.add(broker)
                    db.session.commit()
                    flash(message, flag)
                    return redirect(url_for('algo.algo_home'))
                else:
                    is_algo_on_inp = request.form.get('is_algo_on').strip()
                    if is_algo_on_inp == 'ON':
                        is_algo_on_inp = True
                    else:
                        is_algo_on_inp = False
                    broker.account_id = account_id
                    broker.password = password
                    broker.TOTP_Key = TOTP_Key
                    broker.api_key = api_key
                    broker.session_id = sessionID
                    broker.is_logged_in = True
                    broker.is_algo_on = is_algo_on_inp
                    status = False
                    if 'nse_fo' in profile.get('exchEnabled', None):
                        status = True
                        message = "Broker modified successfully."
                        flag = "success"
                    else:
                        message = "The broker was updated successfully, but trades cannot be initiated as NFO is not yet enabled in the linked account."
                        flag = "danger"
                    broker.status = status
                    broker.available_balance = balance.get('net', 0.00)
                    broker.margin_used = balance.get('cncMarginUsed', 0.00)
                    db.session.commit()
                    flash(message, flag)
                    return redirect(url_for('algo.algo_home'))
            else:
                flash("Kindly verify your login credentials.", "danger")
                return redirect(url_for('algo.algo_home'))
        except Exception as e:
            print(f"Error Occurred: {e}")
            flash("Kindly reach out to the system administrator.", "danger")
            return redirect(url_for('algo.algo_home'))
    graphJSON = make_chart(symbol)
    return render_template('algo/dashboard.html', broker=broker, trades=trades, symbols=symbols, symbol=symbol, graphJSON=graphJSON)

@algo.route('/dashboard/get-value-m2m/<broker_id>/', subdomain='algo', methods=['GET'])
@login_required
def get_value(broker_id):
    hash_data = redis_client.hgetall('broker_m2m')  # Fetch value from Redis
    value = hash_data.get(broker_id, 0)
    return jsonify({"broker_id": broker_id, "value": value})

@algo.route('/dashboard/change_options_symbol/', subdomain='algo', methods=['POST'])
@login_required
def change_options_symbol():
    if not current_user.is_algo_access:
        abort(403)
    if request.method == 'POST':
        symbol_name = request.form.get('search_symbol')
        current_user.last_visited_option_symbol = symbol_name
        db.session.commit()
    return redirect(url_for('algo.algo_home'))

@algo.route('/dashboard/change_options_symbol_get/<symbol_name>/', subdomain='algo')
@login_required
def change_options_symbol_get(symbol_name):
    if not current_user.is_algo_access:
        abort(403)
    current_user.last_visited_option_symbol = symbol_name
    db.session.commit()
    return redirect(url_for('algo.algo_home'))

@algo.route('/dashboard/trade/exit/<trade_id>/', subdomain='algo', methods=['POST'])
@login_required
def exit_trade(trade_id):
    '''Must check this code...'''
    if not current_user.is_algo_access:
        abort(403)
    broker = Broker.query.filter_by(user_id=current_user.id).first()
    trade = Trade.query.filter_by(broker_id=broker.id).filter_by(active=True).filter_by(id=trade_id).first()
    if not trade:
        flash(f"No trade found for broker {broker.account_id} associated with user {current_user.fname} {current_user.lname}.", "danger")
        return redirect(url_for('algo.algo_home'))
    alice = Aliceblue(user_id=broker.account_id, api_key=broker.api_key, session_id=broker.session_id)
    orderId = alice.place_order(
        transaction_type=TransactionType.Sell,
        instrument=alice.get_instrument_by_token(exchange='NFO', token=int(trade.token)),
        product_type=ProductType.Intraday,
        order_type=OrderType.Market,
        quantity=trade.qty,
        order_tag=f"Manually exited by {current_user.fname} {current_user.lname}"
    )
    order_stat = orderId.get('stat', 'Not_Ok')
    if order_stat == 'Ok':
        order_history_status = alice.get_order_history(orderId.get('NOrdNo'))
        order_status = order_history_status.get('Status', 'REJECTED').upper()
        RejReason = order_history_status.get('rejectionreason', 'Contact Admin')
        if RejReason == '--':
            RejReason = 'Contact Admin'
        if order_status == 'COMPLETE' or order_status == 'COMPLETED':
            trade.active = False
            trade.sell_price = order_history_status.get('Avgprc')
            db.session.commit()
            flash("Trade exited successfully", "success")
        elif order_status == 'OPEN':
            flash(f"Please contact Admin ASAP. Order Status: {order_status}.", "danger")
        else:
            flash(f"Trade can't exit. Reason: {RejReason}, Order Status: {order_status}", "danger")
    else:
        order_emsg = orderId.get('emsg', 'Contact Admin')
        flash(f"Trade can't exit. Order Status: {order_stat}, Message: {order_emsg}", "danger")
    return redirect(url_for('algo.algo_home'))

@algo.route('/dashboard/trade/addQty/<trade_id>/', subdomain='algo', methods=['POST'])
@login_required
def add_qty(trade_id):
    '''Must check this code...'''
    if not current_user.is_algo_access:
        abort(403)
    lot_size = int(request.form.get(f'lot-{trade_id}'))
    broker = Broker.query.filter_by(user_id=current_user.id).first()
    trade = Trade.query.filter_by(broker_id=broker.id).filter_by(active=True).filter_by(id=trade_id).first()
    option_symbol = SymbolsOptions.query.filter_by(token=trade.token).first()
    lot_size_qty = int(option_symbol.lot_size)
    if not trade:
        flash(f"No trade found for broker {broker.account_id} associated with user {current_user.fname} {current_user.lname}.", "danger")
        return redirect(url_for('algo.algo_home'))
    alice = Aliceblue(user_id=broker.account_id, api_key=broker.api_key, session_id=broker.session_id)
    orderId = alice.place_order(
        transaction_type=TransactionType.Buy,
        instrument=alice.get_instrument_by_token(exchange='NFO', token=int(trade.token)),
        product_type=ProductType.Intraday,
        order_type=OrderType.Market,
        quantity=lot_size * lot_size_qty,
        order_tag=f"More Quantity added by {current_user.fname} {current_user.lname}"
    )
    order_stat = orderId.get('stat', 'Not_Ok')
    if order_stat == 'Ok':
        order_history_status = alice.get_order_history(orderId.get('NOrdNo'))
        order_status = order_history_status.get('Status', 'REJECTED').upper()
        RejReason = order_history_status.get('rejectionreason', 'Contact Admin')
        if RejReason == '--':
            RejReason = 'Contact Admin'
        if order_status == 'COMPLETE' or order_status == 'COMPLETED':
            trade.buy_price = order_history_status.get('Avgprc')
            new_lot_size = trade.lot + lot_size
            trade.lot = new_lot_size
            new_qty = trade.qty + (lot_size * lot_size_qty)
            trade.qty = new_qty
            trade.transaction_time = datetime.now(tz=tz)
            db.session.commit()
            flash(f"{lot_size * lot_size_qty} Quantity added successfully", "success")
        elif order_status == 'OPEN':
            flash(f"Please contact Admin ASAP. Order Status: {order_status}.", "danger")
        else:
            flash(f"No quantity added. Reason: {RejReason}, Order Status: {order_status}.", "danger")
    else:
        order_emsg = orderId.get('emsg', 'Contact Admin')
        flash(f"No quantity added. Order Status: {order_stat}, Message: {order_emsg}.", "danger")
    return redirect(url_for('algo.algo_home'))

@algo.route('/dashboard/trade/enable_tsl/<trade_id>/', subdomain='algo', methods=['POST'])
@login_required
def enable_trailing_stoploss(trade_id):
    if not current_user.is_algo_access:
        abort(403)
    broker = Broker.query.filter_by(user_id=current_user.id).first()
    trade = Trade.query.filter_by(broker_id=broker.id).filter_by(active=True).filter_by(id=trade_id).first()
    if not trade:
        flash(f"No active trade found for broker {broker.account_id} associated with user {current_user.fname} {current_user.lname}.", "danger")
        return redirect(url_for('algo.algo_home'))
    trade.enable_trailing_sl = True
    hash_data = redis_client.hgetall(trade.symbol)
    new_sl = hash_data.get('supertrend', None)
    if new_sl:
        trade.sl = new_sl
    db.session.commit()
    flash("Trailing Stop Loss enabled successfully", "success")
    return redirect(url_for('algo.algo_home'))

@algo.route('/dashboard/trade/disable_tsl/<trade_id>/', subdomain='algo', methods=['POST'])
@login_required
def disable_trailing_stoploss(trade_id):
    if not current_user.is_algo_access:
        abort(403)
    broker = Broker.query.filter_by(user_id=current_user.id).first()
    trade = Trade.query.filter_by(broker_id=broker.id).filter_by(active=True).filter_by(id=trade_id).first()
    if not trade:
        flash(f"No active trade found for broker {broker.account_id} associated with user {current_user.fname} {current_user.lname}.", "danger")
        return redirect(url_for('algo.algo_home'))
    trade.enable_trailing_sl = False
    db.session.commit()
    flash("Trailing Stop Loss disabled successfully", "success")
    return redirect(url_for('algo.algo_home'))
