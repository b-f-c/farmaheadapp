import logging

from farmahead.utils.exceptions import ParamTypeException

from flask import request
from flask_restful import Resource, reqparse

from farmahead.models import db, MarketModel, MarketSchema
from farmahead.utils import reply_success, reply_error, reply_missing, ValidateParameters
from farmahead.utils.zips import ZipCodes

log = logging.getLogger(__name__)


schema = MarketSchema()  # dict
schemas = MarketSchema(many=True)  # list


class MarketResource(Resource):
    """
    TABLE:  market
    MODEL:  models.market.MarketModel
    SCHEMA: models.market.MarketSchema

    /api/market
    /api/market?id=1
    """

    @staticmethod
    def get_one(_id):
        log.debug(f'Querying MarketModel where id={_id}')
        res = db.session.query(MarketModel).filter_by(id=_id).first()
        return res

    @staticmethod
    def get_all():
        log.debug(f'Querying MarketModel for all rows')
        res = db.session.query(MarketModel).all()
        return res

    def get(self):
        # Retrieve existing item(s)
        _id = request.args.get('id')
        if not _id:
            res = self.get_all()
            return reply_success(schemas.dump(res))
        res = self.get_one(_id)
        if not res:
            return reply_missing(id=_id)
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


class MarketByZipResource(Resource):
    """
    TABLE:  market
    MODEL:  models.market.MarketModel
    SCHEMA: models.market.MarketSchema

    /api/market/zipcode/{zipcode}
    """

    def get(self, zipcode=None):
        parser = reqparse.RequestParser()
        parser.add_argument('zipcode', type=int, ignore=False)
        args = parser.parse_args()

        _distance = args.get('distance')

        # Pass all markets into distance filter
        markets = db.session.query(MarketModel).all()
        locatedMarkets = ZipCodes().locateThings(markets, zipcode, _distance)
        return reply_success(schemas.dump(locatedMarkets))
