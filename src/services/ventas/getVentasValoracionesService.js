import { historicoVentasValoraciones } from "../../models/ventas/selectVentasValoracionesModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getVentasValoracionesService = async (idUsuario) => {
    try {
        const ventasValoraciones = await historicoVentasValoraciones(idUsuario);

        if (!ventasValoraciones || ventasValoraciones.length === 0) {
            throw generateErrorUtils(
                404,
                "VENTA_VALORACION_NOT_FOUND",
                "No se encontraron ventas o valoraciones para el usuario proporcionado"
            );
        }

        return ventasValoraciones;
    } catch (error) {
        throw generateErrorUtils(
            500,
            "SERVER_ERROR",
            "Error al obtener el historial de ventas y valoraciones"
        );
    }
};
