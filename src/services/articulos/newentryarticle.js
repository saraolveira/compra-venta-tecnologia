
import crypto from "crypto";
import { insertArticleModel } from "../../models/articles/insertArticleModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";
import { selectArticleById } from "../../models/articulos/selectArticuloByIdModel.js";

export const registerArticleService = async (nombre, categoria, localidad, precio, descripcion, vendedorId) => {
    if (await getArticuloById(id)) {
        throw generateErrorUtils(
            409,
            "ARTICLE_NAME_TAKEN",
            "Ya existe un artículo con ese nombre. Prueba con otro."
        );
    }

    const id = crypto.randomUUID();

    const newArticle = {
        id,
        nombre,
        categoria,
        localidad,
        precio,
        descripcion,
        vendedorId,
    };

    const result = await insertArticleModel(newArticle);

    if (!result || result.affectedRows !== 1) {
        throw generateErrorUtils(500, "ERROR_DB", "No se pudo completar el registro del artículo");
    }

    return { id, nombre, categoria, localidad, precio, descripcion, vendedorId };
};













