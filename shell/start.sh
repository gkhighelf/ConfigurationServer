#!/bin/sh

sudo apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
sudo echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/10gen.list
sudo apt-get install -y python-software-properties
sudo apt-get -y update
sudo apt-get -y upgrade
sudo apt-get -y install vim git curl
sudo add-apt-repository -y ppa:chris-lea/node.js
apt-get -y update
apt-get install -y nodejs
sudo apt-get install -y mongodb-10gen
sudo npm install -g grunt-cli
sudo npm i -g yo
sudo npm i -g generator-angular-fullstack