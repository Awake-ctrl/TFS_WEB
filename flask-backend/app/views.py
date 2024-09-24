from flask import Blueprint, jsonify, request
from app.models import db, Articles

api = Blueprint('api', __name__)

@api.route('/articles', methods=['GET'])
def get_articles():
    articles = Articles.query.all()
    return jsonify([{
        'id': article.ArticleID,
        'heading': article.ArticleHeading,
        'author': article.ArticleAuthor,
        'date': article.ArticlePublicationDate,
        'text': article.ArticleText,
        'image': article.ArticleImageURL
    } for article in articles])

@api.route('/articles', methods=['POST'])
def create_article():
    data = request.get_json()
    new_article = Articles(
        ArticleHeading=data['heading'],
        ArticleAuthor=data['author'],
        ArticleText=data['text'],
        ArticleImageURL=data['image']
    )
    db.session.add(new_article)
    db.session.commit()
    return jsonify({'message': 'Article created successfully'}), 201
