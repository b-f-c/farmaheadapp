import logging; log=logging.getLogger(__name__)
from .base import db, ma, BaseModel
from marshmallow import EXCLUDE

"""
{
    "item": "Asparagus"
    "id": 1
"""
class ItemModel(BaseModel):
    __tablename__ = 'items'
    
    item =                db.Column(db.String(), nullable=False, unique=True)
    

class ItemSchema(ma.ModelSchema):
    class Meta:
        model = ItemModel
        unknown = EXCLUDE
        strict = False
    # no further action is needed unless you want to override default behavior, which if
    # fine 99% of the time unless you need to implement adhoc validation, etc.