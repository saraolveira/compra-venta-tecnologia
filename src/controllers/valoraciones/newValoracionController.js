import { newValoracionService } from "../../services/valoraciones/newValoracionService.js";

export const newValoracionController = async (req, res, next) => {
    try {
        // Extraer datos del request
        const { valoracion, comentario, solicitudCompraId } = req.body;
        const compradorId = req.usuario.id;

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
