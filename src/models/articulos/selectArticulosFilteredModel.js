import { getPool } from "../../db/getPool.js";

export const selectArticulosFilteredModel = async (filtros, precio) => {
    const pool = await getPool();

    let query = `SELECT categoria, localidad FROM articulos;`;
    let values = [];

    // FILTROS
    const filtrosKeys = Object.keys(filtros);
    let where = "";

    if (filtrosKeys.length > 0) {
        let wheres = [];
        console.log(filtrosKeys);
        filtrosKeys.map((key, id) => {
            values.push(filtros[filtrosKeys[id]]);
            wheres.push(`${filtrosKeys[id]} = ?`);
        });

        where = `${wheres.join(" AND ")}`;
    }

    // PRECIO
    const precioKeys = Object.keys(precio);
    let range = "";

    if (precioKeys.length > 0) {
        let minMax = [];

        const [min] = await pool.query(
            `SELECT MIN(precio) AS minimo FROM articulos`
        );

        const [max] = await pool.query(
            `SELECT MAX(precio) AS maximo FROM articulos`
        );

        const minimo = precio.min || min[0].minimo;
        const maximo = precio.max || max[0].maximo;

        precioKeys.map((key, id) => {
            minMax.push(precio[precioKeys[id]]);
        });

        where !== ""
            ? (range = `AND precio BETWEEN ${minimo} FROM articulos) AND ${maximo}`)
            : (range = `precio BETWEEN ${minimo}  AND ${maximo}`);
    }

    // ORDERBY

    query = `SELECT * FROM articulos WHERE ${where} ${range};`;

    const [articulos] = await pool.query(query, values);

    return articulos;
};
