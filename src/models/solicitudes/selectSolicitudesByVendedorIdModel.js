import { getPool } from "../../db/getPool.js";

export const selectSolicitudesByVendedorIdModel = async (id) => {
    const pool = await getPool();

    const [solicitudes] = await pool.query(
        `SELECT S.id AS solicitudId, S.estado, U.username, A.nombre AS articulo, A.id AS articuloId, A.vendedorId, A.precio, S.compradorId, S.createdAt AS fecha
            FROM solicitudesCompra S
            JOIN articulos A
            ON A.id = S.articuloId
            JOIN usuarios U
            ON U.id = S.compradorId
            WHERE A.vendedorId = ?`,
        [id]
    );

    return solicitudes;
};
