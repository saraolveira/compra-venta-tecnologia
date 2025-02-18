import { articuloVendidoModel } from "../../models/articulos/articuloVendidoModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const articuloVendidoService = async (id) => {
    const result = await articuloVendidoModel(id);

    if (result.affectedRows !== 1) {
        throw generateErrorUtils(
            404,
            "ARTICULO_NOT_UPDATED",
            "Articulo no actualizado"
        );
    }

    return id;
};
