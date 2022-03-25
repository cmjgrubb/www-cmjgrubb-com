#!/bin/bash

# Author: CMJ Grubb
# Date: 02/28/2022
# Description: This script restarts Docker in a development environment. It uses the current directory name as the image name. You will set the username to your own username.

# Set username
user='cmjgrubb'

# Get the current directory name for the image name
presentworking=`pwd`
currentdir=`basename $presentworking`

# Stop all Docker containers, build the image, and run it
docker stop $(docker container ls -q)
docker build -t $user/$currentdir .
docker run -d -p 3000:3000 $user/$currentdir