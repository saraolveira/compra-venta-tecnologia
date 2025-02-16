import crypto from "crypto";
import { insertArticuloModel } from "../../models/articulos/insertArticuloModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";
export const newArticuloService = async (
    vendedorId,
    nombre,
    categoria,
    localidad,
    precio,
    descripcion
) => {
    const id = crypto.randomUUID();
    const result = await insertArticuloModel(
        id,
        vendedorId,
        nombre,
        categoria,
        localidad,
        precio,
        descripcion
    );
    if (result.affectedRows !== 1) {
        throw generateErrorUtils(
            500,
            "SOLICITUD_NOT_MADE",
            "No se ha podido crear articulo"
        );
    }
    return result;
};
