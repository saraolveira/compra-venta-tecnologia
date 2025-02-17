import { getPool } from "../../db/getPool.js";

export const updateArticuloModel = async (id, info) => {
    // Conectamos con la base de datos
    const pool = await getPool();

    // Realizamos la consulta
    const [result] = await pool.query(
        `UPDATE articulos SET nombre = ?, categoria = ?, localidad = ?, precio = ?, descripcion = ? WHERE id = ?`,
        [
            info.nombre,
            info.categoria,
            info.localidad,
            info.precio,
            info.descripcion,
            id,
        ]
    );

    // Devolvemos el resultado
    return result;
};
