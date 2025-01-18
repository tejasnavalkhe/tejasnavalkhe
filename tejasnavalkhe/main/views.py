from flask import Blueprint, flash, request, render_template
from tejasnavalkhe.main.utils import new_subscription

main = Blueprint('main', __name__)

@main.route('/', methods=['GET', 'POST'])
def index():
	if request.method == 'POST':
		email = request.form.get('email')
		new_subscription(email)
		flash('Subscription successful! A confirmation email has been sent.', 'success')
	return render_template('index.html')
