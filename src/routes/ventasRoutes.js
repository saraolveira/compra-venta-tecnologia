import express from "express";
import { getVentasValoracionesController } from "../controllers/ventas/getVentasValoracionesController.js";
import { getSolicitudesCompraController } from "../controllers/ventas/getSolicitudesCompraController.js";

export const ventasRouter = express.Router();

//Ruta para las ventas y valoraciones
ventasRouter.get(
    "/ventas-valoraciones/:idUsuario",
    getVentasValoracionesController
);

//Ruta para las solicitudes de compra
ventasRouter.get(
    "/solicitudes-compra/:idUsuario",
    getSolicitudesCompraController
);
