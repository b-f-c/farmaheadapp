from .base import api, bp
from .index import IndexResource
from .version import VersionResource
from .market import MarketResource, MarketByZipResource, MarketByProduceResource
from .produce import ProduceResource, ProduceByVendorResource
from .vendor import VendorResource, VendorByProduceResource, VendorByProduceListResource

api.add_resource(IndexResource,     '/')
""" 
    Endpoints to get base objects
"""
api.add_resource(VersionResource,   '/version')
api.add_resource(MarketResource,    '/market')
api.add_resource(ProduceResource, '/produce')
api.add_resource(VendorResource, '/vendor')
""" 
    Endpoints with joins
"""
# Get all markets within a zip code
# @param: distance (int): optional - radius search with market LAT/LONG
api.add_resource(MarketByZipResource, '/market/zipcode/<int:zipcode>')

# Get produce associated with a vendor
api.add_resource(ProduceByVendorResource, '/vendor/<int:id>/produce')

# Get vendors associated with a produce
# @param: distance (int): optional - radius search with zipcode LAT/LONG
# @param: zipcode (int): optional - zip code to search by (will use centroid of zipcode)
# example - http://127.0.0.1:8000/api/produce/5/vendor?zipcode=14217&distance=15
api.add_resource(VendorByProduceResource, '/produce/<int:id>/vendor')

# Get markets associated with a produce
# @param: distance (int): optional - radius search with zipcode LAT/LONG
# @param: zipcode (int): optional - zip code to search by (will use centroid of zipcode)
# example - http://127.0.0.1:8000/api/produce/5/vendor?zipcode=14217&distance=15
api.add_resource(MarketByProduceResource, '/produce/<int:id>/market')

# Get vendors associated with a list of produce
# @param: id (id): required, multiple allowed - produce to search by
# @param: distance (int): optional - radius search with zipcode LAT/LONG
# @param: zipcode (int): optional - zip code to search by (will use centroid of zipcode)

api.add_resource(VendorByProduceListResource, '/produce/vendor/multiOr')