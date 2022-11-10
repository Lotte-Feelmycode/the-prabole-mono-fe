#!/bin/sh

ssh ec2-user@3.39.167.221 <<EOF	

    cd ~/the-parabole-fe
 
    git pull -f origin dev

		cd submodule
		git fetch 
		git merge origin main

		cp .env ../.env

    npm install

    npm install -g pm2

    pm2 restart ecosystem.config.js
    exit
EOF