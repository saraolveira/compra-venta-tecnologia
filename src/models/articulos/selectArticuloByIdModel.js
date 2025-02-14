import { getPool } from "../../db/getPool.js";

export const selectArticuloByIdModel = async (id) => {
    const pool = await getPool();

    const [articulo] = await pool.query(
        `SELECT * FROM articulos WHERE id = ?`,
        [id]
    );

    return articulo[0];
};
