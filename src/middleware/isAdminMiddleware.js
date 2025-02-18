import { generateErrorUtils } from "../utils/helpersUtils.js";

export const checkAdminRol = async (req, res, next) => {
    try {

        if (req.usuario.rol !== 'admin') {
            throw generateErrorUtils(
                401,
                'USER-NOT_AUTHORIZED',
                'El usuario no está autorizado'
            );
        }
        next();
    } catch (error) {
        next(error);
    }
};