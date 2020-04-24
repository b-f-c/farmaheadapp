import logging

log = logging.getLogger(__name__)
from .base import db, BaseModel, BaseSchema
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
    s3_url = db.Column(db.String(), nullable=True)


class ProduceSchema(BaseSchema):
    class Meta:
        model = ProduceModel
        strict = False
    # no further action is needed unless you want to override default behavior, which if
    # fine 99% of the time unless you need to implement adhoc validation, etc.
