"""
Script Name: squareoff.py
Description: This script removes all trades from brokers terminal and from our system at 3.10 PM.
Author: Tejas Satish Navalkhe
Last Edit Date: January 11, 2024
"""

import sys
sys.path.insert(0, '/var/www/Finvestox/')

from Finvestox import db, create_app
from Finvestox.config import Config
from Finvestox.models import Broker, Trade
from Finvestox.main.utils import send_email_user
from datetime import datetime
from pya3 import *
import pytz

app = create_app()
app.app_context().push()
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
tz = pytz.timezone('Asia/Calcutta')

brokers = Broker.query.filter_by(is_logged_in=True).filter_by(is_algo_on=True).all()

for broker in brokers:
    trades = Trade.query.filter_by(broker_id=broker.id).filter_by(active=True).all()
    for trade in trades:
        alice = Aliceblue(user_id=broker.account_id, api_key=broker.api_key, session_id=broker.session_id)
        current_time = datetime.now(tz).strftime('%Y-%m-%d %H:%M:%S')
        orderId = alice.place_order(
            transaction_type=TransactionType.Sell,
            instrument=alice.get_instrument_by_token(exchange='NFO', token=int(trade.token)),
            product_type=ProductType.Intraday,
            order_type=OrderType.Market,
            quantity=trade.qty,
            order_tag=f"Auto Square Off {trade.symbol} at {current_time}",
        )
        order_stat = orderId.get('stat', 'Not_Ok')
        if order_stat == 'Ok':
            order_history_status = alice.get_order_history(orderId.get('NOrdNo'))
            order_status = order_history_status.get('Status', 'REJECTED').upper()
            RejReason = order_history_status.get('rejectionreason', 'Contact Admin')
            if RejReason == '--':
                RejReason = 'Contact Admin'
            if order_status == 'COMPLETE' or order_status == 'COMPLETED':
                # Change active to False the trade.
                sell_price = order_history_status.get('Avgprc')
                trade.active = False
                trade.sell_price = sell_price
                db.session.commit()
                # Send email to the user for successful square off.
                send_email_user([broker.email_address, Config.ALERT_EMAIL], 'Trade Square Off Successful', f"Trade {trade.symbol} with token {trade.token} is squared off.")
        else:
            # Send email to the user for failed square off.
            send_email_user([broker.email_address, Config.ALERT_EMAIL], 'Trade Square Off Failed', f"Trade {trade.symbol} with token {trade.token} is not squared off. Reason: {orderId.get('emsg', 'Contact Admin')}. Please square off all your trades from brokers terminal and contact the admin ASAP.")
