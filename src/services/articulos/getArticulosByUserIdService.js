import { selectArticulosByUserIdModel } from "../../models/articulos/selectArticulosByUserIdModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getArticulosByUserIdService = async (userId) => {
    const articulos = await selectArticulosByUserIdModel(userId);

    if (!articulos) {
        throw generateErrorUtils(
            404,
            "ARTICULOS_NOT_FOUND",
            "No se han encontrado articulos en venta de este usuario"
        );
    }

    return articulos;
};
