from tejasnavalkhe.config import Config
from tejasnavalkhe import mail
from flask_mail import Message

def new_subscription(email):
	msg = Message('Thank You for Subscribing!', sender=(Config.MAIL_NAME, Config.MAIL_USERNAME), recipients=email)
	msg.body = '''Hi,

	Thank you for signing up at tejasnavalkhe.com! I'm excited to have you on board.

	You'll be among the first to receive updates, insights, and exclusive announcements as things progress. Stay tuned—there's a lot to look forward to! 
	Stay tuned for more details—exciting things are on the horizon!

	In the meantime, feel free to connect with me or share any thoughts by replying to this email.

	Thank you once again for your interest and support!

	Warm regards,
	Tejas Satish Navalkhe
	AI Engineer | Data Scientist | Machine Learning Engineer | Algorithmic Trading
'''
	mail.send(msg)

	# Send notification email to the admin
	admin_msg = Message('New Subscription Alert', sender=(Config.MAIL_NAME, Config.MAIL_USERNAME), recipients=Config.ALERT_EMAILS)
	admin_msg.body = f'''Hi,

	A new user has subscribed with the email address: {email}

	Best regards,
	Your Subscription System
	'''
	mail.send(admin_msg)
