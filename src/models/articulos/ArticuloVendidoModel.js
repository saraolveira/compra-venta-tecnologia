import { getPool } from "../../db/getPool.js";

export const articuloVendidoModel = async (articulo) => {
    const pool = await getPool();

    const [vendido] = await pool.query(
        `UPDATE articulos SET vendido = true WHERE id = ?`,
        [articulo.id]
    );

    return vendido;
};
