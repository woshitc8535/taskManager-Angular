FROM node:10-alpine as builder
FROM johnpapa/angular-cli as angular-app
WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN ng build --prod
RUN  find / dist

FROM nginx:1.20.1
COPY --from=builder dist/taskoracle usr/share/nginx/html
COPY ./nginx-angular.conf /etc/nginx/conf.d/default.conf
