import { getArticulosByUserIdService } from "../../services/articulos/getArticulosByUserIdService.js";

export const getArticulosByUserIdController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const articulos = await getArticulosByUserIdService(id);

        res.status(200).send({
            status: "Ok",
            message: "Articulos encontrados",
            data: { articulos },
        });
    } catch (error) {
        next(error);
    }
};
