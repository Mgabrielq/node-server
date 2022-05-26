FROM node:alpine

WORKDIR /app

COPY . /app

ExPOSE 3000

RUN npm --version

RUN npm install

CMD npm start

