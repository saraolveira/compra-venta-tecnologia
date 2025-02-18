import { selectSolicitudByArticuloIdCompradorIdModel } from "../../models/solicitudes/selectSolicitudByArticuloIdCompradorIdModel.js";
import { getSolicitudByIdService } from "../../services/solicitudes/getSolicitudByIdService.js";
import { newValoracionService } from "../../services/valoraciones/newValoracionService.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const newValoracionController = async (req, res, next) => {
    try {
        // Extraer datos del request
        const articuloId = req.params.id;
        const { valoracion, comentario } = req.body;
        const compradorId = req.usuario.id;

        // Comprobamos que la solicitud de compra del articulo está aceptada
        const solicitudId = await selectSolicitudByArticuloIdCompradorIdModel(
            articuloId,
            compradorId
        );

        if (!solicitudId) {
            throw generateErrorUtils(
                404,
                "SOLICITUD_NOT_FOUND",
                "La solicitud no existe"
            );
        }

        const solicitudCompraId = solicitudId.id;
        const solicitud = await getSolicitudByIdService(solicitudCompraId);
        const estado = solicitud.estado;

        if (estado !== "aceptada") {
            throw generateErrorUtils(
                400,
                "ACCESS_DENIED",
                "La solicitud no está aceptada"
            );
        }

        // Guardar la valoración en la base de datos
        const result = await newValoracionService({
            valoracion,
            comentario,
            compradorId,
            solicitudCompraId,
        });

        // Enviar respuesta
        res.status(200).json({
            status: "ok",
            message: "Valoración registrada con éxito.",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};
