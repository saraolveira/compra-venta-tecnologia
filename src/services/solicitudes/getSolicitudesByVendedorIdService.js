import { selectPhotosByArticuloIdModel } from "../../models/photos/selectPhotosByArticuloIdModel.js";
import { selectSolicitudesByVendedorIdModel } from "../../models/solicitudes/selectSolicitudesByVendedorIdModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getSolicitudesByVendedorIdService = async (id) => {
    const solicitudes = await selectSolicitudesByVendedorIdModel(id);

    for (const solicitud of solicitudes) {
        const fotos = await selectPhotosByArticuloIdModel(solicitud.articuloId);
        solicitud.fotos = fotos;
    }

    if (!solicitudes) {
        throw generateErrorUtils(
            404,
            "SOLICITUDES_NOT_FOUND",
            "No se encontraron solicitudes de compra para los articulos vendidos por este usuario"
        );
    }

    return solicitudes;
};
