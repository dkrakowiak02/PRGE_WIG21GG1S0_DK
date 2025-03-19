FROM node:19-bullseye

WORKDIR /app

COPY config/node/frontend_1/package.json .
RUN npm install

COPY config/node/frontend_1 .

CMD ["npm", "start"]