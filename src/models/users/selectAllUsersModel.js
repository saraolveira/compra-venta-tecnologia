import { getPool } from "../../db/getPool.js";

export const selectAllUsersModel = async () => {
    const pool = await getPool();

    const [usuarios] = await pool.query(`SELECT * FROM usuarios`);

    return usuarios;
};
