import { selectAllUsersModel } from "../../models/users/selectAllUsersModel.js";

import { generateErrorUtils } from "../../utils/helpersUtils.js";
export const getAllUsersService = async () => {
    const usuarios = await selectAllUsersModel();

    if (!usuarios) {
        throw generateErrorUtils(
            404,
            "NO_USERS_FOUND",
            "No se han encontrado los usuarios"
        );
    }
    return usuarios;
};
