import { getPool } from "../../db/getPool.js";

export const insertArticuloModel = async (
    id,
    vendedorId,
    nombre,
    categoria,
    localidad,
    precio,
    descripcion
) => {
    // Conectamos con la base de datos
    const pool = await getPool();

    // Realizamos la consulta
    const [result] = await pool.query(
        `INSERT INTO articulos (id, vendedorId, nombre, categoria, localidad, precio, descripcion) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [id, vendedorId, nombre, categoria, localidad, precio, descripcion]
    );

    // Devolvemos el resultado
    return result;
};
