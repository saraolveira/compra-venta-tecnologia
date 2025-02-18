import { selectSolicitudByIdModel } from "../../models/solicitudes/selectSolicitudByIdModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getSolicitudByIdService = async (id) => {
    const solicitud = await selectSolicitudByIdModel(id);

    if (!solicitud) {
        throw generateErrorUtils(
            404,
            "SOLICITUD_NOT_FOUND",
            "Solicitud no encontrada"
        );
    }

    return solicitud;
};
