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
import logging

app = create_app()
app.app_context().push()
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
tz = pytz.timezone('Asia/Calcutta')

logging.basicConfig(filename='/var/www/Finvestox/Finvestox/algo/squareoff.log', level=logging.INFO, format='%(asctime)s - %(message)s')

brokers = Broker.query.filter_by(is_logged_in=True).filter_by(is_algo_on=True).all()

for broker in brokers:
    trades = Trade.query.filter_by(broker_id=broker.id).filter_by(active=True).all()
    if trades:
        logging.info(f"Square off trades for broker {broker.account_id}")
        alice = Aliceblue(user_id=broker.account_id, api_key=broker.api_key, session_id=broker.session_id)
        logging.info(f"Logged in to Aliceblue for broker {broker.account_id}")
        for trade in trades:
            logging.info(f"Square off trade {trade.trading_symbol} with token {trade.token}")
            current_time = datetime.now(tz).strftime('%Y-%m-%d %H:%M:%S')
            logging.info(f"Current Time: {current_time}")
            orderId = alice.squareoff_positions(exchange='nse_fo', pCode='MIS', qty=int(trade.qty), tokenno=int(trade.token), symbol=trade.trading_symbol)
            logging.info(f"Square off order for {trade.trading_symbol} with token {trade.token} placed with response {orderId}")
            order_stat = orderId.get('stat', 'Not_Ok')
            if order_stat == 'Ok':
                logging.info(f"Order Status: {order_stat}")
                order_history_status = alice.get_order_history(orderId.get('NOrdNo'))
                logging.info(f"Order History Status: {order_history_status}")
                order_status = order_history_status.get('Status', 'REJECTED').upper()
                RejReason = order_history_status.get('rejectionreason', 'Contact Admin')
                if RejReason == '--':
                    RejReason = 'Contact Admin'
                if order_status == 'COMPLETE' or order_status == 'COMPLETED':
                    # Change active to False the trade.
                    sell_price = order_history_status.get('Avgprc')
                    logging.info(f"Trade {trade.trading_symbol} with token {trade.token} is squared off and sell price is {sell_price}.")
                    trade.active = False
                    trade.sell_price = sell_price
                    db.session.commit()
                    # Send email to the user for successful square off.
                    send_email_user([broker.email_address, Config.ALERT_EMAIL], 'Trade Square Off Successful', f"Trade {trade.trading_symbol} with token {trade.token} is squared off.")
            else:
                # Send email to the user for failed square off.
                send_email_user([broker.email_address, Config.ALERT_EMAIL], 'Trade Square Off Failed', f"Trade {trade.trading_symbol} with token {trade.token} is not squared off. Reason: {orderId.get('emsg', 'Contact Admin')}. Please square off all your trades from brokers terminal and contact the admin ASAP.")
                sleep(300)
                break
