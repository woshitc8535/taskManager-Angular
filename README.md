# Taskoracle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.  
Demo Link: [Taskoracle](http://129.213.55.175:8081/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deployment
prerequisite  
1. [Docker](https://www.docker.com/)
2. [Oracle Cloud Account](https://www.oracle.com/cloud/sign-in.html)

### 
* Set up Oracle Instance and Docker Install  
* Docker-Compose Install  
* Git Clone the repository
* Nginx Install and Set up  
* Run command to create image  
```
    docker-compose build
```
* Run command to start the service in container  
```
    docker-compose up -d
```
* Display and Check if the container is runing
```
    docker-compose ps
```
* Deploy Successfully 
