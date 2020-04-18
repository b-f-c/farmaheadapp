import logging; log=logging.getLogger(__name__)
from .base import db, ma, BaseModel
from marshmallow import EXCLUDE

"""
{
    "marketName": "Moravia Farmers' Market",
    "location": "Kinney Drug Store pkg lot 130 Main St.",
    "address": "130 Main St",
    "city": "Moravia",
    "state": "NY",
    "zip": 13118,
    "contact": "Barbara Flynn",
    "phone": "3154962235",
    "operationHours": "Thursday  10am-5pm",
    "operationSeason": "June 4-October 29",
    "snapStatus": "N",
    "latitude": 42.71209,
    "longitude": -76.42079,
    "marketLink": ""
}
"""

class MarketModel(BaseModel):
    __tablename__ = 'market'
    
    marketName =            db.Column(db.String(), nullable=False, unique=True)
    marketLink =            db.Column(db.String(), default='')
    
    longitude =             db.Column(db.Float(), nullable=True)
    latitude =              db.Column(db.Float(), nullable=True)
    
    locationDescription =   db.Column(db.String(), nullable=True)
    locationAddress =       db.Column(db.String(), nullable=True)
    locationCity =          db.Column(db.String(), nullable=True)
    locationState =         db.Column(db.String(), nullable=True)
    locationZip =           db.Column(db.Integer,  nullable=True)

    contactName =           db.Column(db.String(), nullable=True)
    contactPhone =          db.Column(db.String(), nullable=True)
    
    operationHours =        db.Column(db.String(), nullable=True)
    operationSeason =       db.Column(db.String(), nullable=True)
    
    snapStatus =            db.Column(db.Boolean(), nullable=False)


class MarketSchema(ma.ModelSchema):
    class Meta:
        model = MarketModel
        unknown = EXCLUDE
        strict = False
    # no further action is needed unless you want to override default behavior, which if
    # fine 99% of the time unless you need to implement adhoc validation, etc.