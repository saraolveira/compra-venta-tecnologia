import express from "express";
import { usuariosRouter } from "./usuariosRoutes.js";

export const router = express.Router();

router.use(usuariosRouter);
