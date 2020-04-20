import json, requests, os
import pandas as pd

from farmahead.models import db, VendorModel
from farmahead.resources import VendorResource
from .base import BaseMock

class VendorMock(BaseMock):

    def __init__(self):
        BaseMock.__init__(self)
        self.data_path = os.path.join(self.data_folder, 'allVendors.csv')

    def mock(self):
        data = pd.read_csv(self.data_path)
        for i, row in data.iterrows():
            vendor = VendorModel(**row)
            exists = VendorResource.get_one(row['id'])
            if not exists:
                db.session.add(vendor)
        db.session.commit()