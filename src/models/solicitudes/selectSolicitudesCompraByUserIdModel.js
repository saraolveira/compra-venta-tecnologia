import { getPool } from "../../db/getPool.js";

// Función para obtener el histórico de solicitudes de compras del comprador
export const selectSolicitudesCompraByUserIdModel = async (idUsuario) => {
    const pool = await getPool();

    const solicitudesCompras = `SELECT s.id AS solicitudId, s.estado, a.id AS articuloId, a.vendedorId, a.nombre AS articulo, a.precio, s.createdAt AS fecha
        FROM solicitudesCompra s
        INNER JOIN articulos a
            ON s.articuloId = a.id
        WHERE s.compradorId = ?
        ORDER BY s.createdAt DESC
    `;

    const [result] = await pool.query(solicitudesCompras, [idUsuario]);

    return result;
};
