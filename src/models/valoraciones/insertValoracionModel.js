import { getPool } from "../../db/getPool.js";

export const insertValoracionModel = async (valoracion) => {
    // conectar con la BBDD
    const pool = await getPool();

    const {
        id,
        valoracion: puntuacion,
        comentario,
        compradorId,
        solicitudCompraId,
    } = valoracion;

    const [result] = await pool.query(
        `INSERT INTO valoraciones (id, valoracion, comentario, compradorId, solicitudCompraId) VALUES (?, ?, ?, ?, ?)`,
        [id, puntuacion, comentario, compradorId, solicitudCompraId]
    );

    return { result };
};
