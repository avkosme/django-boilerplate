from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
if DEBUG:
    # `debug` is only True in templates if the vistor IP is in INTERNAL_IPS.
    INTERNAL_IPS = type(str('c'), (), {'__contains__': lambda *a: True})()

INSTALLED_APPS += ['debug_toolbar']
MIDDLEWARE += ['debug_toolbar.middleware.DebugToolbarMiddleware']

