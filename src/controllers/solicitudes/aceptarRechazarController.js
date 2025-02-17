import { aceptarRechazarService } from "../../services/solicitudes/aceptarRechazarService.js";
import { getSolicitudByIdService } from "../../services/solicitudes/getSolicitudByIdService.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const aceptarRechazarController = async (req, res, next) => {
    try {
        // req.user.id tendremos el usuario de la peticiqon (usuario del token)
        const idVendedor = req.usuario.id;
        const id_art = req.articulo.id;
        const { id_sol } = req.params;
        const { estado } = req.body;

        console.log(vendedorId);
        console.log(id_art);
        console.log(id_sol);
        console.log(estado);

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
                "No existe la Solicitud"
            );
        }

        // actualizar la solicitud (action)

        const solicitudActualizada = await aceptarRechazarService({
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
