#!/bin/bash

# Project dir
DIR="$( cd "$(dirname "$0")" ; pwd -P | sed -e 's/.bin//g')"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'

# Reset color
NC='\033[0m'

# Install nodejs apps
function node_js() {
	echo -e "${RED}INSTALLING NODEJS PACKAGES IN DIRECTORY: " ${GREEN} ${DIR}$1 ${NC}
	cd ${DIR}$1 && \
	npm install
}

# Install python apps requirements
function python_requirements() {
	echo -e "${RED}INSTALLING PYTHON PACKAGES FROM FILE: " ${GREEN} ${DIR}$1 ${NC}
	pip3.6 install -r ${DIR}$1
}

# Start install
if [ $1 = "staging" ]; then

# Install for staging
	node_js "web/page/nodejs" && \
	python_requirements "web/core/requirements/staging.txt"
elif [ $1 = "nodejs" ]; then

# Install only nodejs
	node_js "web/page/nodejs"
elif [ $1 = "production" ]; then

# Install production (only backend)
	node_js "web/page/nodejs" && \
	python_requirements "web/core/requirements/production.txt"
fi  

