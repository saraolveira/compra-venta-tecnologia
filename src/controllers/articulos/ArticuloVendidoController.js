import { ArticuloVendidoService } from "../../services/articulos/ArticuloVendidoService.js";
import { getArticuloByIdService } from "../../services/articulos/getArticuloByIdService.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const ArticuloVendidoController = async (req, res, next) => {
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

        const articulo = await ArticuloVendidoService({
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
