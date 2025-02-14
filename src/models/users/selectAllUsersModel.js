import { getPool } from "../../db/getPool.js";

export const selectAllusersModel = async () => {
    // Conexión con la base de datos
    const pool = await getPool();

    // Consulta para obtener todos los usuarios
    const [usuarios] = await pool.query(
        "SELECT id, username, nombre, apellidos, email, avatar, rol, createdAt, updatedAt FROM usuarios"
    );

    // Devolver los usuarios
    return usuarios;
};
