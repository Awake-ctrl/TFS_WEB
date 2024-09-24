from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

db = SQLAlchemy()

class Admins(UserMixin, db.Model):
    __tablename__ = 'admins'
    AdminID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    AdminName = db.Column(db.String(100), nullable=False)
    AdminUniqueID = db.Column(db.Integer, unique=True, nullable=False)
    AdminSmail = db.Column(db.String(50), unique=True, nullable=False)
    AdminPassword = db.Column(db.String(100), nullable=False)
    is_admin = db.Column(db.Boolean, default=False, nullable=False)

class Articles(db.Model):
    __tablename__ = 'articles'
    ArticleID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    ArticleHeading = db.Column(db.String(100), nullable=False)
    ArticleAuthor = db.Column(db.String(50), nullable=True)
    ArticlePublicationDate = db.Column(db.DateTime)
    ArticleText = db.Column(db.Text, nullable=False)
    ArticleImageURL = db.Column(db.String(255), nullable=True)
