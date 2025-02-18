import express from "express";

import { articulosRouter } from "./articulosRouter.js";
import { usuariosRouter } from "./usuariosRouter.js";
import { valoracionesRouter } from "./valoracionesRouter.js";


export const router = express.Router();

router.use(articulosRouter);
router.use(usuariosRouter);
router.use(valoracionesRouter);

