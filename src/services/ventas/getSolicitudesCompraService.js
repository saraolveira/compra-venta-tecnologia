import { historicoSolicitudesCompra } from "../../models/ventas/selectSolicitudesCompraModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getSolicitudesCompraService = async (idUsuario) => {
    try {
        const solicitudesCompras = await historicoSolicitudesCompra(idUsuario);

        if (!solicitudesCompras || solicitudesCompras.length === 0) {
            throw generateErrorUtils(
                404,
                "SOLICITUD_NOT_FOUND",
                "No se encontraron solicitudes de compra para el usuario proporcionado"
            );
        }

        return solicitudesCompras;
    } catch (error) {
        throw generateErrorUtils(
            500,
            "SERVER_ERROR",
            "Error al obtener el historial de solicitudes de compra"
        );
    }
};
