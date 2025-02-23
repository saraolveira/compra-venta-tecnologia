import { getPool } from "../../db/getPool.js";

export const selectSolicitudByArticuloIdCompradorIdModel = async (
    articuloId,
    compradorId
) => {
    // Conectar con la BBDD
    const pool = await getPool();

    const [solicitud] = await pool.query(
        `SELECT id, estado FROM solicitudesCompra WHERE articuloId = ? AND compradorId = ?;`,
        [articuloId, compradorId]
    );

    return solicitud[0];
};
