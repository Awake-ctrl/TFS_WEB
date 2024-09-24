from flask import Flask
from app.models import db
from app.views import api
from app.admin import configure_admin

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'
    app.config['SECRET_KEY'] = 'mysecret'

    db.init_app(app)

    # Register API blueprint for React
    app.register_blueprint(api, url_prefix='/api')

    # Configure Flask-Admin
    configure_admin(app)

    return app
