import { getArticuloByIdService } from "../services/articulos/getArticuloByIdService.js";

export const articleExistsMiddleware = async (req, res, next) => {
    try {
        // Obtenemos el id de los params
        const { id } = req.params;
        const articulo = await getArticuloByIdService(id);

        // Guardar el artículo en req
        req.articulo = articulo;

        // Continuar
        next();
    } catch (error) {
        next(error);
    }
};
