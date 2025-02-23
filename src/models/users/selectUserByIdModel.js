import { getPool } from "../../db/getPool.js";

export const selectUserByIdModel = async (id) => {
    // Conectar con la base de datos
    const pool = await getPool();

    const [usuarios] = await pool.query(
        `SELECT U.id, U.username, U.nombre, U.apellidos, U.email, U.password, U.avatar, U.rol, U.activado, U.createdAt AS fechaRegistro,
        (SELECT AVG(VV.valoracion) 
        FROM usuarios UU
        JOIN articulos AA
        ON UU.id = AA.vendedorId
        JOIN solicitudesCompra SS
        ON AA.id = SS.articuloId
        JOIN valoraciones VV
        ON SS.id = VV.solicitudCompraId
        WHERE U.id = UU.id
        ) AS valoracionMediaVendedor,
        (SELECT COUNT(SS.id) FROM solicitudesCompra SS
        JOIN usuarios UU
        ON UU.id = SS.compradorId
        WHERE UU.id = U.id
        ) AS comprasSolicitadas,
        (SELECT COUNT(SS.id) FROM solicitudesCompra SS
        JOIN usuarios UU
        ON UU.id = SS.compradorId
        WHERE UU.id = U.id AND SS.estado = "aceptada"
        ) AS comprasAceptadas,
        (SELECT COUNT(AA.id) FROM articulos AA
        JOIN usuarios UU
        ON UU.id = AA.vendedorId
        WHERE UU.id = U.id 
        ) AS articulosEnVenta,
        (SELECT COUNT(AA.id) FROM articulos AA
        JOIN usuarios UU
        ON UU.id = AA.vendedorId
        WHERE UU.id = U.id AND AA.vendido = 1
        ) AS articulosVendidos
        FROM usuarios U
        WHERE U.id = ?`,
        [id]
    );

    return usuarios[0];
};
