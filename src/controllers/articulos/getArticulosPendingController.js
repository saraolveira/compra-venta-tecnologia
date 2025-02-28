import { getArticulosPendingService } from "../../services/articulos/getArticulosPendingService.js";

export const getArticulosPendingController = async (req, res, next) => {
    try {
        let articulos = [];

        articulos = await getArticulosPendingService();

        res.status(200).send({
            status: "success",
            message: "Lista de articulos",
            data: { articulos },
        });
    } catch (error) {
        next(error);
    }
};
