import express from "express";
import { authUserMiddleware } from "../middleware/authUserMiddleware.js";
import { newValoracionController } from "../controllers/valoraciones/newValoracionController.js";
import { getAllValoracionesController } from "../controllers/valoraciones/getAllValoracionesController.js";
import { getValoracionByIdController } from "../controllers/valoraciones/getValoracionByIdController.js";

export const valoracionesRouter = express.Router();

valoracionesRouter.get("/valoraciones", getAllValoracionesController); // ruta para obtener todas las valoraciones

valoracionesRouter.get("/valoraciones/:id", getValoracionByIdController); // ruta para obtener valoracion por id

valoracionesRouter.post(
    "/articulo/:id/valorar",
    authUserMiddleware,
    newValoracionController
); // ruta para crear una nueva valoración. cambiar nombre????
