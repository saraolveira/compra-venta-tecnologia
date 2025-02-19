import { selectValoracionByIdModel } from "../../models/valoraciones/selectValoracionByIdModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getValoracionByIdService = async (valoracionId) => {
    // Consultar la valoración en la BBDD
    const valoracion = await selectValoracionByIdModel(valoracionId);

    if (!valoracion) {
        throw generateErrorUtils(
            404,
            "VALORATION_NOT_FOUND",
            "La valoración no existe"
        );
    }

    return valoracion;
};
