import logging;
from flask_cors import CORS

log = logging.getLogger(__name__)
import os
from flask import Flask

from farmahead.models import migrate, db


def create_app(config_cls=None, settings_override=None):
    app = Flask(__name__)
    if config_cls:
        loc = 'ARG'
    else:
        loc = 'ENV'
        config_cls = os.environ['FLASK_CONFIG_CLASS']
    src = f'farmahead.core.settings.{config_cls.title()}'
    print(f'{loc}: {src}')
    app.config.from_object(src)
    app.url_map.strict_slashes = False  # dont require trailing slashes

    if settings_override:
        app.config.update(settings_override)

    init_app(app)
    setup_logging(app)
    on_startup(app)

    return app


def init_app(app):
    db.init_app(app)
    migrate.init_app(app, db)
    CORS(app)
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
        file = app.config.get('LOG_FILE', 'flask.log')
        level = app.config.get('LOG_LEVEL', 'INFO')
        handler = FileHandler(file)
        handler.setLevel(getattr(logging, level, logging.INFO))
        app.logger.addHandler(handler)
