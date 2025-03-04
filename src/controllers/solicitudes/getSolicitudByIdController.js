import { getSolicitudByIdService } from "../../services/solicitudes/getSolicitudByIdService.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getSolicitudByIdController = async (req, res, next) => {
    try {
        const { id_sol } = req.params;

        const solicitud = await getSolicitudByIdService(id_sol);

        if (!solicitud) {
            throw generateErrorUtils(
                404,
                "SOLICITUD_NOT_FOUND",
                "No existe la solicitud"
            );
        }

        res.status(200).send({
            status: "success",
            message: "Solicitud obtenida",
            data: { solicitud },
        });
    } catch (error) {
        next(error);
    }
};
