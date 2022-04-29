FROM node:18-alpine

WORKDIR /app

RUN apk add --update --no-cache python3 php8-cli php8-mbstring && ln -sf python3 /usr/bin/python && ln -sf php8 /usr/bin/php

CMD echo "Jackathon Dev Environment Operational with Python 3.9.7, Node 18 and PHP 8.0.18. See README for more!" && sleep infinity;