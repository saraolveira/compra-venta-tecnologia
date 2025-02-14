import { selectPhotosbyArticuloIdModel } from "../../models/photos/selectPhotosByArticuloIdModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getArticuloByIdService = async (id) => {
    const articulo = await selectArticuloByIdModel(id);

    if (!articulo) {
        throw generateErrorUtils(
            404,
            "ARTICULO_NOT_FOUND",
            "Articulo no encontrado"
        );
    }

    const fotos = await selectPhotosbyArticuloIdModel(articulo.id);
    articulo.fotos = fotos;
    return articulo;
};
