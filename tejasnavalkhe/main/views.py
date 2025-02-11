from flask import Blueprint, flash, request, render_template, send_from_directory
from tejasnavalkhe.main.utils import new_subscription

main = Blueprint('main', __name__, static_folder="static", static_url_path='/')

@main.route('/')
def serve_index():
	print(main.static_folder)
	return send_from_directory(main.static_folder, "index.html")

@main.errorhandler(404)
def not_found(e):
    return send_from_directory(main.static_folder, "index.html")

# Serve static files (JS, CSS, images)
@main.route("/<path:path>")
def serve_static_files(path):
    return send_from_directory(main.static_folder, path)

@main.route('/coming-soon/', methods=['GET', 'POST'])
def index():
	if request.method == 'POST':
		email = request.form.get('email')
		new_subscription(email)
		flash('Subscription successful! A confirmation email has been sent.', 'success')
	return render_template('index.html')
