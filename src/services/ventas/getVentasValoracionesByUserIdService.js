import { selectPhotosByArticuloIdModel } from "../../models/photos/selectPhotosByArticuloIdModel.js";
import { selectVentasValoracionesByUserIdModel } from "../../models/ventas/selectVentasValoracionesByUserIdModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getVentasValoracionesByUserIdService = async (idUsuario) => {
    const ventasValoraciones =
        await selectVentasValoracionesByUserIdModel(idUsuario);

    for (const venta of ventasValoraciones) {
        const fotos = await selectPhotosByArticuloIdModel(venta.articuloId);
        venta.fotos = fotos;
    }

    if (!ventasValoraciones || ventasValoraciones.length === 0) {
        throw generateErrorUtils(
            404,
            "VENTA_VALORACION_NOT_FOUND",
            "No se encontraron ventas o valoraciones para el usuario proporcionado"
        );
    }

    return ventasValoraciones;
};
