from Finvestox.models import SymbolsOptions, DataOptions
import numpy as np
import plotly
import json
import pandas as pd
import pandas_ta as ta
import plotly.graph_objects as go
import pytz
from datetime import datetime, timedelta

import pyotp
import hashlib
import requests
from Finvestox.config import Config
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from time import sleep

tz = pytz.timezone('Asia/Calcutta')

def login_broker(account_id, password, TOTP_Key, app_code, api_secret):
    userSession = None
    LOGIN_URL = f"https://ant.aliceblueonline.com/?appcode={app_code}"
    SSO_URL = "https://ant.aliceblueonline.com/rest/AliceBlueAPIService/sso/getUserDetails"
    if Config.TESTING:
        driver = webdriver.Chrome()
    else:
        # Linux Server
        driver_location = "/usr/bin/chromedriver"
        service = Service(executable_path=driver_location)
        chrome_options = Options()
        chrome_options.add_argument('--headless')
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument("--remote-debugging-port=9222")
        driver = webdriver.Chrome(service=service, options=chrome_options)

    driver.get(LOGIN_URL)
    initial_loginByUserIdSubmit = WebDriverWait(driver, 25).until(lambda x: x.find_element(By.XPATH, "//*[@id='initial_loginByUserId']"))
    initial_loginByUserIdSubmit.click()

    alice_client_id = WebDriverWait(driver, 7).until(lambda x: x.find_element(By.XPATH, "//*[@id='userid_inp']"))
    alice_client_id.send_keys(account_id)
    clientIdSubmit = WebDriverWait(driver, 25).until(lambda x: x.find_element(By.XPATH, "//*[@id='userId_btn']"))
    clientIdSubmit.click()
    try:
        alice_password = WebDriverWait(driver, 7).until(lambda x: x.find_element(By.XPATH, "//*[@id='password_inp']"))
        alice_password.send_keys(password)
        clientIdSubmit = WebDriverWait(driver, 25).until(lambda x: x.find_element(By.XPATH, "//*[@id='password_btn']"))
        clientIdSubmit.click()

        totp = pyotp.TOTP(TOTP_Key)
        totp_otp = totp.now()
        alice_totp = WebDriverWait(driver, 7).until(lambda x: x.find_element(By.XPATH, "//*[@id='totp_otp_inp']"))
        alice_totp.send_keys(totp_otp)
        sleep(1)
        try:
            authSubmit = WebDriverWait(driver, 7).until(lambda x: x.find_element(By.XPATH, "//*[@id='authorize_btn']"))
            if authSubmit:
                authSubmit.click()
        except TimeoutException:
            pass

        start = driver.current_url.find('authCode=')+9
        end = driver.current_url.find(f'&userId={account_id}', start)
        auth_code=driver.current_url[start:end].split('&')[0]
        driver.quit()
        sha_code = hashlib.sha256(f"{account_id}{auth_code}{api_secret}".encode()).hexdigest()
        resp = requests.post(SSO_URL, json={"checkSum": sha_code})
        userSession = resp.json().get('userSession', None)
        if userSession is not None:
            return userSession
        else:
            return None
    except Exception as e:
        pass
    return userSession

def select_nearest_strike(futures_price, option_type, index):
    """
    Function to select the nearest strike price for CE (Call) or PE (Put) options 
    based on the futures price and index type.

    Parameters:
    - futures_price: Current futures price.
    - option_type: Type of option ('CE' for Call, 'PE' for Put).
    - index: The index for which we want to find the strike price (e.g., 'NIFTY', 'BANKNIFTY').

    Returns:
    - Nearest strike price based on the option type.
    """
    # Define strike price differences based on index
    strike_diffs = {
        'NIFTY-I': 50,
        'NIFTYNXT50-I': 100,
        'MIDCPNIFTY-I': 50,
        'BANKNIFTY-I': 100,
        'FINNIFTY-I': 50
    }
    
    # Get the strike price difference for the given index
    strike_diff = strike_diffs.get(index, 50)  # Default to 50 if index is unknown
    
    # Calculate the nearest strike price based on option type
    if option_type == 'CE':
        # For Call (CE), strike price < futures price
        nearest_strike = (futures_price // strike_diff) * strike_diff
    elif option_type == 'PE':
        # For Put (PE), strike price > futures price
        nearest_strike = ((futures_price + strike_diff - 1) // strike_diff) * strike_diff
    else:
        raise ValueError("Invalid option_type. Must be 'CE' or 'PE'.")
    
    return nearest_strike

def calculate_VWAP(df):
	# Calculate typical price
	df['typical_price'] = (df['High'] + df['Low'] + df['Close']) / 3
	# Calculate VWAP
	df['cumulative_price_volume'] = (df['typical_price'] * df['Volume']).cumsum()
	df['cumulative_volume'] = df['Volume'].cumsum()
	df['VWAP'] = df['cumulative_price_volume'] / df['cumulative_volume']
	return df['VWAP']

def make_chart(symbol, data_minute='3'):
	try:
		# Chart Calculations
		df_len = 1040

		# Get symbol from database
		symbol = SymbolsOptions.query.filter_by(fyers_data_symbol=symbol).first()
		last_signal = symbol.ttype
		last_signal_price = symbol.close
		ttime = symbol.ttime
		color_var = 'white'
		if last_signal in ['Buy']:
			color_var = 'green'
		elif last_signal in ['Sell']:
			color_var = 'red'
		candles_data = []

		# Get 3 min data for symbol
		try:
			from_days_add = 10
			from_date = datetime.now(tz)-timedelta(days=from_days_add)
			year_ = from_date.date().year
			month_ = from_date.date().month
			day_ = from_date.date().day
			from_date = datetime(year_, month_, day_, 9, 10)
			candles = DataOptions.query.filter_by(symbol_id=symbol.id).filter_by(resolution=data_minute).filter(DataOptions.time_stamp >= from_date.timestamp()).order_by(DataOptions.time_stamp.asc()).all()
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
			print('Error:', e)

		# Create dataframe
		df = pd.DataFrame(candles_data, columns=['Time Stamp', 'Open', 'High', 'Low', 'Close', 'Volume'])
		df = df.drop_duplicates(subset = ['Time Stamp'], keep = 'last').reset_index(drop = True)

		df[df.columns[0]] = df.loc[:, 'Time Stamp'].apply(lambda timestamp: datetime.fromtimestamp(timestamp))
		df[df.columns[0]] = pd.to_datetime(df['Time Stamp'], errors='coerce')
		df[df.columns[0]] = df.loc[:, 'Time Stamp'].dt.tz_localize('Asia/Kolkata').dt.tz_convert('Asia/Kolkata')
		df[df.columns[0]] = df.loc[:, 'Time Stamp'].dt.strftime("%Y-%m-%d %H:%M:%S")

		# EMA_45_Low, EMA_45_High and Supertrend
		df.loc[:, 'EMA_45_Low'] = ta.ema(df['Low'], 45)
		df.loc[:, 'EMA_45_High'] = ta.ema(df['High'], 45)
		supertrend = df.ta.supertrend(period=7, multiplier=3)
		df.loc[:,'supertrend'], df.loc[:,'direction'] = supertrend['SUPERT_7_3.0'], supertrend['SUPERTd_7_3.0']
		df.reset_index(inplace=True)
		df.drop(['index'], axis=1, inplace=True)

		# Signal & Positions for SuperTrend
		df.loc[:, 'Signal'] = 0.0
		df.loc[:, 'Signal'] = np.where(df.loc[:, 'direction'] > 0, 1.0, 0.0)
		df.loc[:, 'Positions'] = df.loc[:, 'Signal'].diff()

		# Calculate MACD
		macd_signal_color = 'yellow'
		macd_signal = ''
		macd = ta.macd(df['Close'])
		macd_line_value, macd_signal_value = round(macd.iloc[-1:, 0].values[-1], 2), round(macd.iloc[-1:, 1].values[-1], 2)

		if macd_line_value > macd_signal_value:
			macd_signal_color = 'green'
			macd_signal = 'BUY'
		else:
			macd_signal_color = 'red'
			macd_signal = 'SELL'


		# Calculate RSI
		rsi = ta.rsi(df['Close'])
		rsi_value = round(rsi.values[-1], 2)
		rsi_val_color = 'yellow'
		rsi_text = 'WAIT'
		if rsi_value > 55:
			rsi_val_color = 'green'
			rsi_text = 'BUY'
		elif rsi_value < 45:
			rsi_val_color = 'red'
			rsi_text = 'SELL'

		df['VWAP'] = calculate_VWAP(df)
		print(df.head(15))
		print(df.tail(15))

		# Get daily data for symbol
		try:
			candles_pivots = DataOptions.query.filter_by(symbol_id=symbol.id).filter_by(resolution='D').order_by(DataOptions.time_stamp.asc()).all()
			candles_data_pivots = []
			for data in candles_pivots:
				t = int(float(data.time_stamp))
				o = data.open
				h = data.high
				l = data.low
				c = data.close
				v = data.volume
				candles_data_pivots.append([t,o,h,l,c,v])
		except Exception as e:
			print('Error:', e)

		# Store daily data
		df_pivots = pd.DataFrame(candles_data_pivots, columns=['Time Stamp', 'Open', 'High', 'Low', 'Close', 'Volume'])
		df_pivots.loc[:, 'Time Stamp'] = df_pivots.loc[:, 'Time Stamp'].apply(lambda timestamp: datetime.fromtimestamp(timestamp))
		df_pivots.loc[:, 'Time Stamp'] = pd.to_datetime(df_pivots['Time Stamp'], errors='coerce')
		df_pivots.loc[:, 'Time Stamp'] = df_pivots.loc[:, 'Time Stamp'].dt.tz_localize('Asia/Kolkata').dt.tz_convert('Asia/Kolkata')
		df_pivots.loc[:, 'Time Stamp'] = df_pivots.loc[:, 'Time Stamp'].dt.strftime("%Y-%m-%d")
		df_pivots = df_pivots.drop_duplicates(subset = ['Time Stamp'], keep = 'last').reset_index(drop = True)

		# Add row if today's date is not there in dataframe
		if str(datetime.now(tz).date()) not in list(df_pivots['Time Stamp'].values):
			df2 = {'Time Stamp': str(datetime.now(tz).date()), 'Open': np.nan, 'High': np.nan, 'Low': np.nan, 'Close': np.nan, 'Volume': np.nan}
			df_pivots = df_pivots.append(df2, ignore_index = True)

		# Calculate Camrilla Pivots and add S_3, S_4, R_3, R_4
		df_pivots.loc[:,'S_3'] = df_pivots.loc[:, 'Close'] - ((df_pivots.loc[:, 'High']-df_pivots.loc[:, 'Low'])*1.1/4)
		df_pivots.loc[:,'S_4'] = df_pivots.loc[:, 'Close'] - ((df_pivots.loc[:, 'High']-df_pivots.loc[:, 'Low'])*1.1/2)
		df_pivots.loc[:,'R_3'] = df_pivots.loc[:, 'Close'] + ((df_pivots.loc[:, 'High']-df_pivots.loc[:, 'Low'])*1.1/4)
		df_pivots.loc[:,'R_4'] = df_pivots.loc[:, 'Close'] + ((df_pivots.loc[:, 'High']-df_pivots.loc[:, 'Low'])*1.1/2)

		# Assigning S_3, S_4, R_3, R_4 to df
		df_pivots_dates = list(df_pivots['Time Stamp'].values)
		for datas in range(len(df_pivots_dates)):
			if datas+1 != len(df_pivots_dates):
				date_to_check = df_pivots_dates[datas+1]
				data_to_append = df_pivots.iloc[datas, :]
				mask = df['Time Stamp'].str.contains(date_to_check)
				df.loc[mask, 'S_3'] = data_to_append['S_3']
				df.loc[mask, 'S_4'] = data_to_append['S_4']
				df.loc[mask, 'R_3'] = data_to_append['R_3']
				df.loc[mask, 'R_4'] = data_to_append['R_4']

		# Reset index
		df.reset_index(inplace=True)
		df = df.iloc[-df_len:]
		# Y-axis
		daily_high = df.iloc[:, 2].max()+df.iloc[:, 3].min()*0.001
		daily_low = df.iloc[:, 3].min()-df.iloc[:, 3].min()*0.001

		# Start plotting chart
		# Layout
		if last_signal:
			layout = go.Layout(paper_bgcolor='black', plot_bgcolor='black', yaxis=dict(range=[daily_low, daily_high], gridwidth=1, showgrid=True),
				autosize=True, margin=go.layout.Margin(l=0, r=0, b=10, t=30, pad=0), annotations=[go.layout.Annotation(
					text=f'<b style="color: white;">Date: {ttime}<br>Signal :<span style="color: {color_var};"> {last_signal}</span><br>Price : <span style="color: {color_var};">{last_signal_price}</span></b>',
					align='left',
					showarrow=False,
					xref='paper',
					yref='paper',
					x=0,
					y=1.03,
					borderwidth=2,
					bgcolor='black',
					borderpad=10
				)])
		else:
			layout = go.Layout(paper_bgcolor='black', plot_bgcolor='black', yaxis=dict(range=[daily_low, daily_high], gridwidth=1, showgrid=True),
				autosize=True, margin=go.layout.Margin(l=0, r=0, b=10, t=30, pad=0))

		# Figure
		df_buy = df.where(df.loc[:, 'direction'] > 0)
		df_sell = df.where(df.loc[:, 'direction'] < 0)
		fig = go.Figure(data=[go.Candlestick(x=df['Time Stamp'],open=df['Open'], high=df['High'],
						low=df['Low'], close=df['Close'], showlegend = False, name=symbol.symbol, increasing_line_color= 'green', decreasing_line_color= 'red')], layout=layout)
		# yaxes
		fig.update_yaxes(tickmode="auto", showgrid=False, color='white', hoverformat=".2f", tickformat=".2f")

		# Signals Buy/Sell - EMA Crossover Or SuperTrend
		fig.add_trace(go.Scatter(x=df['Time Stamp'][df['Positions'] == 1], y=df['supertrend'][df['Positions'] == 1], marker_symbol='triangle-up',
								mode='markers+text', name='Buy', text='Buy', textposition="bottom center",
								marker=dict(size=10, line=dict(width=5.5, color='green')), showlegend = False, textfont_size=15,
								textfont_color='white', textfont_family="sans serif"))
		fig.add_trace(go.Scatter(x=df['Time Stamp'][df['Positions'] == -1], y=df['supertrend'][df['Positions'] == -1], marker_symbol='triangle-down',
								mode='text+markers', name='Sell', text='Sell', textposition="top center",
								marker=dict(size=10, line=dict(width=5.5, color='red')), showlegend = False, textfont_size=15,
								textfont_color='white', textfont_family="sans serif"))

		# Pivots
		fig.add_trace(go.Scatter(x=df.loc[:, 'Time Stamp'], y=df['S_3'], name='S3', showlegend=False, line=dict(color='green')))
		fig.add_trace(go.Scatter(x=df.loc[:, 'Time Stamp'], y=df['S_4'], name='S4', showlegend=False, line=dict(color='red')))
		fig.add_trace(go.Scatter(x=df.loc[:, 'Time Stamp'], y=df['R_3'], name='R3', showlegend=False, line=dict(color='green')))
		fig.add_trace(go.Scatter(x=df.loc[:, 'Time Stamp'], y=df['R_4'], name='R4', showlegend=False, line=dict(color='red')))

		# EMA 45 (Low & High)
		fig.add_trace(go.Scatter(x=df.loc[:, 'Time Stamp'], y=df['EMA_45_Low'], name='', showlegend=False, line=dict(color='white', dash='dot')))
		fig.add_trace(go.Scatter(x=df.loc[:, 'Time Stamp'], y=df['EMA_45_High'], name='', showlegend=False, line=dict(color='white', dash='dot')))

		# VWAP
		fig.add_trace(go.Scatter(x=df.loc[:, 'Time Stamp'], y=df['VWAP'], name='', showlegend=False, line=dict(color='yellow', dash='dot')))


		fig.add_trace(go.Candlestick(x=df_buy['Time Stamp'],open=df_buy['Open'], high=df_buy['High'],
						low=df_buy['Low'], close=df_buy['Close'], showlegend = False, name=symbol.symbol, increasing_fillcolor='green', decreasing_fillcolor='green', increasing_line_color= 'green', decreasing_line_color= 'green'))
		fig.add_trace(go.Candlestick(x=df_sell['Time Stamp'],open=df_sell['Open'], high=df_sell['High'],
						low=df_sell['Low'], close=df_sell['Close'], showlegend = False, name=symbol.symbol, increasing_fillcolor='red', decreasing_fillcolor='red', increasing_line_color= 'red', decreasing_line_color= 'red'))

		# xaxes
		fig.update_xaxes(dict(type="category"), visible=False)
		# layout
		fig.update_layout(xaxis_rangeslider_visible=False, dragmode='pan', yaxis={'side': 'right'})
		fig.add_annotation(x=0, y=0,
					text=f'<b><span style="color: white;">MACD: <span style="color: green;">{macd_line_value}</span></span> <span style="color: red;">{macd_signal_value}</span><span style="color: {macd_signal_color};"> {macd_signal}</span><br><span style="color: white;">RSI: <span style="color: {rsi_val_color};">{rsi_value}</span> <span style="color: {rsi_val_color};"> {rsi_text}</span> </span></b>',
					align='left',
					showarrow=False,
					xref='paper',
					yref='paper',
					borderwidth=2,
					bgcolor='black',
					borderpad=10)

		graphJSON = json.dumps(fig, cls=plotly.utils.PlotlyJSONEncoder)
	except Exception as e:
		graphJSON = None
	return graphJSON
