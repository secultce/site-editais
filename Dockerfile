FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

# RUN npm run install:clean

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

