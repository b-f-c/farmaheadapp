from .base import api, bp
from .index import IndexResource
from .version import VersionResource
from .market import MarketResource


api.add_resource(IndexResource,     '/')
api.add_resource(VersionResource,   '/version')
api.add_resource(MarketResource,    '/market')
