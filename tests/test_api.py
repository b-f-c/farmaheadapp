import pytest
from tests import factories
from flask import current_app

def make_url(*args):
    # just a convenience function for abstracting the /api prefix
    root = current_app.config['APPLICATION_ROOT']
    return f'{root}{"/".join(args)}'


###############################################################################
def test_api_index_returns_200(client, session):
    url = make_url('/')
    response = client.get(url)
    assert response.status_code == 200


def test_api_version_returns_200(client, session):
    url = make_url('/version')
    response = client.get(url)
    assert response.status_code == 200


def test_api_market_returns_200(client, session):
    url = make_url('/market')
    response = client.get(url)
    assert response.status_code == 200