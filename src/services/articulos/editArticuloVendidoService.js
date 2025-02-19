import { updateArticuloVendidoModel } from "../../models/articulos/updateArticuloVendidoModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const editArticuloVendidoService = async (id) => {
    const result = await updateArticuloVendidoModel(id);

    if (result.affectedRows !== 1) {
        throw generateErrorUtils(
            404,
            "ARTICULO_NOT_UPDATED",
            "Articulo no actualizado"
        );
    }

    return id;
};
