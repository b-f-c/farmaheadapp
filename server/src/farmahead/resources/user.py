import logging

from flask import request
from flask_restful import Resource, reqparse

from farmahead.models import db, UserModel, UserSchema
from farmahead.utils import reply_success, reply_error, reply_missing

log = logging.getLogger(__name__)

schema = UserSchema()  # dict
schemas = UserSchema(many=True)  # list


class UserResource(Resource):
    """
    TABLE:  user
    MODEL:  models.market.UserModel
    SCHEMA: models.market.UserSchema

    /api/user
    /api/user?userName=foobar
    """

    @staticmethod
    def get_one(_userName):
        log.debug(f'Querying UserModel where userName={_userName}')
        res = db.session.query(UserModel).filter_by(userName=_userName).first()
        return res

    @staticmethod
    def get_all():
        log.debug(f'Querying UserModel for all rows')
        res = db.session.query(UserModel).all()
        return res

    def get(self):
        # Retrieve existing item(s)
        _userName = request.args.get('userName')
        if not _userName:
            res = self.get_all()
            return reply_success(schemas.dump(res))
        res = self.get_one(_userName)
        if not res:
            return reply_missing(nonexistant=_userName)
        return reply_success(schema.dump(res))

    def post(self):
        # Create new item(s)
        payload = request.get_json()
        try:
            obj = schema.load(payload)
            db.session.add(obj)
            db.session.commit()
            return reply_success(schema.dump(obj))
        except Exception as err:
            log.error(err)
            return reply_error(str(err))

    def put(self):
        # Update existing item(s)
        log.warning('This route is not yet implemented')
        pass

    def delete(self):
        # Remove existing item(s)
        log.warning('This route is not yet implemented')
        pass
