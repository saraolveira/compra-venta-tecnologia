/* import { getPool } from "../../db/getPool.js";

export const ArticuloVendidoModel = async (id) => {
    const pool = await getPool();

    const [vendido] = (vendido = await pool.query(
        `UPDATE articulos SET vendido = 1 WHERE id = ?`,
        [articulo.id]
    ));

    return vendido;
};
 */
