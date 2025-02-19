import { editAceptarRechazarSolicitudService } from "../../services/solicitudes/editAceptarRechazarSolicitudService.js";
import { getSolicitudByIdService } from "../../services/solicitudes/getSolicitudByIdService.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const editAceptarRechazarSolicitudController = async (
    req,
    res,
    next
) => {
    try {
        const { id_sol } = req.params;
        const { estado } = req.body;

        // devolver un error si no tengo action

        if (!estado) {
            throw generateErrorUtils(
                400,
                "MISSING_PARAMETER",
                "Falta el parámetro estado"
            );
        }

        // existe solicidud id_sol

        const solicitud = await getSolicitudByIdService(id_sol);

        if (!solicitud) {
            throw generateErrorUtils(
                404,
                "SOLICITUD_NOT_FOUND",
                "No existe la solicitud"
            );
        }

        // actualizar la solicitud (action)

        const solicitudActualizada = await editAceptarRechazarSolicitudService({
            id: id_sol,
            estado,
        });

        res.status(200).send({
            status: "success",
            message: "Ok",
            data: { solicitudActualizada },
        });
    } catch (error) {
        next(error);
    }
};
