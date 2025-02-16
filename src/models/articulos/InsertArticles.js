import { getPool } from "../../db/getPool.js";
export const insertArticleModel = async (articles) => {
    const pool = await getPool();
    const [result] = await pool.query(
        `INSERT INTO ENTRIES(id, nombre, categoria, localidad, precio, descripción, vendedorId ) VALUES (?,?,?,?,?,?,?,?,)`,
        [entre.id, id, entry.nombre, entry.categoria, entry.localidad, entry.precio, entry.descripción, entry.vendedorId]
    );
    return result;
};