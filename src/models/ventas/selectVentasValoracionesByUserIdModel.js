import { getPool } from "../../db/getPool.js";

// Función para obtener el histórico de ventas y valoraciones del vendedor
export const selectVentasValoracionesByUserIdModel = async (idUsuario) => {
    const pool = await getPool();

    const ventasValoraciones = `SELECT a.id AS articuloId, a.nombre, a.vendedorId, a.precio, v.valoracion, v.comentario, a.updatedAt AS fecha
        FROM articulos a
        LEFT JOIN solicitudesCompra s
            ON a.id = s.articuloId
        LEFT JOIN valoraciones v
            ON s.id = v.solicitudCompraId
        WHERE a.vendedorId = ? AND a.vendido = 1 AND s.estado = "aceptada"
        ORDER BY a.createdAt DESC`;

    const [result] = await pool.query(ventasValoraciones, [idUsuario]);

    return result;
};
