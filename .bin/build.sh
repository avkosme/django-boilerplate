#!/bin/bash

# Project dir
DIR="$( cd "$(dirname "$0")" ; pwd -P | sed -e 's/.bin//g')"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'

# Reset color
NC='\033[0m'

# Build node js apps
function build_nodejs() {
	cd ${DIR}$1 && \
	npm run $2
}

# Collect static files
function collectstatic() {
	cd ${DIR}/web && \
	python3.6 manage.py collectstatic --noinput -c && \
	find ${DIR}/web/static/css/* -type f -exec sed -i -e 's/url(\/static\//url(\//g' {} \; && \
	find ${DIR}/web/static/css/* -type f -exec sed -i -e 's/url(\"\/static\//url(\"\//g' {} \;
}

# Start build
if [ $1 = "staging" ]; then

# Build for staging
  build_nodejs "web/page/nodejs" "build"
elif [ $1 = "styles" ]; then

# Build only styles
	build_nodejs "web/page/nodejs" "build-styles"
elif [ $1 = "production" ]; then

# Build production (all)
  build_nodejs "web/page/nodejs" "build" && \
  collectstatic
fi  