import { getPool } from "../../db/getPool.js";

export const insertValoracionModel = async (valoracion) => {
    // conectar con la BBDD
    const pool = await getPool();

    const {
        valoracion: puntuacion,
        comentario,
        compradorId,
        solicitudCompraId,
    } = valoracion;

    const [result] = await pool.query(
        `INSERT INTO valoraciones (valoracion, comentario, compradorId, solicitudCompraId) 
        SELECT ?, ?, ?, ?
        FROM solicitudesCompra
        WHERE id = ? AND estado = 'aceptada'`,
        [
            puntuacion,
            comentario,
            compradorId,
            solicitudCompraId,
            solicitudCompraId,
        ]
    );

    return { result };
};
