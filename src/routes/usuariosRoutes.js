import express from "express";

import { getAllUsersController } from "../controllers/users/getAllUsersController.js";

export const usuariosRoutes = express.Router();

usuariosRoutes.get("/usuarios", getAllUsersController);
