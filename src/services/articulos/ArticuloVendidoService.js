import { articuloVendidoModel } from "../../models/articulos/ArticuloVendidoModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const articuloVendidoService = async (vendido) => {
    const result = await articuloVendidoModel(vendido);

    if (result.affectedRows !== 1) {
        throw generateErrorUtils(
            404,
            "ARTICULO_NOT_UPDATED",
            "Articulo no actualizado"
        );
    }

    return vendido;
};
