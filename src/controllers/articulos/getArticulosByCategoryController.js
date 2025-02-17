import { getArticulosByCategoryService } from "../../services/articulos/getArticulosByCategoryService.js";

export const getArticulosByCategoryController = async (req, res, next) => {
    try {
        // Obtenemos la categoria de los params
        const { category } = req.params;

        // Llamamos al servicio
        const articulos = await getArticulosByCategoryService(category);

        res.status(200).send({
            status: "success",
            message: `Articulos filtrados por la categoria ${category}`,
            data: { articulos },
        });
    } catch (error) {
        next(error);
    }
};
