import { getPool } from "../../db/getPool.js";

export const selectPriceRangeModel = async () => {
    // Conexión con la base de datos
    const pool = await getPool();

    // Consulta para obtener todos los precios
    const [prices] = await pool.query(
        `SELECT MAX(precio) AS max, MIN(precio) AS min FROM articulos`
    );

    // Devolver las precios
    return prices;
};
