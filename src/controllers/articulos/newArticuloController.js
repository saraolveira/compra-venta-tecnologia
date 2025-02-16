import { newArticuloService } from "../../services/articulos/newArticuloservice.js";

export const newArticuloController = async (req, res, next) => {
    try {
        const vendedor = req.usuario;
        const vendedorId = vendedor.id;
        const { nombre, categoria, localidad, precio, descripcion } = req.body;
        const articulo = await newArticuloService(
            vendedorId,
            categoria,
            nombre,
            localidad,
            precio,
            descripcion
        );
        res.status(201).send({
            status: "ok",
            message: "Articulo creado con éxito",
            data: { articulo },
        });
    } catch (error) {
        next(error);
    }
};
