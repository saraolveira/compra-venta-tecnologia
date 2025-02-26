import { getPool } from "../../db/getPool.js";

export const selectCategoriasModel = async () => {
    // Conexión con la base de datos
    const pool = await getPool();

    // Consulta para obtener todos las categorias
    const [categorias] = await pool.query(
        `SELECT DISTINCT categoria FROM articulos`
    );

    // Devolver las categorias
    return categorias;
};
