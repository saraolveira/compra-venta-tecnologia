import express from "express";

import { getAllArticulosController } from "../controllers/articulos/getAllArticulosController.js";
import { getArticuloByIdController } from "../controllers/articulos/getArticuloByIdController.js";

export const articulosRoutes = express.Router();

articulosRoutes.get("/articulos", getAllArticulosController);
articulosRoutes.get("articulos/:id", getArticuloByIdController);
