import { selectAllValoracionesModel } from "../../models/valoraciones/selectAllValoracionesModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getAllValoracionesService = async () => {
    // Obtener todas las valoraciones desde el modelo
    const valoraciones = await selectAllValoracionesModel();

    if (!valoraciones.length) {
        throw generateErrorUtils(
            404,
            "VALORATIONS_NOT_FOUND",
            "No se han encontrado valoraciones"
        );
    }

    return valoraciones;
};
