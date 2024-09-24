from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from app.models import db, Admins, Articles

def configure_admin(app):
    admin = Admin(app, name='Admin Dashboard', template_mode='bootstrap3')


    admin.add_view(ModelView(Admins, db.session))
    admin.add_view(ModelView(Articles, db.session))
