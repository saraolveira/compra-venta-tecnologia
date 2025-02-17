import { newArticuloFotosService } from "../../services/articulos/newArticuloFotosService.js";
import { newArticuloService } from "../../services/articulos/newArticuloservice.js";

export const newArticuloController = async (req, res, next) => {
    try {
        const vendedor = req.usuario;
        const vendedorId = vendedor.id;
        const { nombre, categoria, localidad, precio, descripcion } = req.body;

        let fotos = [];
        if (req.files) {
            fotos = Object.values(req.files);
        }

        if (fotos.length > 3) {
            throw generateErrorUtils(
                400,
                "PHOTOS_LIMIT",
                "No puedes subir más de 3 fotos"
            );
        }

        const articulo = await newArticuloService(
            vendedorId,
            categoria,
            nombre,
            localidad,
            precio,
            descripcion
        );

        let fotosResult = [];
        if (fotos.length > 0) {
            fotosResult = await newArticuloFotosService(
                vendedorId,
                articulo.id,
                fotos
            );
            if (fotosResult.affectedRows === 0) {
                throw generateErrorUtils(
                    500,
                    "PHOTOS_NOT_CREATED",
                    "No se han podido crear las fotos"
                );
            }
        }

        res.status(201).send({
            status: "ok",
            message: "Articulo creado con éxito",
            data: {
                articulo: {
                    ...articulo,
                    fotos: fotosResult,
                },
            },
        });
    } catch (error) {
        next(error);
    }
};
