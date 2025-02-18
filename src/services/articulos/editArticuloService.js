import { selectArticuloByIdModel } from "../../models/articulos/selectArticuloByIdModel.js";
import { updateArticuloModel } from "../../models/articulos/updateArticuloModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const editArticuloService = async (id, newInfo) => {
    // Creamos un objeto con la info limpia para evitar undefineds
    const cleanInfo = {
        nombre: newInfo.nombre ?? null,
        categoria: newInfo.categoria ?? null,
        localidad: newInfo.localidad ?? null,
        precio: newInfo.precio ?? null,
        descripcion: newInfo.descripcion ?? null,
    };

    // Actualizamos los datos
    const result = await updateArticuloModel(id, cleanInfo);

    if (result.affectedRows === 0) {
        throw generateErrorUtils(
            500,
            "ARTICLE_NOT_UPDATED",
            "El artículo no se ha actualizado"
        );
    }

    // Devolvemos datos actualizados
    return { id, ...cleanInfo };
};
