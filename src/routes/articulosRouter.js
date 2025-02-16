import express from "express";

import { getAllArticulosController } from "../controllers/articulos/getAllArticulosController.js";
import { getArticuloByIdController } from "../controllers/articulos/getArticuloByIdController.js";

export const articulosRouter = express.Router();

articulosRouter.get("/articulos", getAllArticulosController);
articulosRouter.get("/articulos/:id", getArticuloByIdController);
