#!/usr/bin/python3
activate_this = '/var/www/tejasnavalkhe/env/bin/activate_this.py'
exec(open(activate_this).read(), dict(__file__=activate_this))
import sys
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/tejasnavalkhe/")

from tejasnavalkhe import create_app
from tejasnavalkhe.main.views import *

application = create_app()

application.secret_key = "bb1317b91710070fe899ca49418e6e2d973fb0aab8a5e3cfbebce07bb66316863d5b476c29be8e13f88c5110d1b3f159a2d6"
