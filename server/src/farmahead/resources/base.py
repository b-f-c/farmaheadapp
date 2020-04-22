import logging; log=logging.getLogger(__name__)
from flask_restful import Api
from flask import Blueprint

bp = Blueprint('api', __name__)
api = Api(bp)
