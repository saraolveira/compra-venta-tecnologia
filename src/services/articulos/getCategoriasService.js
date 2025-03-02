import { selectCategoriasModel } from "../../models/articulos/selectCategoriasModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getCategoriasService = async () => {
    const categorias = await selectCategoriasModel();

    if (!categorias.length) {
        // si users.length es 0
        throw generateErrorUtils(
            404,
            "NO_CATEGORIES_FOUND",
            "No se han encontrado categorias"
        );
    }

    return categorias;
};
