import { getPool } from "../../db/getPool.js";

export const insertPhotoModel = async (id, articuloId, foto) => {
    // Conectamos con la base de datos
    const pool = await getPool();

    // Realizamos la consulta
    const [result] = await pool.query(
        `INSERT INTO fotos (id, foto, articuloId) VALUES (?, ?, ?)`,
        [id, foto, articuloId]
    );

    // Devolvemos el resultado
    return result;
};
