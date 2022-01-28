FROM node:10-alpine as builder
FROM johnpapa/angular-cli as angular-app
WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN ng build --prod

FROM nginx:1.20.1
RUN pwd
RUN cd /usr
RUN cd usr
RUN ls
RUN cd src
RUN cd app
RUN ls
COPY --from=builder /usr/usr/src/app/dist usr/share/nginx/html
COPY ./nginx-angular.conf /etc/nginx/conf.d/default.conf
