import { getPool } from "../../db/getPool.js";

export const selectPhotosByArticuloIdModel = async (articuloId) => {
    const pool = await getPool();
    const [fotos] = await pool.query(
        `SELECT foto FROM fotos WHERE articuloId = ?`,
        [articuloId]
    );
    return fotos;
};
