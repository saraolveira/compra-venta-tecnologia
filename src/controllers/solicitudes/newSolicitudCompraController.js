import { selectUserByIdModel } from "../../models/users/selectUserByIdModel.js";
import { newSolicitudCompraService } from "../../services/solicitudes/newSolicitudCompraService.js";

export const newSolicitudCompraController = async (req, res, next) => {
    try {
        // Obtenemos el usuario comprador
        const compradorId = req.usuario;
        const comprador = await selectUserByIdModel(compradorId.id);
        delete comprador.password;
        // Obtenemos el artículo
        const articulo = req.articulo;
        // Obtenemos el usuario vendedor
        const vendedor = await selectUserByIdModel(articulo.vendedorId);
        delete vendedor.password;

        const solicitud = await newSolicitudCompraService(
            comprador,
            articulo,
            vendedor
        );

        res.status(201).send({
            status: "ok",
            message: "Solicitud de compra realizada con exito",
            data: { solicitud },
        });
    } catch (error) {
        next(error);
    }
};
