import express from "express";

import { registerUserController } from "../controllers/users/registerUserController.js";
import { getAllUsersController } from "../controllers/users/getAllUsersController.js";
import { getUserByIdController } from "../controllers/users/getUserIdController.js";

export const usuariosRouter = express.Router();

// ruta para obtener todos los usuarios
usuariosRouter.get("/usuarios", getAllUsersController);

// ruta para obtener un usuario por ID
usuariosRouter.get("/usuarios/:id", getUserByIdController);

// ruta para registrar un usuario
usuariosRouter.post("/usuarios/register", registerUserController);
// usamos POST porque queremos enviar datos al servidor para crear algo

