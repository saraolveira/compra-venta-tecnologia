import express from "express";

import { getAllSolicitudesController } from "../controllers/solicitudes/getAllSolicitudesController.js";

export const solicitudesRouter = express.Router();

solicitudesRouter.get("/solicitudes", getAllSolicitudesController);
