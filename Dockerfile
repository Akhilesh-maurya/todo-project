From node:18-alpine

WORKDIR /akhiles-app

COPY . /akhiles-app

RUN npm install

CMD ["npm", "start"]
EXPOSE 3000