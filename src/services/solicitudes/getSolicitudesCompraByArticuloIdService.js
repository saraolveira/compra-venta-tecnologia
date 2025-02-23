import { selectSolicitudesCompraByArticuloIdModel } from "../../models/solicitudes/selectSolicitudesCompraByArticuloIdModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getSolicitudesCompraByArticuloIdService = async (id) => {
    const solicitudes = await selectSolicitudesCompraByArticuloIdModel(id);

    if (!solicitudes) {
        throw generateErrorUtils(
            404,
            "SOLICITUDES_NOT_FOUND",
            "No se encontraron solicitudes de compra para el articulo"
        );
    }

    return solicitudes;
};
