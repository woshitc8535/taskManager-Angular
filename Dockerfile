FROM node:10-alpine as builder
WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run build:prod

FROM nginx:1.20.1
COPY --from=builder /usr/src/app/dist/taskoracle /usr/share/nginx/html
COPY ./nginx-angular.conf /etc/nginx/conf.d/default.conf
