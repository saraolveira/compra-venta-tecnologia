import { getPool } from "../../db/getPool.js";

export const selectValoracionByIdModel = async (articuloId) => {
    // Conectar con la BBDD
    const pool = await getPool();

    const [valoracion] = await pool.query(
        `SELECT V.valoracion, V.comentario FROM valoraciones V
        JOIN solicitudesCompra S
        ON S.id = V.solicitudCompraId
        JOIN articulos A
        ON A.id = S.articuloID
        WHERE A.id = ?;`,
        [articuloId]
    );

    return valoracion[0];
};
