import os
import logging
from typing import List

import pandas as pd
from geopy import distance
import copy

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
            unpackaged_things = [copy.copy(thing).__dict__ for thing in things]
            thingsWithinRadius = []
            for thing in unpackaged_things:
                thing.pop('_sa_instance_state', None)
                thing['distance'] = round(distance.distance((LAT, LNG), (thing['latitude'], thing['longitude'])).miles,3)
                if thing['distance'] < _distance:
                    thingsWithinRadius.append(thing)
            return thingsWithinRadius
        except KeyError:
            log.warning("Could not find zipcode: " + str(zipcode))
            return []
