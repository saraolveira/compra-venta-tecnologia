import { editArticuloVendidoService } from "../../services/articulos/editArticuloVendidoService.js";

export const editArticuloVendidoController = async (req, res, next) => {
    try {
        const { id } = req.articulo;

        const articulo = await editArticuloVendidoService(id);

        res.status(200).send({
            status: "success",
            message: "Articulo marcado como vendido",
            data: { articulo },
        });
    } catch (error) {
        next(error);
    }
};
