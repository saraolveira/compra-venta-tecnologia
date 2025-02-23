import { getPool } from "../../db/getPool.js";

export const selectSolicitudesCompraByArticuloIdModel = async (articuloId) => {
    const pool = await getPool();

    const [solicitudes] = await pool.query(
        `SELECT S.id, S.estado, S.compradorId, U.username AS usuarioSolicitud
        FROM solicitudesCompra S
        JOIN articulos A
        ON A.id = S.articuloId
        JOIN usuarios U
        ON U.id = S.compradorId
        WHERE A.id = ?;`,
        [articuloId]
    );

    return solicitudes;
};
