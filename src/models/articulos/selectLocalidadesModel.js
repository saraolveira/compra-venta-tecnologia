import { getPool } from "../../db/getPool.js";

export const selectLocalidadesModel = async () => {
    // Conexión con la base de datos
    const pool = await getPool();

    // Consulta para obtener todos las localidades
    const [localidades] = await pool.query(
        `SELECT DISTINCT localidad FROM articulos`
    );

    // Devolver las localidades
    return localidades;
};
