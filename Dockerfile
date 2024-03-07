FROM node:14-alpine

WORKDIR /app

RUN npm install

EXPOSE 8080

CMD ["node", "app.js"]

