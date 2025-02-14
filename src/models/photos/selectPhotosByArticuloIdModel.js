import { getPool } from "../../db/getPool.js";

export const selectPhotosByArticuloIdModel = async (articuloId) => {
    const pool = await getPool();
    console.log(articuloId);
    const [fotos] = await pool.query(
        `SELECT * FROM fotos WHERE articuloId = ?`,
        [articuloId]
    );
    return fotos;
};
