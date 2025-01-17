"""
Script Name: trail_sl.py
Author: Tejas Satish Navalkhe
Last Edit Date: November 24, 2024
"""

import sys
sys.path.insert(0, '/var/www/Finvestox/')

from Finvestox import db, create_app
from Finvestox.models import Trade
from time import sleep
import pytz
import redis
from utils import *
from pya3 import *
import logging

app = create_app()
app.app_context().push()
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
tz = pytz.timezone('Asia/Calcutta')

# Configure the logging
logging.basicConfig(
    filename='/var/www/Finvestox/Finvestox/algo/log/trail_sl.log',  # Name of the log file
    level=logging.INFO,  # Logging level
    format='%(asctime)s - %(levelname)s - %(message)s'  # Log message format
)

tz = pytz.timezone('Asia/Calcutta')
redis_client = redis.StrictRedis(host='172.235.26.92', port=6379, password='#FinvestoxSakthiKumar1810', db=0, decode_responses=True, socket_timeout=5)

sleep(30)

try:
    trades = Trade.query.filter_by(enable_trailing_sl=True).filter_by(active=True).all()

    for trade in trades:
        old_sl = trade.sl
        hash_data = redis_client.hgetall(trade.symbol)
        sl = float(hash_data.get('supertrend'))
        trade.sl = sl
        db.session.commit()
        logging.info(f"SL updated from {old_sl} to {sl} for trade id {trade.id} of broker id {trade.broker_id}.")
except Exception as err:
    print(f"[Trail SL] Error: {err}")
