import { getSolicitudesCompraService } from "../../services/ventas/getSolicitudesCompraService.js";

export const getSolicitudesCompraController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const solicitudesCompra = await getSolicitudesCompraService(id);
        res.status(200).send({
            status: "success",
            message: "Histórico de solicitudes de compra obtenido con éxito",
            data: solicitudesCompra,
        });
    } catch (error) {
        next(error);
    }
};
