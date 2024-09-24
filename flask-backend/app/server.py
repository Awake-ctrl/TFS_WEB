from models import db, Admins, Article 
from views import AdminIndexView2, ArticleView

from flask import Flask, redirect, url_for, flash
from flask_admin import Admin
from flask_admin.base import MenuLink
from flask_login import LoginManager, logout_user, login_required
import os


app = Flask(__name__)
secret_key = os.urandom(48)
app.config["SECRET_KEY"] = secret_key
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///finaleee.db' 
db.init_app(app)





login_manager = LoginManager(app)
login_manager.login_view = 'login'



@app.route('/admin-logout')
@login_required
def adminlogout():
    logout_user()
    flash("Admin has successfully logged out","error")
    return redirect(url_for("userlogin"))

