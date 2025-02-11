import { getPool } from "../../db/getPool.js";

export const selectAllArticulosModel = async () => {
  const pool = await getPool();

  const [articulos] = await pool.query();

  return articulos;
};
