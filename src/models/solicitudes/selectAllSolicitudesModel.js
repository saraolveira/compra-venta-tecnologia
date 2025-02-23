import { getPool } from "../../db/getPool.js";

export const selectAllSolicitudesModel = async () => {
    const pool = await getPool();

    const [solicitudesCompra] = await pool.query(
        `SELECT id, estado, compradorId, vendedorId FROM solicitudesCompra`
    );

    return solicitudesCompra;
};
