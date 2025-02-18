import crypto from "crypto";
import { insertSolicitudModel } from "../../models/solicitudes/insertSolicitudModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";
import { sendEmailBrevoUtil } from "../../utils/sendEmailBrevoUtils.js";

export const newSolicitudCompraService = async (
    comprador,
    articulo,
    vendedor
) => {
    // Crear la id para la solicitud
    const id = crypto.randomUUID();
    const compradorId = comprador.id;
    const articuloId = articulo.id;

    // Insertar la solicitud en la base de datos
    const result = await insertSolicitudModel({ id, compradorId, articuloId });

    if (result.affectedRows !== 1) {
        throw generateErrorUtils(
            500,
            "SOLICITUD_NOT_MADE",
            "No se ha podido realizar la solicitud de compra"
        );
    }

    // Enviar el email
    // Destinatario
    const email = vendedor.email;
    // Asunto email
    const emailSubject = `Solicitud de compra para tu artículo ${articulo.nombre}`;
    // Cuerpo del email
    const emailText = `
        <h2>¡Hola, ${vendedor.username}!</h2>
        <p>${comprador.username} ha hecho una solicitud de compra para tu artículo ${articulo.nombre} por ${articulo.precio}€</p>
        <p>Puedes aceptar o rechazar la solictud aquí:</p>
        <p><a href="http://localhost:5173/">Acepta/Rechaza la solicitud</a></p>
        <p>¡No esperes más!</p>
        <p>El equipo de Tech2Go</p>
        `;
    // Llamar al servicio que envía el email
    await sendEmailBrevoUtil(email, emailSubject, emailText);

    // Devolver la solicitud
    return { id, compradorId, articuloId };
};
