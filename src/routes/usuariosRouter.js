import express from "express";
import { registerUserController } from "../controllers/users/registerUserController.js";
import { getAllUsersController } from "../controllers/users/getAllUsersController.js";
import { getUserByIdController } from "../controllers/users/getUserIdController.js";
// import { activeUserController } from "../controllers/users/activeUserController.js";
// import { loginUserController } from "../controllers/users/loginUserController.js";
import { authUserMiddleware } from "../middleware/authUserMiddleware.js";
import { getOwnUserController } from "../controllers/users/getOwnUserController.js";
import { editUserController } from "../controllers/users/editUserController.js";

export const usuariosRouter = express.Router();

usuariosRouter.get("/usuarios", getAllUsersController); // ruta para obtener todos los usuarios
usuariosRouter.post("/usuarios/register", registerUserController); // ruta para registrar un usuario
// usuariosRouter.put("/usuarios/active/:registrationCode", activeUserController); // ruta para activar el usuario
// usuariosRouter.post("/usuarios/login", loginUserController); // ruta para login
usuariosRouter.get("/usuarios/own", authUserMiddleware, getOwnUserController); // ruta para obtener tu propio usuario
usuariosRouter.get("/usuarios/:id", getUserByIdController); // ruta para obtener un usuario por ID
usuariosRouter.put("/usuarios/own", authUserMiddleware, editUserController); // ruta para editar la info de tu usuario
