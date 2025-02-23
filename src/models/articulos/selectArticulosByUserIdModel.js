import { getPool } from "../../db/getPool.js";

export const selectArticulosByUserIdModel = async (userId) => {
    // Conexión con la base de datos
    const pool = await getPool();

    // Consulta para obtener los articulos
    const [articulos] = await pool.query(
        `SELECT A.id, A.nombre, A.categoria, A.localidad, A.precio, A.visibilidad, A.vendido, A.createdAt AS fechaCreacion, (SELECT AVG(VV.valoracion) 
        FROM usuarios UU
        JOIN articulos AA
        ON UU.id = AA.vendedorId
        JOIN solicitudesCompra SS
        ON AA.id = SS.articuloId
        JOIN valoraciones VV
        ON SS.id = VV.solicitudCompraId
        ) AS valoracionMediaVendedor
        FROM articulos A
        JOIN usuarios U
        ON U.id = A.vendedorId 
        WHERE A.vendedorId = ?`,
        [userId]
    );

    // Devolver los articulos
    return articulos;
};
