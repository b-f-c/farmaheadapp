from flask import make_response, jsonify

def reply_success(*args, **kwargs):
    return make_response(jsonify(*args, **kwargs), 200)

def reply_error(*args, **kwargs):
    return make_response(jsonify(*args, **kwargs), 400)

def reply_missing(*args, **kwargs):
    return make_response(jsonify(*args, **kwargs), 404)