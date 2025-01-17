"""
Script Name: auto_broker_login.py
Description: This script logins to broker and generate sessionId of brokers automatically.
Author: Tejas Satish Navalkhe
Last Edit Date: December 04, 2024
"""

import sys
sys.path.insert(0, '/var/www/Finvestox/')
# sys.path.insert(0, "/Users/tejas/Business/TEJAS AI TECH/Clients/Finvestox")

from Finvestox import db, create_app
from Finvestox.models import User
from Finvestox.algo.utils import login_broker
from Finvestox.config import BrokerConfig
from datetime import datetime
from pya3 import *
import pytz
import requests

app = create_app()
app.app_context().push()
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
tz = pytz.timezone('Asia/Calcutta')

users = User.query.filter_by(is_algo_access=True).all()

# URL of the file to be downloaded
url = "https://v2api.aliceblueonline.com/restpy/static/contract_master/NFO.csv"

# Output file name
output_file = "NFO.csv"

try:
    # Sending a GET request to the URL
    response = requests.get(url, stream=True)

    # Check if the request was successful
    if response.status_code == 200:
        # Writing the content to a local file
        with open(output_file, 'wb') as file:
            for chunk in response.iter_content(chunk_size=1024):
                file.write(chunk)
        print(f"File downloaded successfully and saved as {output_file}")
    else:
        print(f"Failed to download file. HTTP Status Code: {response.status_code}")
except Exception as e:
    print(f"An error occurred: {e}")

for user in users:
    if user.broker.is_algo_on and not user.broker.is_logged_in:
        try:
            alice = Aliceblue(user_id=user.broker.account_id, api_key=user.broker.api_key)
            alice_session = alice.get_session_id()
            sessionID_message = alice_session.get('emsg', '')
            if 'User does not login' in sessionID_message:
                try:
                    sessionID = login_broker(account_id=user.broker.account_id, password=user.broker.password, TOTP_Key=user.broker.TOTP_Key, app_code=BrokerConfig.ALICE_APP_ID, api_secret=BrokerConfig.ALICE_SECRET_ID)
                except Exception as e:
                    print(f"Error: {e}")
            else:
                sessionID = alice_session.get('sessionID', None)
            if sessionID:
                alice = Aliceblue(user_id=user.broker.account_id, api_key=user.broker.api_key, session_id=sessionID)
                profile = alice.get_profile()
                balance = alice.get_balance()[0]
                user.broker.available_balance = balance.get('net', 0.00)
                user.broker.margin_used = balance.get('cncMarginUsed', 0.00)
                user.broker.modified_at = datetime.now(tz)
                user.broker.session_id = sessionID
                user.broker.is_logged_in = True
            db.session.commit()
        except Exception as e:
            print(f"Error: {e}")
