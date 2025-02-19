import { getVentasValoracionesByUserIdService } from "../../services/ventas/getVentasValoracionesByUserIdService.js";

export const getVentasValoracionesByUserIdController = async (
    req,
    res,
    next
) => {
    try {
        const { id } = req.params;
        const ventasValoraciones =
            await getVentasValoracionesByUserIdService(id);
        res.status(200).send({
            status: "success",
            message: "Histórico de ventas y valoraciones obtenido con éxito",
            data: ventasValoraciones,
        });
    } catch (error) {
        next(error);
    }
};
