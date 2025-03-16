#!/bin/bash

# This script redirects to the latest version of install.sh from GitHub
# It fetches the script from GitHub and executes it

# Fetch and execute the script from GitHub
curl -s https://raw.githubusercontent.com/Firdavs9512/aurora-agent/master/install.sh | bash -s -- "$@" 