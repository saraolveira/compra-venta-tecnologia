import express from "express";

import { getAllArticulosController } from "../controllers/articulos/getAllArticulosController.js";
import { getArticuloByIdController } from "../controllers/articulos/getArticuloByIdController.js";
import { authUserMiddleware } from "../middleware/authUserMiddleware.js";
import { articleExistsMiddleware } from "../middleware/articleExistsMiddleware.js";
import { newSolicitudCompraController } from "../controllers/solicitudes/newSolicitudCompraController.js";
import { newArticuloController } from "../controllers/articulos/newArticuloController.js";

export const articulosRouter = express.Router();

articulosRouter.get("/articulos", getAllArticulosController);
articulosRouter.get("/articulos/:id", getArticuloByIdController);
articulosRouter.post("/articulos", authUserMiddleware, newArticuloController);
articulosRouter.post(
    "/articulos/:id/comprar",
    authUserMiddleware,
    articleExistsMiddleware,
    newSolicitudCompraController
); // ruta para hacer la solicitud de compra de un artículo
