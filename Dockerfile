FROM node:10-alpine as builder
FROM johnpapa/angular-cli as angular-app
WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN ng build --prod

FROM nginx:1.20.1
RUN find / taskManager-Angular
COPY --from=builder /usr/usr/src/app/dist usr/share/nginx/html
COPY ./nginx-angular.conf /etc/nginx/conf.d/default.conf
