import logging; log=logging.getLogger(__name__)
from .base import db, ma, BaseModel
from marshmallow import EXCLUDE

"""
{
    marketName: "Lewis Co. General Hospital Farmers' Market"
    locationDescription: "7785 N. State St. Lowville, Children's Clinic parking lot"
    locationAddress: "7785 North State St"
    locationCity: "Lowville"
    locationState: "NY"
    locationZip: 13367
    contactName: "Tina Schell"
    contactPhone: "3153765087"
    operationHours: "Thursday 11am-4pm"
    operationSeason: "June 11-October 1"
    snapStatus: "N"
    latitude: 43.79599
    longitude: -75.49831999999999
    marketLink: "http://www.lcgh.net"
    id: 5
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
        strict = False
    # no further action is needed unless you want to override default behavior, which if
    # fine 99% of the time unless you need to implement adhoc validation, etc.