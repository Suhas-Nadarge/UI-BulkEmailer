from flask import Flask , request
from flask_cors import CORS , cross_origin 
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_mail import Mail
import os

# For API
from flask_restful import Api

app = Flask(__name__)
api = Api(app)


CORS(app)

app.config['SECRET_KEY'] = '5792b192471948d429ad8339f6416749'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
# 'mysql://username:password@localhost/db_name'
db = SQLAlchemy(app)


app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.environ.get('EMAIL_ID')
app.config['MAIL_PASSWORD'] = os.environ.get('EMAIL_PASS')
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('EMAIL_ID')
mail = Mail(app)

#for passswd hash
bcrypt = Bcrypt(app)

# to handle user login
login_manager = LoginManager(app)
# to tell where to check login view
login_manager.login_view = 'login'


from flaskapp import routes