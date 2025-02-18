import crypto from "crypto";
import { insertValoracionModel } from "../../models/valoraciones/insertValoracionModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const newValoracionService = async (data) => {
    // Obtener los datos de la solicitud
    const { valoracion, comentario, compradorId, solicitudCompraId } = data;

    if (valoracion === undefined || valoracion === null) {
        throw generateErrorUtils(
            400,
            "VALORATION_REQUIRED",
            "La valoración es obligatoria"
        );
    }

    if (comentario.length > 256) {
        throw generateErrorUtils(
            400,
            "COMMENT_LIMIT_REACHED",
            "El comentario no puede superar los 256 caracteres"
        );
    }

    // Generar ID único para la valoración
    const id = crypto.randomUUID();

    // Insertar valoración en la BBDD
    const { result } = await insertValoracionModel({
        id,
        valoracion,
        comentario,
        compradorId,
        solicitudCompraId,
    });
    if (result.affectedRows === 0) {
        throw generateErrorUtils(
            400,
            "PURCHASE_NOT_APROVED",
            "No puedes valorar una compra hasta que no sea aprobada"
        );
    }

    // Devolver la insercción
    return { id, valoracion, comentario, compradorId, solicitudCompraId };
};
