import { getPool } from "../../db/getPool.js";

export const selectUserByIdModel = async (id) => {
    // Conectar con la base de datos
    const pool = await getPool();

    const [usuarios] = await pool.query(
        `SELECT id, username, nombre, apellidos, email, password, avatar, rol, createdAt, updatedAt FROM usuarios WHERE id = ?`,
        [id]
    );

    return usuarios[0];
};
