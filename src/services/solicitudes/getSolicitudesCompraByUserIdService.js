import { selectPhotosByArticuloIdModel } from "../../models/photos/selectPhotosByArticuloIdModel.js";
import { selectSolicitudesCompraByUserIdModel } from "../../models/solicitudes/selectSolicitudesCompraByUserIdModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getSolicitudesCompraByUserIdService = async (idUsuario) => {
    const solicitudesCompras =
        await selectSolicitudesCompraByUserIdModel(idUsuario);

    for (const solicitud of solicitudesCompras) {
        const fotos = await selectPhotosByArticuloIdModel(solicitud.articuloId);
        solicitud.fotos = fotos;
    }

    if (!solicitudesCompras || solicitudesCompras.length === 0) {
        throw generateErrorUtils(
            404,
            "SOLICITUD_NOT_FOUND",
            "No se encontraron solicitudes de compra para el usuario proporcionado"
        );
    }

    return solicitudesCompras;
};
