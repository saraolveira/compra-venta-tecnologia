import { getArticuloByIdService } from "../../services/articulos/getArticuloByIdService.js";

export const getArticuloByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const articulo = await getArticuloByIdService(id);

        res.status(200).send({
            status: "success",
            message: "Articulo encontrado",
            data: { articulo },
        });
    } catch (error) {
        next(error);
    }
};
