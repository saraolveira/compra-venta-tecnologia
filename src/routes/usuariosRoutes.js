import express from "express";

import { registerUserController } from "../controllers/users/registerUserController.js";
import { getAllUsersController } from "../controllers/users/getAllUsersController.js";
import { getUserByIdController } from "../controllers/users/getUserIdController.js";
import { loginUserController } from "../controllers/users/loginUserController.js";
import { activeUserController } from "../controllers/users/activeUserController.js";

export const usuariosRouter = express.Router();

// ruta para obtener todos los usuarios
usuariosRouter.get("/usuarios", getAllUsersController);

// ruta para obtener un usuario por ID
usuariosRouter.get("/usuarios/:id", getUserByIdController);

// ruta para registrar un usuario
usuariosRouter.post("/usuarios/register", registerUserController);

// ruta para activar un usuario
usuariosRouter.put(
    "/usuarios/validate/:registrationCode",
    activeUserController
);

// ruta para iniciar sesión
usuariosRouter.post("/usuarios/login", loginUserController);
