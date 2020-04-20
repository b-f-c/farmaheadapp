import json, requests, os
import pandas as pd
import numpy as np

from farmahead.models import db, MarketVendorModel
from .base import BaseMock

class MarketVendorMock(BaseMock):

    def __init__(self):
        BaseMock.__init__(self)
        self.data_path = os.path.join(self.data_folder, 'marketVendors.csv')

    def mock(self):
        data = pd.read_csv(self.data_path).astype(object)
        for i, row in data.iterrows():
            marketVendor = MarketVendorModel(**row)
            exists = db.session.query(MarketVendorModel).filter_by(id=row['id']).first()
            if not exists:
                db.session.add(marketVendor)
        db.session.commit()