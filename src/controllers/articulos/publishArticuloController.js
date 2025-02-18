import { publishArticleService } from "../../services/articulos/publishArticleService.js";

export const publishArticleController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const articulo = await publishArticleService(id);

        res.status(200).send({
            status: "ok",
            message: "Articulo publicado",
            data: { articulo },
        });
    } catch (error) {
        next(error);
    }
};
