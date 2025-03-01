import { getPool } from "../../db/getPool.js";

export const selectAllSolicitudesModel = async () => {
    const pool = await getPool();

    const [solicitudesCompra] = await pool.query(
        `SELECT s.id AS solicitudId, s.estado, a.nombre AS articulo, a.id AS articuloId, a.vendedorId, a.precio, s.createdAt AS fecha
        FROM solicitudesCompra s
        INNER JOIN articulos a
            ON s.articuloId = a.id
        ORDER BY s.createdAt DESC
    `
    );

    return solicitudesCompra;
};
