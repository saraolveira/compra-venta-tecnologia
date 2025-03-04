import { getSolicitudesByVendedorIdService } from "../../services/solicitudes/getSolicitudesByVendedorIdService.js";

export const getSolicitudesByVendedorIdController = async (req, res, next) => {
    try {
        const { id } = req.usuario;

        const solicitudes = await getSolicitudesByVendedorIdService(id);

        res.status(200).send({
            status: "success",
            message: "Solicitudes de compra obtenidas con éxito",
            data: { solicitudes },
        });
    } catch (error) {
        next(error);
    }
};
