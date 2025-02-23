import { getSolicitudesCompraByArticuloIdService } from "../../services/solicitudes/getSolicitudesCompraByArticuloIdService.js";

export const getSolicitudesCompraByArticuloIdController = async (
    req,
    res,
    next
) => {
    try {
        const { id } = req.articulo;

        const solicitudes = await getSolicitudesCompraByArticuloIdService(id);

        res.status(200).send({
            status: "success",
            message: "Histórico de solicitudes de compra obtenido con éxito",
            data: { solicitudes },
        });
    } catch (error) {
        next(error);
    }
};
