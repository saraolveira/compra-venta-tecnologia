import { getPool } from "../../db/getPool.js";

export const selectAllPhotosModel = async () => {
    const pool = await getPool();

    const [fotos] = await pool.query(`SELECT * FROM fotos`);

    return fotos;
};
