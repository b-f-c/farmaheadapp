from farmahead import __version__
import os


class Settings:
    APP_VERSION = __version__
    APPLICATION_ROOT = '/api'
    HOST = 'localhost'
    PORT = 8000
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    LOG_LEVEL = 'INFO'
    LOG_FILE = 'flask.log'


class Development(Settings):
    ENV = 'Development'
    DEBUG = True
    TESTING = False
    SQLALCHEMY_DATABASE_URI = 'postgresql://localhost/farmahead_dev'


class Testing(Settings):
    ENV = 'Testing'
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'postgresql://localhost/farmahead_test'


class Production(Settings):
    ENV = 'Production'
    DEBUG = False
    TESTING = False
    LOG_LEVEL = os.getenv('LOG_LEVEL')
    LOG_FILE = os.getenv('LOG_FILE')
    DB_USERNAME = os.getenv('RDS_USERNAME')
    DB_PASSWORD = os.getenv('RDS_PASSWORD')
    DB_HOST = os.getenv('RDS_HOST')
    DB_NAME = os.getenv('RDS_NAME', 'farmahead')
    SQLALCHEMY_DATABASE_URI = f'postgresql://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}'
