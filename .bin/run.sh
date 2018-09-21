#!/bin/bash

DIR="$( cd "$(dirname "$0")" ; pwd -P | sed -e 's/.bin//g')"

# Start app - staging
function run_staging() {
    cd ${DIR}/web && \
    python3.6 manage.py makemigrations users && \
    python3.6 manage.py migrate && \
    python3.6 manage.py runserver 0.0.0.0:80 --settings core.settings.staging
}

# Start app - production
function run_production() {
    cd ${DIR}/web && \
    gunicorn -b 0.0.0.0:8080 core.wsgi --log-level debug --access-logfile /var/log/gunicorn.log
}

if [ $1 = "staging" ]; then
  run_staging
elif [ $1 = "production" ]; then
  run_production
fi  
