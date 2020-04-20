import json, requests, os
import pandas as pd

from farmahead.models import db, ItemModel
from farmahead.resources import ItemResource
from .base import BaseMock

class ItemMock(BaseMock):

    def __init__(self):
        BaseMock.__init__(self)
        self.data_path = os.path.join(self.data_folder, 'items.csv')

    def mock(self):
        data = pd.read_csv(self.data_path)
        for i, row in data.iterrows():
            item = ItemModel(**row)
            exists = ItemResource.get_one(row['id'])
            if not exists:
                db.session.add(item)
        db.session.commit()