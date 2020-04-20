import logging;

log = logging.getLogger(__name__)
from .base import db, ma, BaseModel
from marshmallow import EXCLUDE


class VendorModel(BaseModel):
    __tablename__ = 'vendor'

    vendorName = db.Column(db.String(), nullable=False)

    firstName = db.Column(db.String(), nullable=False)
    lastName = db.Column(db.String(), nullable=False)

    longitude = db.Column(db.Float(), nullable=True)
    latitude = db.Column(db.Float(), nullable=True)

    locationAddress = db.Column(db.String(), nullable=True)

    contactEmail = db.Column(db.String(), nullable=True)
    contactPhone = db.Column(db.String(), nullable=True)

    snapStatus = db.Column(db.Boolean(), nullable=False)


class VendorSchema(ma.ModelSchema):
    class Meta:
        model = VendorModel
        unknown = EXCLUDE
        strict = False
    # no further action is needed unless you want to override default behavior, which if
    # fine 99% of the time unless you need to implement adhoc validation, etc.


class MarketVendorModel(BaseModel):
    __tablename__ = 'marketVendor'

    marketId = db.Column(db.Integer, nullable=False)
    vendorId = db.Column(db.Integer, nullable=False)


class MarketVendorSchema(ma.ModelSchema):
    class Meta:
        model = MarketVendorModel
        unknown = EXCLUDE
        strict = False
