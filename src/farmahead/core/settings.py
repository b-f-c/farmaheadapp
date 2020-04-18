from farmahead import __version__
import os

class Settings:
    APP_VERSION = __version__
    APPLICATION_ROOT = '/api'
    HOST = 'localhost'
    PORT = 5000
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class Development(Settings):
    ENV='development'
    DEBUG = True
    TESTING = False
    SQLALCHEMY_DATABASE_URI = 'postgresql://localhost/farmahead_dev'


class Testing(Settings):
    ENV = 'testing'
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'postgresql://localhost/farmahead_test'


class Production(Settings):
    ENV = 'production'
    DEBUG = False
    TESTING = False
    DB_USERNAME = os.getenv('RDS_USERNAME')
    DB_PASSWORD = os.getenv('RDS_PASSWORD')
    DB_HOST = os.getenv('RDS_HOST')
    DB_PORT = os.getenv('RDS_PORT')
    DB_NAME = 'farmahead'
    SQLALCHEMY_DATABASE_URI = f'postgresql+psycopg2://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}'