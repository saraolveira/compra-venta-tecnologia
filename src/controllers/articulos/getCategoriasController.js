import { getCategoriasService } from "../../services/articulos/getCategoriasService.js";

export const getCategoriasController = async (req, res, next) => {
    try {
        const categorias = await getCategoriasService();
        res.status(200).send({
            status: "success",
            message: "Lista de usuarios",
            data: { categorias },
        });
    } catch (error) {
        next(error);
    }
};
