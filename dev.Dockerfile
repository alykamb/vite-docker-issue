# development
# NodeJS 13.7.0
FROM node:14-alpine as development

# Create app directory
WORKDIR /srv/www

# Defini o layer (se alterado o package.json, só faz o build daqui pra baixo)
COPY ./package*.json ./
COPY ./yarn.lock ./
COPY ./vite.config.ts ./

# Bundle app source
COPY ./ .

# install packages and compiles Nest
RUN yarn
