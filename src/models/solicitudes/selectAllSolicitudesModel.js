import { getPool } from "../../db/getPool.js";

export const selectAllSolicitudesModel = async () => {
    const pool = await getPool();

    const [solicitudesCompra] = await pool.query(
        `SELECT * FROM solicitudesCompra LIMIT 10`
    );

    return solicitudesCompra;
};
