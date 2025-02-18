import { publishArticleService } from "../../services/articulos/publishArticleService.js";

export const publishArticleController = async (req, res, next) => {
    try {

        // id articulo
        const { id } = req.params;

        const { nombre, categoria, localidad, precio, descripcion } = req.body
        const articulo = await publishArticleService(id)

        res.status(200).send({
            status: "ok",
            message: "Articulo publicado",
            data: { articulo },
        });
    }
    catch (error) {
        next(error)
    }
}