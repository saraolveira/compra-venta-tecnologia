import { getPool } from "../../db/getPool.js";

export const selectAllSolicitudesModel = async () => {
  const pool = await getPool();

  const [solicitudes] = await pool.query();

  return solicitudes;
};
