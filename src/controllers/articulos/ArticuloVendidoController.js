import { articuloVendidoService } from "../../services/articulos/articuloVendidoService.js";
import { getArticuloByIdService } from "../../services/articulos/getArticuloByIdService.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const articuloVendidoController = async (req, res, next) => {
    try {
        // verificar que es el vendedor con el id o el token

        const oldArticulo = await getArticuloByIdService(req.params.id);
        console.log("oldArticulo", oldArticulo);

        const newArticulo = req.body;
        if (!newArticulo) {
            throw generateErrorUtils(
                400,
                "DATA_MISSING",
                "No se han recibido datos"
            );
        }

        const vendido = newArticulo;

        if (!vendido) {
            throw generateErrorUtils(
                400,
                "MISSING_PARAMETER",
                "Falta el parámetro vendido"
            );
        }

        const articulo = await articuloVendidoService({
            id: oldArticulo.id,
            ...newArticulo,
        });

        res.status(200).send({
            status: "success",
            message: "Articulo vendido",
            data: { articulo },
        });
    } catch (error) {
        next(error);
    }
};
