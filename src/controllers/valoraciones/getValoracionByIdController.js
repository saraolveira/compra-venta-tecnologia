import { getValoracionByIdService } from "../../services/valoraciones/getValoraciónByIdService.js";

export const getValoracionByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const valoracion = await getValoracionByIdService(id);

        res.status(200).json({
            status: "ok",
            data: valoracion,
        });
    } catch (error) {
        next(error);
    }
};
