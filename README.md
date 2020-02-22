
<h1 align="center">
    <img alt="GoBarber Web" src="https://res.cloudinary.com/lukemorales/image/upload/v1564533051/readme_logos/gobarber_hg5ddx.png" />
    <br>
    GoBarber Web
</h1>
<p align="center">BarberShop system that connects clients and providers.</p>


<hr />

## Features

A Node.js API built with Express and all the latest tools and best practices in development!

- **Express** — A web framework for Node
- **Sequelize** — SQL dialect ORM for Node.js
- **PostgreSQL** - Relational database
- **MongoDB** — document-based database
- **Redis** — key-value data model
- **Yup** - Object schema validation
- **Sentry** - cross-platform application monitoring
- **Nodemailer** - Send e-mails with Node.JS
- **Lint** — ESlint/Prettier/Editor Config

## Dependencies

- [Node.js](https://nodejs.org/en/) 8.0.0 ou >
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Docker](https://www.docker.com/)

## Prerequisites

_In the next few weeks, I plan to include Docker directly in the repository with docker-compose, until there this step is required._

To run this server you will need three containers running on your machine.

To do so, you will need to run the following commands:

- `docker run --name redisbarber -p 6379:6379 -d -t redis:alpine`;
- `docker run --name mongobarber -p 27017:27017 -d -t mongo`;
- `docker run --name some-postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres`;

_Remember: If you restart your machine, you will need to start again the server with `docker start <container_id>`._

## Getting started

_Consider checking out the FrontEnd [repository](https://github.com/riltonfranzonee/gobarber-web)!_

1. Clone this repo using `https://github.com/riltonfranzonee/gobarber-api.git`
2. Move to the appropriate directory: `cd gobarber-api`.<br />
3. Run `yarn` to install dependencies.<br />
4. Copy the `.env.example` file and rename it to `.env`.<br/>
5. Add all the values for the environment variables.<br/>
6. Run `yarn start` and `yarn queue` to run the servers at `http://localhost:3000`.

Made with ♥ by Rilton Franzone :wave: [Get in touch!](https://www.linkedin.com/in/rilton-franzone-b975a7198/)




