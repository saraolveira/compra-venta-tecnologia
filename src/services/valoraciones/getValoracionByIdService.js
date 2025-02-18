import { getValoracionByIdModel } from "../../models/valoraciones/getValoracionByIdModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getValoracionByIdService = async (valoracionId) => {
    // Consultar la valoración en la BBDD
    const valoracion = await getValoracionByIdModel(valoracionId);

    if (!valoracion) {
        throw generateErrorUtils(
            404,
            "VALORATION_NOT_FOUND",
            "La valoración no existe"
        );
    }

    return valoracion;
};
