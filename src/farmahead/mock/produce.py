import os
import time
import json

from farmahead.models import db, ItemModel
from farmahead.resources import ItemResource
from .base import BaseMock


class ItemMock(BaseMock):

    def __init__(self):
        BaseMock.__init__(self)
        self.data_path = os.path.join(self.data_folder, 'items.json')
        self.data = self.load_data()

    def load_data(self):
        with open(self.data_path, 'r') as file:
            data = json.load(file)
            print(f'Loaded {len(data)} entries from file')
        return data

    def mock(self):
        for e, each in enumerate(self.data):
            item = ItemModel(**each)
            exists = ItemResource.get_one(each['id'])
            if not exists:
                db.session.add(item)
        db.session.commit()

    def mock_bulk(self):
        t0 = time.time()
        data_size = len(self.data)
        chunk_size = 50
        for chunk in range(0, data_size, chunk_size + 1):
            db.session.bulk_save_objects(
                [
                    ItemModel(**d) for d in self.data[chunk:min(chunk + chunk_size, data_size)]
                ]
            )
        db.session.commit()
        print("Total time for " + str(data_size) +
              " item records " + str(time.time() - t0) + " secs")