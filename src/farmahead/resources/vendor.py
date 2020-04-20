import logging;

log = logging.getLogger(__name__)
from flask import current_app
from flask import request, jsonify
from flask_restful import Resource

from farmahead.models import db, VendorModel, VendorSchema, MarketVendorModel
from farmahead.utils import reply_success, reply_error, reply_missing

schema = VendorSchema()  # dict
schemas = VendorSchema(many=True)  # list


class VendorResource(Resource):
    """
    TABLE:  vendors
    MODEL:  models.vendor.VendorModel
    SCHEMA: models.vendor.VendorSchema

    /api/vendor
    /api/vendor?id=1
    /api/vendor?market=1
    """

    @staticmethod
    def get_one(_id):
        log.debug(f'Querying VendorModel where id={_id}')
        res = db.session.query(VendorModel).filter_by(id=_id).first()
        return res

    @staticmethod
    def get_all():
        log.debug(f'Querying VendorModel for all rows')
        res = db.session.query(VendorModel).all()
        return res

    @staticmethod
    def get_all_in(ids):
        print(f'Querying VendorModel for ids: ' + str(ids))
        res = db.session.query(VendorModel).filter(VendorModel.id.in_(ids))
        return res

    def get(self):
        # Retrieve existing vendor(s)
        _id = request.args.get('id')
        _market = request.args.get('market')

        # If no params
        if not _id and not _market:
            res = self.get_all()
            return reply_success(schemas.dump(res))

        # Throw error if more than one param
        if _id and _market:
            return reply_error({"message": "Cannot use more than one parameter"})

        # Filter on id
        if _id:
            res = self.get_one(_id)
            if not res:
                return reply_missing(id=_id)

        # Filter on marketId
        if _market:
            marketVendors = db.session().query(MarketVendorModel).filter_by(marketId=_market)
            vendorIds = [mv.vendorId for mv in marketVendors]
            res = self.get_all_in(vendorIds)
            if not res:
                return reply_missing(id=_market)
            return reply_success(schemas.dump(res))
        return reply_success(schema.dump(res))

    def post(self):
        # Create new vendor(s)
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
        # Update existing vendor(s)
        log.warning('This route is not yet implemented')
        pass

    def delete(self):
        # Remove existing vendor(s)
        log.warning('This route is not yet implemented')
        pass
