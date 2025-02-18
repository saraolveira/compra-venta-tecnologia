import express from "express";

// import { getAllArticulosController } from "../controllers/articulos/getAllArticulosController.js";
import { getArticuloByIdController } from "../controllers/articulos/getArticuloByIdController.js";
import { authUserMiddleware } from "../middleware/authUserMiddleware.js";
import { articleExistsMiddleware } from "../middleware/articleExistsMiddleware.js";
import { newSolicitudCompraController } from "../controllers/solicitudes/newSolicitudCompraController.js";
import { newArticuloController } from "../controllers/articulos/newArticuloController.js";
import { isOwnerMiddleware } from "../middleware/isOwnerMiddleware.js";
import { editArticuloController } from "../controllers/articulos/editArticuloController.js";
// import { getArticulosByCategoryController } from "../controllers/articulos/getArticulosByCategoryController.js";
import { articuloVendidoController } from "../controllers/articulos/ArticuloVendidoController.js";
import { aceptarRechazarController } from "../controllers/solicitudes/aceptarRechazarController.js";
import { getAllSolicitudesController } from "../controllers/solicitudes/getAllSolicitudesController.js";
import { getArticulosFilteredController } from "../controllers/articulos/getArticulosFilteredController.js";

export const articulosRouter = express.Router();

// articulosRouter.get("/articulos", getAllArticulosController);
articulosRouter.get("/articulos", getArticulosFilteredController); // ruta para obtener todos los articulos y aplicarles filtros con querys
articulosRouter.get("/articulos/:id", getArticuloByIdController);
articulosRouter.post("/articulos", authUserMiddleware, newArticuloController); // ruta para crar un articulo
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
    articuloVendidoController
); // ruta para marcar un articulo como vendido
/* articulosRouter.get(
    "/articulos/categoria/:category",
    getArticulosByCategoryController
); // ruta para obtener los articulos filtrados por categoria */
articulosRouter.get("/solicitudes", getAllSolicitudesController); // ruta para obtener todas las solicitudes de compra
articulosRouter.patch(
    "/articulos/:id/solicitudes/:id_sol",
    authUserMiddleware,
    articleExistsMiddleware,
    isOwnerMiddleware,
    aceptarRechazarController
);
