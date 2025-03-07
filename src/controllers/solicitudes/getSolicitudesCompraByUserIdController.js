import { getSolicitudesCompraByUserIdService } from "../../services/solicitudes/getSolicitudesCompraByUserIdService.js";

export const getSolicitudesCompraByUserIdController = async (
    req,
    res,
    next
) => {
    try {
        const { id } = req.params;
        const solicitudesCompra = await getSolicitudesCompraByUserIdService(id);
        res.status(200).send({
            status: "success",
            message: "Histórico de solicitudes de compra obtenido con éxito",
            data: { solicitudesCompra },
        });
    } catch (error) {
        next(error);
    }
};
