import { getAllArticulosService } from "../../services/articulos/getAllArticulosService.js";
import { getFilteredArticulosService } from "../../services/articulos/getFilteredArticulosService.js";

export const getArticulosFilteredController = async (req, res, next) => {
    try {
        const filtros = req.query;

        let articulos = [];

        if (Object.keys(filtros)) {
            articulos = await getAllArticulosService();
        } else {
            articulos = await getFilteredArticulosService(filtros);
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
