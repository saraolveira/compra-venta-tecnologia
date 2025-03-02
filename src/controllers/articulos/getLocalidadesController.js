import { getLocalidadesService } from "../../services/articulos/getLocalidadesService.js";

export const getLocalidadesController = async (req, res, next) => {
    try {
        const localidades = await getLocalidadesService();
        res.status(200).send({
            status: "success",
            message: "Lista de usuarios",
            data: { localidades },
        });
    } catch (error) {
        next(error);
    }
};
