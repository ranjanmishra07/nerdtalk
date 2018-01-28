# -*- coding: utf-8 -*-

import stream
import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth
import json


def respond(err, res=None, code=None):
    return {
        'statusCode': code if err else '200',
        'body': str(err) if err else json.dumps(res),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }


def handler(event, context):
    try:
        cred = credentials.Certificate('./nerdtalk-e3941-firebase-adminsdk-alv5j-b4036dab58.json')
        app = firebase_admin.initialize_app(cred)
    except:
        app = firebase_admin.get_app()

    try:
        auth.verify_id_token(event["headers"]["Authorization"])
        return respond(None, "Auth successful")
    except Exception as ve:
        return respond(ve, None, 403)


# client = stream.connect('cuxgcj4dmpjt', 'c9cdgabpwbj6zwm5wbgfshnxmnju68m3kj4re9gakmvkg483wt7dggdhb4ekfx6q', location='us-east')

if __name__ == '__main__':
    handler({"headers":{"Authorization":"gvhjvjvh"}}, None)