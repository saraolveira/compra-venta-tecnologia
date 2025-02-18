import { articuloVendidoService } from "../../services/articulos/articuloVendidoService.js";

export const articuloVendidoController = async (req, res, next) => {
    try {
        const { id } = req.articulo;

        const articulo = await articuloVendidoService(id);

        res.status(200).send({
            status: "success",
            message: "Articulo marcado como vendido",
            data: { articulo },
        });
    } catch (error) {
        next(error);
    }
};
