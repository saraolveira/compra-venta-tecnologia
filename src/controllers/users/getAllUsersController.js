import { getAllUsersService } from "../../services/users/getAllUsersService.js";

// para obtener todos los usuarios de la base de datos y dar el ok
export const getAllUsersController = async (req, res, next) => {
    try {
        const usuarios = await getAllUsersService();

        res.status(200).send({
            status: "Ok",
            message: "Lista de usuarios",
            data: { usuarios },
        });
    } catch (error) {
        next(error);
    }
};
