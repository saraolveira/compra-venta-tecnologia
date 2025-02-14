import { getPool } from "../../db/getPool.js";

export const selectPhotosByArticuloIdModel = async () => {
    const pool = getPool();
    const [fotos] = await pool.query(
        "SELECT * FROM photos WHERE articuloId = ?",
        [articuloId]
    );
    return fotos;
};
