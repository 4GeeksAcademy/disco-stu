"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


#@api.route('/hello', methods=['POST', 'GET'])
#def handle_hello():

#    response_body = {
#        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#    }

 #   return jsonify(response_body), 200

@api.route('/user/signup', methods=['POST'])
def user_signup():
    user = request.get_json()
    
    try:
        user = User(**user)
        user.is_active = True;
        db.session.add(user)
        db.session.commit()
        return jsonify({'message': 'User added correctly'}), 200
    except:
        print("user error")
        return jsonify({'message': 'Email and password fields are required'}), 400

@api.route('/user/list_all', methods=['GET'])
def list_all_users():
    userList = User.query.all()
    response_body = {
        "user": [User.serialize(user) for user in userList ]
    }

    return response_body, 200