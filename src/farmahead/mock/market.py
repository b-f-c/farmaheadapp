import json, requests, os
import pandas as pd

from farmahead.models import db, MarketModel
from farmahead.resources import MarketResource
from .base import BaseMock

class MarketMock(BaseMock):

    def __init__(self):
        BaseMock.__init__(self)
        self.data_path = os.path.join(self.data_folder, 'markets.json')
        self.data = self.load_data()

    def load_data(self):
        with open(self.data_path, 'r') as file:
            data = json.load(file)
            print(f'Loaded {len(data)} entries from file')
        return data

    def mock(self):
        for e, each in enumerate(self.data):
            market = MarketModel(**each)
            exists = MarketResource.get_one(each['id'])
            if not exists:
                db.session.add(market)
        db.session.commit()