import express from "express";
import { getVentasValoracionesController } from "../controllers/ventas/getVentasValoracionesController.js";
import { getSolicitudesCompraController } from "../controllers/ventas/getSolicitudesCompraController.js";

export const ventasRoutes = express.Router();

//Ruta para las ventas y valoraciones
ventasRoutes.get(
    "/ventas-valoraciones/:idUsuario",
    getVentasValoracionesController
);

//Ruta para las solicitudes de compra
ventasRoutes.get(
    "/solicitudes-compra/:idUsuario",
    getSolicitudesCompraController
);
