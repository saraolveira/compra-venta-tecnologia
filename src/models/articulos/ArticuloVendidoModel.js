import { getPool } from "../../db/getPool.js";

export const ArticuloVendidoModel = async (id) => {
    try {
        const pool = await getPool();

        const vendido = await pool.query(
            `UPDATE articulos SET vendido = 1 WHERE id = ?`,
            [id]
        );

        return vendido;
    } catch (error) {}
};
