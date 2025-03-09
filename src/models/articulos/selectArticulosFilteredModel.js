import { getPool } from "../../db/getPool.js";

export const selectArticulosFilteredModel = async (
    filtros,
    precio,
    order,
    limit,
    search
) => {
    const pool = await getPool();

    let query = `SELECT * FROM articulos;`;
    let values = [];

    // FILTROS
    const filtrosKeys = Object.keys(filtros);
    let where = "";

    if (filtrosKeys.length > 0) {
        let wheres = [];
        filtrosKeys.map((key, id) => {
            values.push(filtros[filtrosKeys[id]]);
            wheres.push(`${filtrosKeys[id]} = ?`);
        });

        where = `AND ${wheres.join(" AND ")}`;
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

        range = `AND A.precio BETWEEN ${minimo} AND ${maximo}`;
    }

    // ORDER BY
    let sort = "";
    if (order.by) {
        sort = `ORDER BY ${order.by} ${order.direction || ""}`;
    }

    // LIMIT
    let limite = "";
    if (limit.length) {
        limite = `LIMIT ${limit}`;
    }

    // SEARCH
    let searchLike = "";
    if (search.length) {
        searchLike = `AND A.nombre LIKE '%${search}%'`;
    }

    // QUERY COMPLETA
    query = `SELECT A.id, A.nombre, A.categoria, A.localidad, A.precio, A.visibilidad, A.vendido, A.vendedorId, A.createdAt AS fechaCreacion, (SELECT AVG(VV.valoracion) 
        FROM usuarios UU
        JOIN articulos AA
        ON UU.id = AA.vendedorId
        JOIN solicitudesCompra SS
        ON AA.id = SS.articuloId
        JOIN valoraciones VV
        ON SS.id = VV.solicitudCompraId
        WHERE U.id = UU.id
        ) AS valoracionMediaVendedor
        FROM articulos A
        JOIN usuarios U
        ON U.id = A.vendedorId 
        WHERE visibilidad = TRUE 
        ${where} ${range} ${searchLike}  
        ${sort} ${limite};`;

    const [articulos] = await pool.query(query, values);

    return articulos;
};
