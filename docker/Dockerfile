FROM python:3.6-alpine

ADD web/core/requirements/base.txt /opt/base.txt
ADD web/core/requirements/staging.txt /opt/requirements.txt

RUN \
 apk add --no-cache postgresql-libs && \
 apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev

# Pillow dependencies
RUN \
apk --no-cache add jpeg-dev \
zlib-dev \
freetype-dev \
lcms2-dev \
openjpeg-dev \
tiff-dev \
tk-dev \
tcl-dev \
harfbuzz-dev \
gcc \
g++ \
python-dev \
libxslt-dev \
libxml2 \
libxml2-dev

RUN pip install --upgrade pip

RUN \
 python3 -m pip install -r /opt/requirements.txt --no-cache-dir

RUN \
 apk --purge del .build-deps



RUN pip3.6 install -r /opt/requirements.txt

#CMD ["python3", "/opt/web/manage.py runserver 0.0.0.0:80 --settings core.settings.staging"]