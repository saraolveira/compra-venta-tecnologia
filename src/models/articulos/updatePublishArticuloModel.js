import { getPool } from "../../db/getPool.js";

export const updatePublishArticuloModel = async (id) => {
    // Conectamos con la base de datos
    const pool = await getPool();

    const [result] = await pool.query(
        `UPDATE articulos SET visibilidad = 1 WHERE id = ?`,
        [id]
    );

    return result;
};
