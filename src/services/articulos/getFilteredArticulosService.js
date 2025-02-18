import { selectArticulosFilteredModel } from "../../models/articulos/selectArticulosFilteredModel.js";
import { selectPhotosByArticuloIdModel } from "../../models/photos/selectPhotosByArticuloIdModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getFilteredArticulosService = async (filtros, precio) => {
    const articulos = await selectArticulosFilteredModel(filtros, precio);

    for (const articulo of articulos) {
        const fotos = await selectPhotosByArticuloIdModel(articulo.id);
        articulo.fotos = fotos;
    }

    if (!articulos) {
        throw generateErrorUtils(
            404,
            "NO_ARTICULOS_FOUND",
            "No se han encontrado los articulos con los filtros proporcionados"
        );
    }
    return articulos;
};
