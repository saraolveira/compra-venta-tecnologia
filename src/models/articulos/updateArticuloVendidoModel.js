import { getPool } from "../../db/getPool.js";

export const updateArticuloVendidoModel = async (id) => {
    const pool = await getPool();

    const [vendido] = await pool.query(
        `UPDATE articulos SET vendido = 1 WHERE id = ?`,
        [id]
    );

    return vendido;
};
