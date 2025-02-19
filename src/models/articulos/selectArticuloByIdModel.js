import { getPool } from "../../db/getPool.js";

export const selectArticuloByIdModel = async (id) => {
    const pool = await getPool();

    const [articulo] = await pool.query(
        `SELECT A.id, A.nombre, A.categoria, A.localidad, A.precio, A.descripcion, A.visibilidad, A.vendido, A.createdAt AS fechaCreacion, A.vendedorId, U.username AS vendedor, U.avatar, (SELECT AVG(VV.valoracion) 
        FROM usuarios UU
        JOIN articulos AA
        ON UU.id = AA.vendedorId
        JOIN solicitudesCompra SS
        ON AA.id = SS.articuloId
        JOIN valoraciones VV
        ON SS.id = VV.solicitudCompraId
        WHERE AA.id = ?
        ) AS valoracionMediaVendedor
        FROM articulos A
        JOIN usuarios U
        ON U.id = A.vendedorId
        WHERE A.id = ?;`,
        [id, id]
    );

    return articulo[0];
};
