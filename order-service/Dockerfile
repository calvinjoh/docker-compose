# base image
FROM node:12-alpine

# setting the work direcotry
WORKDIR /usr/src/app

ENV REDIS_HOST=$REDIS_HOST
ENV REDIS_PORT=$REDIS_PORT
ENV SERVICE_NAME=$SERVICE_NAME

COPY ./package.json .

RUN npm install && npm cache clean --force

COPY . .

# CMD ["node","index.js"]