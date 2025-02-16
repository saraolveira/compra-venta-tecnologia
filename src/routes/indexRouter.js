import express from "express";

import { articulosRoutes } from "./articulosRoutes.js";
import { usuariosRouter } from "./usuariosRoutes.js";
import { solicitudesRouter } from "./solicitudesRoutes.js";
import { ventasRoutes } from "./ventasRoutes.js";
export const router = express.Router();

router.use(articulosRoutes);
router.use(usuariosRouter);
router.use(solicitudesRouter);
router.use(ventasRoutes);
