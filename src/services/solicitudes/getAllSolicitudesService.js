import { selectPhotosByArticuloIdModel } from "../../models/photos/selectPhotosByArticuloIdModel.js";
import { selectAllSolicitudesModel } from "../../models/solicitudes/selectAllSolicitudesModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getAllSolicitudesService = async () => {
    const solicitudes = await selectAllSolicitudesModel();

    for (const solicitud of solicitudes) {
        const fotos = await selectPhotosByArticuloIdModel(solicitud.articuloId);
        solicitud.fotos = fotos;
    }

    if (!solicitudes) {
        throw generateErrorUtils(
            404,
            "NO_SOLICITUDES_FOUND",
            "No se han encontrado las solicitudes"
        );
    }

    return solicitudes;
};
