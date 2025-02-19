import { getPool } from "../../db/getPool.js";

// Función para obtener el histórico de solicitudes de compras del comprador
export const selectSolicitudesCompraByUserIdModel = async (idUsuario) => {
    const pool = await getPool();

    const solicitudesCompras = `SELECT a.id AS solicitudId, s.estado, a.nombre AS articulo, a.precio
        FROM solicitudesCompra s
        INNER JOIN articulos a
            ON s.articuloId = a.id
        WHERE s.compradorId = ?
        ORDER BY s.createdAt DESC
    `;

    const [result] = await pool.query(solicitudesCompras, [idUsuario]);

    return result;
};
