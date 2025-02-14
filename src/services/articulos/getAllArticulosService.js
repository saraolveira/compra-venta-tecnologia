import { selectAllArticulosModel } from "../../models/articulos/selectAllArticulosModel.js";
import { selectPhotosByArticuloIdModel } from "../../models/photos/selectPhotosByArticuloIdModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getAllArticulosService = async () => {
    const articulos = await selectAllArticulosModel();

    for (const articulo of articulos) {
        const fotos = await selectPhotosByArticuloIdModel(articulo.id);
        articulo.fotos = fotos;
    }

    if (!articulos) {
        throw generateErrorUtils(
            404,
            "NO_ARTICULOS_FOUND",
            "No se han encontrado los articulos"
        );
    }
    return articulos;
};
