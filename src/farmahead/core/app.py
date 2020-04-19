import logging; log=logging.getLogger(__name__)
import os
from flask import Flask

from farmahead.models import migrate, db

def create_app(config_cls=None, settings_override=None):
    app = Flask(__name__)
    if config_cls:
        pass
    else:
        config_cls = os.environ['FLASK_CONFIG_CLASS']
    app.config.from_object(f'farmahead.core.settings.{config_cls}')

    if settings_override:
        app.config.update(settings_override)

    init_app(app)
    setup_logging(app)
    on_startup(app)

    return app


def init_app(app):
    db.init_app(app)
    migrate.init_app(app, db)
    # api.init_app(app) # dont think we need this but afraid to delete :(
    from farmahead.resources import bp
    app.register_blueprint(bp, url_prefix=app.config['APPLICATION_ROOT'])


def on_startup(app, *args, **kwargs):
    """
    Just a handy hook in case we need to do something fancy when we startup,
    like checking to make sure that the frontend is build in a prod setting.
    Easier to have it and never need it than to add it later.
    """
    pass


def setup_logging(app):
    if not app.debug:
        from logging import FileHandler
        handler = FileHandler('flask.log')
        handler.setLevel(logging.DEBUG)
        app.logger.addHandler(handler)