import os, json, requests
from pprint import pprint

import farmahead
from farmahead.models import db, MarketModel

data = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../data')
url = 'http://localhost:8000/api/market'

with open(os.path.join(data, 'markets.json'), 'r') as file:
    obj = json.load(file)
    print(f'Loaded {len(obj)} entries from file')

for e, each in enumerate(obj):
    response = requests.post(url, json=each)
    print(f'{e}: {response.status_code}')
    if response.status_code != 200:
        pprint(response.json())
