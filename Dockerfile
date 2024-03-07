FROM node:14-alpine

WORKDIR /app

RUN npm install

CMD ["node", "app.js"]

EXPOSE 8080
