import { ArticuloVendidoModel } from "../../models/articulos/ArticuloVendidoModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const ArticuloVendidoService = async (vendido) => {
    const result = await ArticuloVendidoModel(vendido);

    if (result.affectedRows !== 1) {
        throw generateErrorUtils(
            404,
            "ARTICULO_NOT_UPDATED",
            "Articulo no actualizado"
        );
    }

    return vendido;
};
