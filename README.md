# blog

Stack:

- Vuejs
- Nodejs
- Redis
- Jest
- Cypress
- Docker
- Yarn

This is a micro project which allows to create a blog entry, list the blog entries stored in a data base and see the details of a single blog.

The development environment has been dockerized.

There are unit tests implemented with Jest and e2e tests implemented with Cypress.

Redis is the technology used as database.

The api consists of a Node js backend - `server.js` file - with the followed endpoints:

- `GET /blog` - To retrieve all the blogs stored in the database
- `GET /blog/:id` - To retrieve a single blog data by id
- `POST /blog` - To create a new blog entry

To access to the redis data base install `redis-cli` package in the host computer.

The blog entries are stored in a set key called `blogs`.

## Project setup

Install dependencies

```
yarn install
```

Setup development environment

```
docker-compose up
```

Shutdown development environment

```
docker-compose down
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Unit tests

Execute the unit tests

```
yarn test:unit
```

Execute the unit tests with coverage

```
yarn test:unit:coverage
```

See the coverage as html

```
open coverage/lcov-report/index.html
```

### e2e tests

Execute the e2e tests

```
yarn test:e2e
```

### Compiles and minifies for production

```
yarn build
```

### Redis

To explore the database from the host

```
redis-cli
keys *
smembers
smembers blogs
```
