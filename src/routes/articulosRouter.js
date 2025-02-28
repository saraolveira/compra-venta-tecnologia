import express from "express";

import { getArticuloByIdController } from "../controllers/articulos/getArticuloByIdController.js";
import { authUserMiddleware } from "../middleware/authUserMiddleware.js";
import { articleExistsMiddleware } from "../middleware/articleExistsMiddleware.js";
import { newSolicitudCompraController } from "../controllers/solicitudes/newSolicitudCompraController.js";
import { newArticuloController } from "../controllers/articulos/newArticuloController.js";
import { isOwnerMiddleware } from "../middleware/isOwnerMiddleware.js";
import { editArticuloController } from "../controllers/articulos/editArticuloController.js";
import { editAceptarRechazarSolicitudController } from "../controllers/solicitudes/editAceptarRechazarSolicitudController.js";
import { getAllSolicitudesController } from "../controllers/solicitudes/getAllSolicitudesController.js";
import { getArticulosFilteredController } from "../controllers/articulos/getArticulosFilteredController.js";
import { checkAdminRol } from "../middleware/isAdminMiddleware.js";
import { publishArticleController } from "../controllers/articulos/publishArticuloController.js";
import { newValoracionController } from "../controllers/valoraciones/newValoracionController.js";
import { getAllValoracionesController } from "../controllers/valoraciones/getAllValoracionesController.js";
import { getValoracionByIdController } from "../controllers/valoraciones/getValoracionByIdController.js";
import { editArticuloVendidoController } from "../controllers/articulos/editArticuloVendidoController.js";
import { getSolicitudesCompraByArticuloIdController } from "../controllers/solicitudes/getSolicitudesCompraByArticuloIdController.js";
import { getCategoriasController } from "../controllers/articulos/getCategoriasController.js";
import { getArticulosPendingController } from "../controllers/articulos/getArticulosPendingController.js";

export const articulosRouter = express.Router();

articulosRouter.get("/articulos", getArticulosFilteredController); // ruta para obtener todos los articulos y aplicarles filtros con querys
articulosRouter.get("/articulos/categorias", getCategoriasController);
articulosRouter.get("/articulos/:id", getArticuloByIdController);
articulosRouter.post("/articulos", authUserMiddleware, newArticuloController); // ruta para crar un articulo
articulosRouter.get(
    "/articulos-pendientes",
    authUserMiddleware,
    checkAdminRol,
    getArticulosPendingController
);
articulosRouter.patch(
    "/articulos/:id/publicar",
    authUserMiddleware,
    checkAdminRol,
    publishArticleController
); // ruta para que el admin apruebe un articulo
articulosRouter.put(
    "/articulos/:id",
    authUserMiddleware,
    articleExistsMiddleware,
    isOwnerMiddleware,
    editArticuloController
); // ruta para editar la info de un articulo
articulosRouter.post(
    "/articulos/:id/comprar",
    authUserMiddleware,
    articleExistsMiddleware,
    newSolicitudCompraController
); // ruta para hacer la solicitud de compra de un artículo
articulosRouter.patch(
    "/articulos/:id",
    authUserMiddleware,
    articleExistsMiddleware,
    isOwnerMiddleware,
    editArticuloVendidoController
); // ruta para marcar un articulo como vendido
articulosRouter.get("/solicitudes", getAllSolicitudesController); // ruta para obtener todas las solicitudes de compra
articulosRouter.get(
    "/articulos/:id/solicitudes",
    articleExistsMiddleware,
    getSolicitudesCompraByArticuloIdController
); //  ruta para obtener las solicitudes de compra de un articulo
articulosRouter.patch(
    "/articulos/:id/solicitudes/:id_sol",
    authUserMiddleware,
    articleExistsMiddleware,
    isOwnerMiddleware,
    editAceptarRechazarSolicitudController
); // ruta para aceptar o rechazar una solictud de compra
articulosRouter.post(
    "/articulos/:id/valorar",
    authUserMiddleware,
    newValoracionController
); // ruta para crear una nueva valoración
articulosRouter.get("/valoraciones", getAllValoracionesController); // ruta para obtener todas las valoraciones
articulosRouter.get("/valoraciones/:id", getValoracionByIdController); // ruta para obtener valoracion por id
