import logging; log=logging.getLogger(__name__)
from .base import db, ma, BaseModel
from marshmallow import EXCLUDE

"""
[{
  "id": 1,
  "firstName": "Jane",
  "lastName": "Shopaholic",
  "userName": "janeshops",
  "role": "shopper",
  "email": "iloveveggies0@booking.com",
  "gender": "Female",
  "s3_url": "https://robohash.org/pariaturutsunt.bmp?size=50x50&set=set1",
  "password": "janeshops",
  "latitude": 43.100429999999996,
  "longitude": -75.22483000000001,
  "zip": "95579"
}
"""

class UserModel(BaseModel):
    __tablename__ = 'user'
    
    firstName =            db.Column(db.String(), nullable=False, unique=True)
    lastName =            db.Column(db.String(), nullable=False)
    gender =   db.Column(db.String(), nullable=True)
    snapEligibility = db.Column(db.Boolean(), nullable=False)

    role =             db.Column(db.String(), nullable=False)
    email =              db.Column(db.String(), nullable=False)
    s3_url =       db.Column(db.String(), nullable=True)

    userName =          db.Column(db.String(), nullable=True)
    password =          db.Column(db.String(), nullable=True)

    latitude =         db.Column(db.Float(), nullable=True)
    longitude =           db.Column(db.Float(),  nullable=True)
    zip =           db.Column(db.Integer(), nullable=True)


class UserSchema(ma.ModelSchema):
    class Meta:
        model = UserModel
        unknown = EXCLUDE
        strict = False
    # no further action is needed unless you want to override default behavior, which if
    # fine 99% of the time unless you need to implement adhoc validation, etc.