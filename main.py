from tejasnavalkhe import create_app
from tejasnavalkhe.main.views import *

app = create_app()

if __name__ == '__main__':
	app.run(debug=True)
