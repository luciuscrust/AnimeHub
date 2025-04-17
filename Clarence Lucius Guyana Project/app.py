from flask import Flask, request, jsonify
from flask_cors import CORS
import uuid

app = Flask(__name__)
CORS(app)

users = []

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/users', methods=['POST'])
def add_user():
    new_user = request.get_json()
    user_data = {
        'id': str(uuid.uuid4()), 
        'name': new_user['name'],
        'location': new_user['location'],
        'package': new_user['package']
    }
    users.append(user_data)
    return jsonify({'message': 'User added successfully', 'id': user_data['id']}), 201

@app.route('/users', methods=['DELETE'])
def delete_all_users():
    users.clear()
    return jsonify({'message': 'All users deleted successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)
