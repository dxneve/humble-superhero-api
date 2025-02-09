## Description

Humble Superhero API is built with [Nest](https://github.com/nestjs/nest).
The data is stored in a simple in-memory database.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## curl requests examples

- `curl -X POST -H "Content-Type: application/json" -d '{"name": "janee", "superpower": "janees superpower", "humility": 9}' http://127.0.0.1:3000/superheroes`

- `curl http://127.0.0.1:3000/superheroes`
