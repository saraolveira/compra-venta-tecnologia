import { getPool } from "../../db/getPool.js";

export const getValoracionByIdModel = async (valoracionId) => {
    // Conectar con la BBDD
    const pool = await getPool();

    const [valoracion] = await pool.query(
        `SELECT * FROM valoraciones WHERE id = ?;`,
        [valoracionId]
    );

    return valoracion[0];
};
