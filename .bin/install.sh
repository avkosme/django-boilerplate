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

# Install nodejs apps
node_js "web/page/nodejs"


if [ $1 = "staging" ]; then
  python_requirements "web/core/requirements/staging.txt"
elif [ $1 = "production" ]; then
  python_requirements "web/core/requirements/production.txt"
fi  

