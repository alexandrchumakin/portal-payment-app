# Payment portal
VueJS-based front-end for payments API hosted in https://alexandrchumakin-payment-app.builtwithdark.com and built with [Darklang](https://darklang.com/).

This simple web portal can only create and show users, merchants and payments.

## Develop environment
In order to work with project locally your development environment should have the following packages installed:
- node ^16.*
- npm ^6.*

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Docker setup
### Build dev image
`docker build -t {imageName}:{tag} .`
### Build prod image using locally built assets
`docker build -f DockerfileProd -t {imageName}:{tag} .`
### Build prod image using multi-stage build
`docker build -f DockerfileMultiStage -t {imageName}:{tag} .`
