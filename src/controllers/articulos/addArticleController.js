import { insertArticleModel } from "../../models/articulos/InsertArticles.js";
export const addArticleController = async (req, res, next) => {
    try {
        const {
            nombre,
            categoria,
            localidad,
            precio,
            descripción,
            vendedorId,
        } = req.body;
        // await validateSchemaUtil(addArticleSchema, req.body);
        const articleId = await insertArticleModel(
            nombre,
            categoria,
            localidad,
            precio,
            descripción,
            vendedorId
        );

        res.status(201).send({
            status: "ok",
            message: "Articulo creado correctamente",
            data: user,
        });
    } catch (error) {
        next;
    }
};
