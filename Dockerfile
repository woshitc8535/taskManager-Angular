FROM node:10-alpine as builder
FROM johnpapa/angular-cli as angular-app
WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN ng build --prod

FROM nginx:1.20.1
COPY --from=angular-app /usr/src/app/dist/taskoracle /usr/share/nginx/html
COPY ./nginx-angular.conf /etc/nginx/conf.d/default.conf
