import { updatePublishArticuloModel } from "../../models/articulos/updatePublishArticuloModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const publishArticleService = async (articuloId) => {
    const result = await updatePublishArticuloModel(articuloId);

    if (result.affectedRows !== 1) {
        throw generateErrorUtils(
            500,
            "SOLICITUD_NOT_MADE",
            "No se ha podido publicar el  articulo"
        );
    }
    return articuloId;
};
