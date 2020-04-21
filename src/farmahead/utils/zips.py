import os
import logging
from typing import List

import pandas as pd
from geopy import distance

log = logging.getLogger(__name__)


class ZipCodes(object):
    def __init__(self):
        self.data_folder = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../mock/data')
        self.data_path = os.path.join(self.data_folder, 'zips.csv')
        self.data = pd.read_csv(self.data_path).set_index('ZIP')

    def locateThings(self, things: List = None, zipcode: int = None, _distance: object = None) -> List:
        if not _distance:
            _distance = 50
        try:
            (LAT, LNG) = self.data.loc[zipcode].values
            thingsWithinRadius = [thing for thing in things if
                               distance.distance((LAT, LNG), (thing.latitude, thing.longitude)).miles < _distance]
            return thingsWithinRadius
        except KeyError:
            log.warning("Could not find zipcode: " + str(zipcode))
            return []
