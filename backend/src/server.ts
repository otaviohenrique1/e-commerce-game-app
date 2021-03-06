import express from "express";
import path from "path";
import 'express-async-errors';
import cors from "cors";
import "./connection";
import routes from "./routes";
import errorHandler from "./errors/handler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads/avatar', express.static(path.join(__dirname, '..', 'uploads', 'avatar')));
app.use('/uploads/capa', express.static(path.join(__dirname, '..', 'uploads', 'capa')));
app.use('/uploads/galeria', express.static(path.join(__dirname, '..', 'uploads', 'galeria')));
app.use(errorHandler);

app.listen(3333, () => console.log("Express iniciado..."));

// import "reflect-metadata";
// import {createConnection} from "typeorm";
// import {User} from "./entity/Usuario";

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));
