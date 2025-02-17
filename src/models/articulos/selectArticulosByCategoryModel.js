import { getPool } from "../../db/getPool.js";

export const selectArticulosByCategoryModel = async (category) => {
    // Conectamos con la base de datos
    const pool = await getPool();

    // Realizamos la consulta
    const [result] = await pool.query(
        `SELECT * FROM articulos WHERE categoria = ?`,
        [category]
    );

    // Devolvemos el resultado
    return result;
};
