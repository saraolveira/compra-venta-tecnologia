import { selectArticulosByCategoryModel } from "../../models/articulos/selectArticulosByCategoryModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getArticulosByCategoryService = async (category) => {
    const articulos = selectArticulosByCategoryModel(category);

    if (!articulos) {
        throw generateErrorUtils(
            404,
            "NO_ARTICULOS_FOUND",
            `No se han encontrado articulos en la categoria ${category}`
        );
    }
    return articulos;
};
