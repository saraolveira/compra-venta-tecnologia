import express from "express";

import { articulosRouter } from "./articulosRouter.js";
import { usuariosRouter } from "./usuariosRoutes.js";
import { solicitudesRouter } from "./solicitudesRoutes.js";
import { ventasRouter } from "./ventasRoutes.js";
export const router = express.Router();

router.use(articulosRouter);
router.use(usuariosRouter);
router.use(solicitudesRouter);
router.use(ventasRouter);
