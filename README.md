<h1 align="center">
    <img src="https://user-images.githubusercontent.com/58868651/77219318-88174b00-6b13-11ea-924d-1a6acdcbd939.png" />
</h1>

<p align="center">
Barbershop system that connects clients and providers - REST API made with Node.js
</p>

💈 About GoBarber
------------------
This project is a system of a fictional barbershop called GoBarber. The full system has a [**web version**](https://github.com/riltonfranzonee/gobarber) made with ReactJS, an exclusive area for providers, where they are able to list all their appointments, change personal info and recieve notifications everytime a new appointment is created (also via email). The application also has a [**mobile version**](https://github.com/riltonfranzonee/gobarber-mobile) made with React Native, an exclusive area for clients, where they are able to create a new appointment with their favorite provider based on the available schedule. Besides that, the client is able to cancel the appointment (must be at most 2 hours before the appointment). All this system is served by a [**REST API**](https://github.com/riltonfranzonee/gobarber-api) made with Node.js

:wrench: Used technologies:
----------------------
This REST API has a great level of complexity, combinig different types of databases, user authentication, email firing, file upload and a lot of CRUD's. To help me with all this work I used the following technologies:

- [**Insomnia**](https://insomnia.rest/)
- [**NodeJS**](https://nodejs.org/en/)
- [**ExpressJS**](https://expressjs.com/)
- [**Nodemon**](https://nodemon.io/)
- [**Docker**](https://www.docker.com/)
- [**PostgreSQL**](https://www.postgresql.org/)
- [**MongoDB**](https://www.mongodb.com/)
- [**Redis**](https://redis.io/)
- [**Sequelize**](https://sequelize.org/)
- [**Yup**](https://github.com/jquense/yup)
- [**jwt**](https://www.npmjs.com/package/jsonwebtoken/)
- [**bcryptJS**](https://www.npmjs.com/package/bcryptjs)
- [**multer**](https://github.com/expressjs/multer)
- [**date-fns**](https://date-fns.org/docs/Getting-Started)

## :information_source: How to use this project
To clone and run this application, you'll need Git, NodeJS, Yarn and Docker.

The first thing you need to do is to run these three containers on your machine:

- `docker run --name redisbarber -p 6379:6379 -d -t redis:alpine`;
- `docker run --name mongobarber -p 27017:27017 -d -t mongo`;
- `docker run --name some-postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres`;

Then you just need to run the following commands:

```bash
# Clone this repository
$ git clone https://github.com/riltonfranzonee/gobarber-api

# Go into the repository
$ cd gobarber-api

# Install dependencies
$ yarn

# Run the app
$ yarn dev
```

After that you can use [*Insomnia REST Client*](https://insomnia.rest/) on *port 3333" to use the routes!


:speech_balloon: Reach me
----------

[*In case you want to reach me*](https://www.linkedin.com/in/rilton-franzone-b975a7198/)



Thank you for taking a look at my project! Made with ♥
