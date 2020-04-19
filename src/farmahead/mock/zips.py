from .base import BaseMock
import pandas as pd
import geopy
from typing import List

class ZipCodes(BaseMock):
    def __init__(self):
        BaseMock.__init__(self)
        self.data_path = os.path.join(self.data_folder, 'zips.csv')
        self.data = pd.read_csv(data_path)

    def locateMarkets(markets:List = None, zipcode:int = None) -> List:
        return markets
