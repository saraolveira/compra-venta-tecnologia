import express from "express";

import { getAllSolicitudesController } from "../controllers/solicitudes/getAllSolicitudesController.js";

export const solicitudesRouter = express.Router();

// hacer otro endpoint para mirar la solicitudes que tiene un usuario en su articulo

solicitudesRouter.get("/solicitudes", getAllSolicitudesController);

solicitudesRouter.get(
    "usuarios/:id/articulos/:id/solicitudes/",
    getAllSolicitudesController
);

//solicitudesRouter.put("/solicitudes/:id", aceptarRechazarController);
