FROM node:16.20.0-slim

WORKDIR /app
COPY . /app

RUN npm install

EXPOSE 8082

CMD npm run serve
