import { getPool } from "../../db/getPool.js";

export const selectSolicitudByIdModel = async (id) => {
    const pool = await getPool();

    const [solicitud] = await pool.query(
        `SELECT S.id, S.estado, U.username 
        FROM solicitudesCompra S
        JOIN usuarios U
        ON U.id = S.compradorId
        WHERE S.id = ?`,
        [id]
    );

    return solicitud[0];
};
