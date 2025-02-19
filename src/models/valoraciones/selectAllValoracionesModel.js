import { getPool } from "../../db/getPool.js";

export const selectAllValoracionesModel = async () => {
    // Conectar con la BBDD
    const pool = await getPool();

    const [valoraciones] = await pool.query(`SELECT * FROM valoraciones;`);

    return valoraciones;
};
