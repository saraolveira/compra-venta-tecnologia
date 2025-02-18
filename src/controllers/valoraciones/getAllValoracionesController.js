import { getAllValoracionesService } from "../../services/valoraciones/getAllValoracionesService.js";

export const getAllValoracionesController = async (req, res, next) => {
    try {
        // Obtener todas las valoraciones desde el servicio
        const valoraciones = await getAllValoracionesService();

        res.status(200).json({
            status: "ok",
            data: valoraciones,
        });
    } catch (error) {
        next(error);
    }
};
