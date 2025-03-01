import { getPool } from "../../db/getPool.js";

export const updateAceptarRechazarSolicitudModel = async (solicitud) => {
    const pool = await getPool();

    const [result] = await pool.query(
        `UPDATE solicitudesCompra SET estado = ? WHERE id = ?;`,
        [solicitud.estado, solicitud.id]
    );

    return result;
};
