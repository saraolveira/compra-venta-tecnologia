import { getPool } from "../../db/getPool.js";

export const insertSolicitudModel = async (solicitud) => {
    // Conectamos con la base de datos
    const pool = await getPool();

    // Realizamos la consulta
    const [result] = await pool.query(
        `INSERT INTO solicitudesCompra (id, compradorId, articuloId) VALUES (?, ?, ?)`,
        [solicitud.id, solicitud.compradorId, solicitud.articuloId]
    );

    // Devolvemos el resultado
    return result;
};
