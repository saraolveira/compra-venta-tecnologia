import { getPool } from "../../db/getPool.js";

export const selectValoracionByIdModel = async (valoracionId) => {
    // Conectar con la BBDD
    const pool = await getPool();

    const [valoracion] = await pool.query(
        `SELECT valoracion, comentario FROM valoraciones WHERE id = ?;`,
        [valoracionId]
    );

    return valoracion[0];
};
