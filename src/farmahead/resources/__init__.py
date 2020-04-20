from .base import api, bp
from .index import IndexResource
from .version import VersionResource
from .market import MarketResource, MarketByZip
from .item import ItemResource
from .vendor import VendorResource


api.add_resource(IndexResource,     '/')
api.add_resource(VersionResource,   '/version')
api.add_resource(MarketResource,    '/market')
api.add_resource(ItemResource, '/item')
api.add_resource(VendorResource, '/vendor')
api.add_resource(MarketByZip, '/market/zipcode/<int:zipcode>')
