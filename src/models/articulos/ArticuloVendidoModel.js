import { getPool } from "../../db/getPool.js";

export const ArticuloVendidoModel = async (articulo) => {
    const pool = await getPool();

    const [vendido] = await pool.query(
        `UPDATE articulos SET vendido = true WHERE id = ?`,
        [articulo.id]
    );

    return vendido;
};
