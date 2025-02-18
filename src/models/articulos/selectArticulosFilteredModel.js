import { getPool } from "../../db/getPool.js";

export const selectArticulosFilteredModel = async (filtros) => {
    const pool = await getPool();
    console.log(filtros);
    const keys = Object.keys(filtros);
    let query = `SELECT categoria, localidad FROM articulos;`;
    let values = [];

    let wheres = [];
    keys.map((key, id) => {
        values.push(filtros[keys[id]]);
        wheres.push(`${keys[id]} = ?`);
    });

    const where = wheres.join(" AND ");

    query = `SELECT categoria, localidad FROM articulos WHERE ${where};`;

    const [articulos] = await pool.query(query, values);

    return articulos;
};
