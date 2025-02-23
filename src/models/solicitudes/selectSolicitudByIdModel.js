import { getPool } from "../../db/getPool.js";

export const selectSolicitudByIdModel = async (id) => {
    const pool = await getPool();

    const [solicitud] = await pool.query(
        `SELECT id, estado FROM solicitudesCompra WHERE id = ?`,
        [id]
    );

    return solicitud[0];
};
