import { generateErrorUtils } from "../utils/helpersUtils.js";

export const isOwnerMiddleware = async (req, res, next) => {
    try {
        // Obtenemos el id del usuario loggeado
        const loggedUserId = req.usuario.id;

        // Obtenemos el id del creador der articulo
        const articleOwnerId = req.articulo.vendedorId;

        // Si son ids distintos, lanzamos error
        if (loggedUserId !== articleOwnerId) {
            throw generateErrorUtils(
                403,
                "FORBIDDEN",
                "No tienes permiso para editar este artículo"
            );
        }

        // Continuar
        next();
    } catch (error) {
        next(error);
    }
};
