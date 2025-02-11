import { getPool } from "../../db/getPool.js";

export const selectAllUsersModel = async () => {
  const pool = await getPool();

  const [users] = await pool.query();

  return users;
};
