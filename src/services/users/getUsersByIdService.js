import { selectUserByIdModel } from "../../models/users/selectUserByIdModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

// Obtenemos el usuarios por id, si no existe, devolvemos error
export const getUserByIdService = async (id) => {
    const usuario = await selectUserByIdModel(id);

    if (!usuario) {
        throw generateErrorUtils(
            404,
            "USER_NOT_FOUND",
            "Usuario no encontrado o inactivo"
        );
    }

    return usuario;
};
