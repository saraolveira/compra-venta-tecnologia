import express from "express";

import { articulosRouter } from "./articulosRouter.js";
import { usuariosRouter } from "./usuariosRouter.js";
import { solicitudesRouter } from "./solicitudesRouter.js";
import { ventasRouter } from "./ventasRouter.js";

export const router = express.Router();

router.use(articulosRouter);
router.use(usuariosRouter);
router.use(solicitudesRouter);
router.use(ventasRouter);
