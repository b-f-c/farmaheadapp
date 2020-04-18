from farmahead import __version__

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
    SQLALCHEMY_DATABASE_URI = 'postgresql://localhost/farmahead'