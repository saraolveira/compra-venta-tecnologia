USE compraventa;

SELECT A.id, A.nombre, A.categoria, A.localidad, A.precio, A.descripcion, A.visibilidad, A.vendido, A.createdAt AS fechaCreacion, A.vendedorId, U.username AS vendedor 
FROM articulos A
JOIN usuarios U
ON U.id = A.vendedorId
JOIN solicitudesCompra S
ON A.id = S.articuloId
JOIN valoraciones V
ON S.id = V.solicitudCompraId;
-- WHERE A.id = "96cbc4e4-eecd-11ef-8267-21cfadf3bbd0" ;



SELECT A.id, A.nombre, A.categoria, A.localidad, A.precio, A.descripcion, A.visibilidad, A.vendido, A.createdAt AS fechaCreacion, A.vendedorId, U.username AS vendedor, U.avatar, (SELECT AVG(VV.valoracion) 
FROM usuarios UU
JOIN articulos AA
ON UU.id = AA.vendedorId
JOIN solicitudesCompra SS
ON AA.id = SS.articuloId
JOIN valoraciones VV
ON SS.id = VV.solicitudCompraId
WHERE AA.id = "96cbfeaa-eecd-11ef-8267-21cfadf3bbd0"
) AS valoracionMediaVendedor
FROM articulos A
JOIN usuarios U
ON U.id = A.vendedorId
WHERE A.id = "96cbfeaa-eecd-11ef-8267-21cfadf3bbd0";

SELECT A.id, A.nombre, A.categoria, A.localidad, A.precio, A.descripcion, A.visibilidad, A.vendido, A.createdAt AS fechaCreacion, A.vendedorId, U.username AS vendedor, U.avatar
FROM articulos A
JOIN usuarios U
ON U.id = A.vendedorId
WHERE A.id = "a686c734-d21c-43d2-89ca-12149f691637";

SELECT A.id, A.nombre, A.categoria, A.localidad, A.precio, A.descripcion, A.visibilidad, A.vendido, A.createdAt AS fechaCreacion, A.vendedorId, U.username AS vendedor, U.avatar, (SELECT AVG(VV.valoracion) 
FROM usuarios UU
JOIN articulos AA
ON UU.id = AA.vendedorId
JOIN solicitudesCompra SS
ON AA.id = SS.articuloId
JOIN valoraciones VV
ON SS.id = VV.solicitudCompraId
WHERE AA.id = "a686c734-d21c-43d2-89ca-12149f691637"
) AS valoracionMediaVendedor
FROM articulos A
JOIN usuarios U
ON U.id = A.vendedorId
WHERE A.id = "a686c734-d21c-43d2-89ca-12149f691637";



SELECT A.id, A.nombre, A.categoria, A.localidad, A.precio, A.descripcion, A.visibilidad, A.vendido, A.createdAt AS fechaCreacion, A.vendedorId, U.username AS vendedor, U.avatar, (SELECT AVG(VV.valoracion) 
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
        ON U.id = A.vendedorId;

SELECT U.id, U.username, U.nombre, U.apellidos, U.email, U.avatar, U.rol, U.activado, U.createdAt AS fechaRegistro, AVG(V.valoracion) AS mediaValoracion,
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
JOIN articulos A
ON U.id = A.vendedorId
JOIN solicitudesCompra S
ON A.id = S.articuloId
JOIN valoraciones V
ON S.id = V.solicitudCompraId
GROUP BY U.id;




SELECT U.id, U.username, U.nombre, U.apellidos, U.email, U.avatar, U.rol, U.activado, U.createdAt AS fechaRegistro,
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
FROM usuarios U;