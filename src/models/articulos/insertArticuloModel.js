import { getPool } from "../../db/getPool.js";

export const insertArticuloModel = async (
    id,
    vendedorId,
    categoria,
    nombre,
    localidad,
    precio,
    descripcion
) => {
    // Conectamos con la base de datos
    const pool = await getPool();

    // Realizamos la consulta
    const [result] = await pool.query(
        `INSERT INTO articulos (id, vendedorId, categoria, nombre, localidad, precio, descripcion) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [id, vendedorId, categoria, nombre, localidad, precio, descripcion]
    );

    // Devolvemos el resultado
    return result;
};
