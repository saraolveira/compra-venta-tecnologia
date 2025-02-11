import { getPool } from "../../db/getPool.js";

export const selectPhotosbyArticuloIdModel = async () => {
  const pool = getPool();
  const [photos] = await pool.query(
    "SELECT * FROM photos WHERE articuloId = ?",
    [articuloId]
  );
  return photos;
};
