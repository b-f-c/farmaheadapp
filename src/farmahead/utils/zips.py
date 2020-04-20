import os
from typing import List

import pandas as pd
from geopy import distance


class ZipCodes(object):
    def __init__(self):
        self.data_folder = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')
        self.data_path = os.path.join(self.data_folder, 'zips.csv')
        self.data = pd.read_csv(self.data_path).set_index('ZIP')

    def locateMarkets(self, markets: List = None, zipcode: int = None, _distance: object = None) -> List:
        if not _distance:
            _distance = 50
        (LAT, LNG) = self.data.loc[zipcode].values
        marketsWithinRadius = [market for market in markets if
                               distance.distance((LAT, LNG), (market.latitude, market.longitude)).miles < _distance]
        return marketsWithinRadius
