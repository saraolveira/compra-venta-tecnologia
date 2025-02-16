import express from "express";

import { getAllArticulosController } from "../controllers/articulos/getAllArticulosController.js";
import { getArticuloByIdController } from "../controllers/articulos/getArticuloByIdController.js";
import { addArticleController } from "../controllers/articulos/addArticleController.js";
export const articulosRoutes = express.Router();
export const router = express.Router();
articulosRoutes.get("/articulos", getAllArticulosController);
articulosRoutes.get("/articulos/:id", getArticuloByIdController);
articulosRoutes.get("/articulos", addArticleController); S