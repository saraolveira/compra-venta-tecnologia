import { selectArticulosByCategoryModel } from "../../models/articulos/selectArticulosByCategoryModel.js";
import { selectPhotosByArticuloIdModel } from "../../models/photos/selectPhotosByArticuloIdModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getArticulosByCategoryService = async (category) => {
    const articulos = await selectArticulosByCategoryModel(category);
    console.log(articulos);

    for (const articulo of articulos) {
        const fotos = await selectPhotosByArticuloIdModel(articulo.id);
        articulo.fotos = fotos;
    }

    if (!articulos) {
        throw generateErrorUtils(
            404,
            "NO_ARTICULOS_FOUND",
            `No se han encontrado articulos en la categoria ${category}`
        );
    }
    return articulos;
};
