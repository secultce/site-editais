FROM node:16-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
