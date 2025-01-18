from flask import Blueprint, flash, request, render_template
from tejasnavalkhe.main.utils import new_subscription, is_valid_email

main = Blueprint('main', __name__)

@main.route('/', methods=['GET', 'POST'])
def index():
	# email = request.form['email']
	# if email and is_valid_email(email):
	# 	new_subscription(email)
	# 	flash('Subscription successful! A confirmation email has been sent.', 'success')
	# else:
	# 	flash('Please enter a valid email address.', 'danger')
	return render_template('index.html')
