import express from "express";

export const userRouter = express.Router();

// ruta para registrar un usuario
userRouter.post("/users/register", registerUserController);
// usamos POST porque queremos enviar datos al servidor para crear algo
// registerUserController es una referencia a la función que se ejecutará cuando alguien haga una petición POST a '/users/register'
