import logging

log = logging.getLogger(__name__)
from .base import db, ma, BaseModel
from marshmallow import EXCLUDE

"""
{
    "produce": "Asparagus"
    "type": "Vegetable"
    "id": 1
"""


class ProduceModel(BaseModel):
    __tablename__ = 'produce'

    produceName = db.Column(db.String(), nullable=False, unique=True)
    produceType = db.Column(db.String())


class ProduceSchema(ma.ModelSchema):
    class Meta:
        model = ProduceModel
        unknown = EXCLUDE
        strict = False
    # no further action is needed unless you want to override default behavior, which if
    # fine 99% of the time unless you need to implement adhoc validation, etc.
