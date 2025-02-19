import { getFilteredArticulosService } from "../../services/articulos/getFilteredArticulosService.js";

export const getArticulosFilteredController = async (req, res, next) => {
    try {
        const filtros = req.query.filtros || {};
        const precio = req.query.precio || {};
        const order = req.query.order || {};
        const search = req.query.search || {};

        let articulos = [];

        articulos = await getFilteredArticulosService(
            filtros,
            precio,
            order,
            search
        );

        res.status(200).send({
            status: "success",
            message: "Lista de articulos",
            data: { articulos },
        });
    } catch (error) {
        next(error);
    }
};
