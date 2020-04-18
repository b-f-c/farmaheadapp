#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
from farmahead.core.app import create_app
application = create_app(config_cls=os.getenv('FLASK_CONFIG_CLASS', 'production'))
