import { updateAceptarRechazarSolicitudModel } from "../../models/solicitudes/updateAceptarRechazarSolicitudModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const editAceptarRechazarSolicitudService = async (solicitud) => {
    const result = await updateAceptarRechazarSolicitudModel(solicitud);

    if (result.affectedRows !== 1) {
        throw generateErrorUtils(
            404,
            "SOLICITUD_NOT_UPDATED",
            "solicitud no actualizada"
        );
    }

    return solicitud;
};
