import express from "express";

import { getAllArticulosController } from "../controllers/articulos/getAllArticulosController.js";
import { getArticuloByIdController } from "../controllers/articulos/getArticuloByIdController.js";
import { ArticuloVendidoController } from "../controllers/articulos/ArticuloVendidoController.js";
import { aceptarRechazarController } from "../controllers/solicitudes/aceptarRechazarController.js";

export const articulosRoutes = express.Router();

articulosRoutes.get("/articulos", getAllArticulosController);
articulosRoutes.get("/articulos/:id", getArticuloByIdController);
articulosRoutes.put("/articulos/:id", ArticuloVendidoController);

// antes de llegar al controllador passar por authUserMiddleware

articulosRoutes.patch(
    "/articulos/:id_art/solicidudes/:id_sol",
    aceptarRechazarController
);
