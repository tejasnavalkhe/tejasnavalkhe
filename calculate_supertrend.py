"""
Script Name: calculate_supertrend.py
Description: This script calculates the Supertrend (5, 1.5) on a 5-minute NIFTY Futures timeframe. 
            For a "buy" signal, it stores the candle high and direction as Buy to Redis database. 
            Similarly, for a "sell" signal, it stores the candle low and direction as Sell to Redis database.
Author: Tejas Satish Navalkhe
Last Edit Date: January 07, 2024
"""

import sys
sys.path.insert(0, '/var/www/Finvestox/')
# sys.path.insert(0, "/Users/tejas/Business/TEJAS AI TECH/Clients/Finvestox")

from Finvestox import db, create_app
from Finvestox.models import DataFutures, SymbolsFutures
import numpy as np
import pandas as pd
import pandas_ta as ta
from datetime import datetime, timedelta, time
from time import sleep
import pytz
import redis

app = create_app()
app.app_context().push()
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
tz = pytz.timezone('Asia/Calcutta')

# Connect to Redis (Server 2)
r = redis.StrictRedis(host='172.235.26.92', port=6379, password='#FinvestoxSakthiKumar1810', db=0, decode_responses=True, socket_timeout=5)

if datetime.now(tz).time() < time(9, 15, tzinfo=tz) or datetime.now(tz).time() > time(15, 30, tzinfo=tz):
	sys.exit('Calculate SuperTrend only from 9.15 AM to 3.30 PM every 5 mins.')

sleep(13)

symbols_table = SymbolsFutures.query.filter_by(series='FUTIDX').all()
start = datetime.now(tz)-timedelta(days=20)
start = str(int(start.timestamp()))
end = datetime.now(tz)
end = str(int(end.timestamp()))

def calculations(future_symbol):
	app.app_context().push()
	# Get 5 min data for symbol
	try:
		candles = DataFutures.query.order_by(DataFutures.time_stamp.asc()).filter(DataFutures.time_stamp >= start).filter(DataFutures.time_stamp <= end).filter(DataFutures.symbol==future_symbol).filter(DataFutures.resolution=="5").all()
		candles_data = []
		for data in candles:
			t = int(float(data.time_stamp))
			o = data.open
			h = data.high
			l = data.low
			c = data.close
			v = data.volume
			candles_data.append([t,o,h,l,c,v])
	except Exception as e:
		print('Error', e)

	# Create dataframe
	df = pd.DataFrame(candles_data, columns=['Time Stamp', 'Open', 'High', 'Low', 'Close', 'Volume'])
	df = df.drop_duplicates(subset = ['Time Stamp'], keep = 'last').reset_index(drop = True)
	df[df.columns[0]] = df.loc[:, 'Time Stamp'].apply(lambda timestamp: datetime.fromtimestamp(timestamp))
	df[df.columns[0]] = pd.to_datetime(df['Time Stamp'], errors='coerce')
	df[df.columns[0]] = df.loc[:, 'Time Stamp'].dt.tz_localize('Asia/Kolkata').dt.tz_convert('Asia/Kolkata')
	df[df.columns[0]] = df.loc[:, 'Time Stamp'].dt.strftime("%Y-%m-%d %H:%M:%S")

	# Supertrend (5, 1.5)
	supertrend = ta.supertrend(df['High'], df['Low'], df['Close'], length=5, multiplier=1.5)
	df.loc[:,'supertrend'], df.loc[:,'direction'] = supertrend['SUPERT_5_1.5'], supertrend['SUPERTd_5_1.5']
	df.reset_index(inplace=True)
	df.drop(['index'], axis=1, inplace=True)

	# Signal & Positions for SuperTrend
	df.loc[:, 'Signal'] = 0.0
	df.loc[:, 'Signal'] = np.where(df.loc[:, 'direction'] > 0, 1.0, 0.0)
	df.loc[:, 'Positions'] = df.loc[:, 'Signal'].diff()

	supertrend_signal = df['Positions'].iloc[-1]
	high_price = df['High'].iloc[-1]
	low_price = df['Low'].iloc[-1]
	close_price = df['Close'].iloc[-1]
	timee = str(df['Time Stamp'].iloc[-1])
	supertrend_value = df['supertrend'].iloc[-1]
	supertrend_value = round(supertrend_value, 2)
	r.hset(future_symbol, mapping={"supertrend": supertrend_value, "name": future_symbol})

	if supertrend_signal == 1:
		try:
			# Storing to redis
			r.hset(future_symbol, mapping={"high": high_price, "low": low_price, "close": close_price, 'sl': supertrend_value, "direction": "buy", "name": future_symbol, 'time': timee})
			print(f"{future_symbol} stored in Redis: Buy when LTP breaches high {high_price}.")
		except Exception as e:
			print("Error", e)
	elif supertrend_signal == -1:
		try:
			# Storing to redis
			r.hset(future_symbol, mapping={"high": high_price, "low": low_price, "close": close_price, 'sl': supertrend_value, "direction": "sell", "name": future_symbol, 'time': timee})
			print(f"{future_symbol} stored in Redis: Sell when LTP breaches low {low_price}.")
		except Exception as e:
			print("Error", e)
	else:
		try:
			print(f"{future_symbol}: Supertrend is neutral. No action taken")
		except Exception as e:
			print("Error", e)
	return

for symbol in symbols_table:
	calculations(symbol.symbol)
