import { getPool } from "../../db/getPool.js";

export const selectArticulosFilteredModel = async (filtros) => {
    const pool = await getPool();

    const keys = Object.keys(filtros);
    let query = `SELECT categoria, localidad FROM articulos;`;
    let values = [];

    if (keys.length > 1) {
        const wheres = [];
        keys.map((key, id) => {
            values.push(filtros[keys[id]]);
            wheres.push(`${keys[id]} = ?`);
        });
        const where = wheres.join(" AND ");

        query = `SELECT categoria, localidad FROM articulos WHERE ${where};`;
    } else {
        query = `SELECT categoria, localidad FROM articulos WHERE ${keys[0]} = ?;`;
        values.push(filtros[keys[0]]);
    }

    const [articulos] = await pool.query(query, values);

    return articulos;
};
