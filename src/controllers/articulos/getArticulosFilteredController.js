import { getAllArticulosService } from "../../services/articulos/getAllArticulosService.js";
import { getFilteredArticulosService } from "../../services/articulos/getFilteredArticulosService.js";

export const getArticulosFilteredController = async (req, res, next) => {
    try {
        const filtros = req.query.filtros || {};
        const precio = req.query.precio || {};

        let articulos = [];

        if (
            Object.keys(filtros).length === 0 &&
            Object.keys(precio).length === 0
        ) {
            articulos = await getAllArticulosService();
        } else {
            articulos = await getFilteredArticulosService(filtros, precio);
        }

        res.status(200).send({
            status: "success",
            message: "Lista de articulos",
            data: { articulos },
        });
    } catch (error) {
        next(error);
    }
};
