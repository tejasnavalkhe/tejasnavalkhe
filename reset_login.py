"""
Script Name: reset_login.py
Description: This script reset login, session_id.
Author: Tejas Satish Navalkhe
Last Edit Date: January 16, 2024
"""

import sys
sys.path.insert(0, '/var/www/Finvestox/')
# sys.path.insert(0, "/Users/tejas/Business/TEJAS AI TECH/Clients/Finvestox")

from Finvestox import db, create_app
from Finvestox.models import Broker, User, Trade
from Finvestox.main.utils import send_email_to_admin
from datetime import datetime
import pytz
import os
import redis

app = create_app()
app.app_context().push()
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
tz = pytz.timezone('Asia/Calcutta')

brokers = Broker.query.filter_by(is_logged_in=True).all()
redis_client = redis.StrictRedis(host='172.235.26.92', port=6379, password='#FinvestoxSakthiKumar1810', db=0, decode_responses=True, socket_timeout=5)

for broker in brokers:
    broker.modified_at = datetime.now(tz)
    broker.is_logged_in = False
    broker.session_id = None
    db.session.commit()

# Delete all keys from all databases
redis_client.flushall()

# File name to delete
file_name = "NFO.csv"

try:
    # Check if the file exists
    if os.path.exists(file_name):
        # Delete the file
        os.remove(file_name)
        print(f"File '{file_name}' has been deleted successfully.")
    else:
        print(f"File '{file_name}' does not exist.")
except Exception as e:
    print(f"An error occurred while trying to delete the file: {e}")

users = User.query.all()

for user in users:
    user.last_visited_option_symbol = None
    db.session.commit()

trades = Trade.query.all()

for trade in trades:
    db.session.delete(trade)
    db.session.commit()

message = "All the tables, Redis and Users last visited options symbol has been reset successfully."
total_users = len(users)
users_with_none = len([user for user in users if user.last_visited_option_symbol is None])
total_trades = len(trades)
redis_keys_count = len(redis_client.keys('*'))

message += f"\n\nSummary:\nTotal Users: {total_users}\nUsers with last_visited_option_symbol as None: {users_with_none}\nTotal Trades: {total_trades}\nTotal Redis Keys: {redis_keys_count}"

send_email_to_admin("Reset All Tables and Redis and Users last visited options symbol", message)
