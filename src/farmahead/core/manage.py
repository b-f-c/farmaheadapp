#!/usr/bin/env python
import os, sys
from flask_script import Manager, Command, Shell, Server, prompt_bool
from flask_migrate import MigrateCommand
from flask import current_app

from farmahead import __version__
from .app import create_app
from .commands import PytestCommand, CoverageCommand

from farmahead.models import db, ma
from farmahead.models import MarketModel, MarketSchema, MarketVendorModel, VendorModel

from farmahead.mock import ItemMock, MarketMock, VendorMock, MarketVendorMock


TableCommand = Manager(usage='Handle creation & removal of tables within database')

@TableCommand.command
def createall():
    # creates all tables within the datbase
    db.create_all()
    return 'OK'


@TableCommand.option('-y', dest='confirmed', action='store_true', default=False,
    help='Bypass interactive confirmation prompt and drop all table data')
def dropall(confirmed=False):
    # creates all tables within the datbase
    print(f'Dropping database: {str(db.engine.url)}', file=sys.stdout)
    if confirmed or prompt_bool('Are you sure you want to lose all your data', default=False):
        db.drop_all()
        return 'OK'

MockCommand = Manager(usage="Attempt to insert mock data for models")

@MockCommand.command
def all():
    item()
    market()
    vendor()
    marketVendor()

@MockCommand.command
def item():
    item = ItemMock().mock()

@MockCommand.command
def market():
    MarketMock().mock()

@MockCommand.command
def vendor():
    VendorMock().mock()

@MockCommand.command
def marketVendor():
    MarketVendorMock().mock()


manager = Manager(create_app)
manager.add_option('-c', '--config', dest='config_cls', required=False)

def shell_context():
    context = dict(
        app=current_app,
        db=db,
        ma=ma,
        MarketModel=MarketModel,
        MarketSchema=MarketSchema,
        MarketVendorModel=MarketVendorModel,
        VendorModel=VendorModel
    )
    return context


@manager.command
def version():
    print(__version__, file=sys.stdout)


@manager.command
def settings():
    from pprint import pprint
    pprint(current_app.config)


manager.add_command('runserver', Server())
manager.add_command('shell', Shell(make_context=shell_context))
manager.add_command('db', MigrateCommand)
manager.add_command('table', TableCommand)
manager.add_command('test', PytestCommand)
manager.add_command('coverage', CoverageCommand)
manager.add_command('mock', MockCommand)

if __name__ == '__main__':
    manager.run()
