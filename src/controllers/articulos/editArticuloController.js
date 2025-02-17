import { editArticuloService } from "../../services/articulos/editArticuloService.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const editArticuloController = async (req, res, next) => {
    try {
        // Obtenemos el id por la request
        const { id } = req.articulo;

        // Obtenemos los datos actualizados
        const newInfo = req.body;

        // Comprobamos que se está enviando info
        if (!newInfo) {
            throw generateErrorUtils(
                400,
                "INFO_MISSING",
                "No se han enviado datos para actualizar"
            );
        }

        // Comprobamos que se está enviando los datos obligatorios
        if (
            !newInfo.nombre ||
            !newInfo.categoria ||
            !newInfo.localidad ||
            !newInfo.precio ||
            !newInfo.descripcion
        ) {
            throw generateErrorUtils(
                400,
                "INFO_MISSING",
                "Faltan datos para actualizar"
            );
        }

        // Actualizamos los datos
        const articulo = await editArticuloService(id, newInfo);

        res.status(201).send({
            status: "ok",
            message: "Articulo editado con éxito",
            data: { articulo },
        });
    } catch (error) {
        next(error);
    }
};
