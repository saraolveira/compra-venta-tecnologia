import { getPool } from "../../db/getPool.js";

// Función para obtener el histórico de ventas y valoraciones del vendedor
export const historicoVentasValoraciones = async (idUsuario) => {
    const pool = await getPool();

    const ventasValoraciones = `SELECT a.id AS articuloId, a.nombre, a.precio, s.estado, v.valoracion, v.comentario
        FROM articulos a
        LEFT JOIN valoraciones v
            ON a.id = v.solicitudCompraId
        LEFT JOIN solicitudesCompra s
            ON a.id = s.articuloId
        WHERE a.vendedorId = ?
        ORDER BY a.createdAt DESC`;

    const [result] = await pool.query(ventasValoraciones, [idUsuario]);

    return result[0];
};
