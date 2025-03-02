import { selectLocalidadesModel } from "../../models/articulos/selectLocalidadesModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getLocalidadesService = async () => {
    const localidades = await selectLocalidadesModel();

    if (!localidades.length) {
        // si users.length es 0
        throw generateErrorUtils(
            404,
            "NO_LOCATIONS_FOUND",
            "No se han encontrado localidades"
        );
    }

    return localidades;
};
