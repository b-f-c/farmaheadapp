import os
import time
import json

from farmahead.models import db, MarketVendorModel
from .base import BaseMock


class MarketVendorMock(BaseMock):

    def __init__(self):
        BaseMock.__init__(self)
        self.data_path = os.path.join(self.data_folder, 'marketVendors.json')
        self.data = self.load_data()

    def load_data(self):
        with open(self.data_path, 'r') as file:
            data = json.load(file)
            print(f'Loaded {len(data)} entries from file')
        return data

    def mock(self):
        for e, each in enumerate(self.data):
            marketVendor = MarketVendorModel(**each)
            exists = db.session.query(MarketVendorModel).filter_by(id=each['id']).first()
            if not exists:
                db.session.add(marketVendor)
        db.session.commit()

    def mock_bulk(self, chunk_size:int = 1000):
        t0 = time.time()
        data_size = len(self.data)
        for chunk in range(0, data_size + 1, chunk_size):
            try:
                db.session.bulk_save_objects(
                    [
                        MarketVendorModel(**d) for d in self.data[chunk:min(chunk + chunk_size, data_size)]
                    ]
                )
            except Exception as e:
                pass
        db.session.commit()
        print("Total time for " + str(data_size) +
            " marketVendor records " + str(time.time() - t0) + " secs")