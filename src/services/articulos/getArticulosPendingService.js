import { selectArticulosPendingModel } from "../../models/articulos/selectArticulosPendingModel.js";
import { selectPhotosByArticuloIdModel } from "../../models/photos/selectPhotosByArticuloIdModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getArticulosPendingService = async () => {
    const articulos = await selectArticulosPendingModel();

    for (const articulo of articulos) {
        const fotos = await selectPhotosByArticuloIdModel(articulo.id);
        articulo.fotos = fotos;
    }

    if (!articulos) {
        throw generateErrorUtils(
            404,
            "NO_ARTICULOS_FOUND",
            "No se han encontrado articulos"
        );
    }
    return articulos;
};
