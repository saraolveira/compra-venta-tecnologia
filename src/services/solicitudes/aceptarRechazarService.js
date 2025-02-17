import { aceptarRechazarModel } from "../../models/solicitudes/aceptarRechazarModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const aceptarRechazarService = async (solicitud) => {
    const result = await aceptarRechazarModel(solicitud);

    if (result.affectedRows !== 1) {
        throw generateErrorUtils(
            404,
            "SOLICITUD_NOT_UPDATED",
            "solicitud no actualizada"
        );
    }

    return solicitud;
};
