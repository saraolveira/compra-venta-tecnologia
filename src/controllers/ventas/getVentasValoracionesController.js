import { getVentasValoracionesService } from "../../services/ventas/getVentasValoracionesService.js";

export const getVentasValoracionesController = async (req, res, next) => {
    try {
        const { idUsuario } = req.params;
        const ventasValoraciones =
            await getVentasValoracionesService(idUsuario);
        res.status(200).send({
            status: "success",
            message: "Histórico de ventas y valoraciones obtenido con éxito",
            data: ventasValoraciones,
        });
    } catch (error) {
        next(error);
    }
};
