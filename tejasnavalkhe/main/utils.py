# from tejasnavalkhe.config import Config
# from tejasnavalkhe import mail
# from flask_mail import Message
# import re

# def new_subscription(email):
# 	msg = Message('Thank You for Subscribing!', sender=(Config.MAIL_NAME, Config.MAIL_USERNAME), recipients=email)
# 	msg.body = '''Hi,

# 	Thank you for signing up at tejasnavalkhe.com! I'm excited to have you on board.

# 	You'll be among the first to receive updates, insights, and exclusive announcements as things progress. Stay tuned—there's a lot to look forward to! 
# 	Stay tuned for more details—exciting things are on the horizon!

# 	In the meantime, feel free to connect with me or share any thoughts by replying to this email.

# 	Thank you once again for your interest and support!

# 	Warm regards,
# 	Tejas Satish Navalkhe
# 	AI Engineer | Data Scientist | Machine Learning Engineer | Algorithmic Trading
# '''
# 	mail.send(msg)

# 	# Send notification email to the admin
# 	admin_msg = Message('New Subscription Alert', sender=(Config.MAIL_NAME, Config.MAIL_USERNAME), recipients=[Config.MAIL_USERNAME])
# 	admin_msg.body = f'''Hi,

# 	A new user has subscribed with the email address: {email}

# 	Best regards,
# 	Your Subscription System
# 	'''
# 	mail.send(admin_msg)

# def is_valid_email(email):
# 	# Simple regex for validating an email
# 	email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
# 	return re.match(email_regex, email) is not None
