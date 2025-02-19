import { selectVentasValoracionesByUserIdModel } from "../../models/ventas/selectVentasValoracionesByUserIdModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getVentasValoracionesByUserIdService = async (idUsuario) => {
    const ventasValoraciones =
        await selectVentasValoracionesByUserIdModel(idUsuario);

    if (!ventasValoraciones || ventasValoraciones.length === 0) {
        throw generateErrorUtils(
            404,
            "VENTA_VALORACION_NOT_FOUND",
            "No se encontraron ventas o valoraciones para el usuario proporcionado"
        );
    }

    return ventasValoraciones;
};
