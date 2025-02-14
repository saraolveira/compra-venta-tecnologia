import express from "express";

import { articulosRoutes } from "./articulosRoutes.js";
import { usuariosRoutes } from "./usuariosRoutes.js";
import { solicitudesRouter } from "./solicitudesRoutes.js";
export const router = express.Router();

router.use(articulosRoutes);
router.use(usuariosRoutes);
router.use(solicitudesRouter);

