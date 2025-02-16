-- Active: 1733161011832@@127.0.0.1@3306@compraventa

-- INSERTS PARA LA TABLA usuarios (10 filas)
INSERT INTO usuarios (id, username, nombre, apellidos, email, password, telefono, avatar, biografia, activado, rol) VALUES
('11111111-1111-1111-1111-111111111111', 'beyonce', 'Beyoncé', 'Knowles', 'beyonce@example.com', 'passwordhash', '600000001', 'beyonce.png', 'Queen of Pop and technology.', TRUE, 'user'),
('22222222-2222-2222-2222-222222222222', 'elonmusk', 'Elon', 'Musk', 'elon@example.com', 'passwordhash', '600000002', 'elon.png', 'Innovator and entrepreneur.', TRUE, 'user'),
('33333333-3333-3333-3333-333333333333', 'chucknorris', 'Chuck', 'Norris', 'chuck@example.com', 'passwordhash', '600000003', 'chuck.png', 'Tough and legendary.', TRUE, 'user'),
('44444444-4444-4444-4444-444444444444', 'batman', 'Bruce', 'Wayne', 'batman@example.com', 'passwordhash', '600000004', 'batman.png', 'Dark knight of tech.', TRUE, 'user'),
('55555555-5555-5555-5555-555555555555', 'sheldon', 'Sheldon', 'Cooper', 'sheldon@example.com', 'passwordhash', '600000005', 'sheldon.png', 'Smart but quirky scientist.', TRUE, 'user'),
('66666666-6666-6666-6666-666666666666', 'kris', 'Kris', 'Jenner', 'kris@example.com', 'passwordhash', '600000006', 'kris.png', 'Famous for style and flair.', TRUE, 'user'),
('77777777-7777-7777-7777-777777777777', 'rihanna', 'Rihanna', 'Fenty', 'rihanna@example.com', 'passwordhash', '600000007', 'rihanna.png', 'Queen of innovation and music.', TRUE, 'user'),
('88888888-8888-8888-8888-888888888888', 'snoopdogg', 'Snoop', 'Dogg', 'snoop@example.com', 'passwordhash', '600000008', 'snoop.png', 'Chill and tech savvy.', TRUE, 'user'),
('99999999-9999-9999-9999-999999999999', 'oprah', 'Oprah', 'Winfrey', 'oprah@example.com', 'passwordhash', '600000009', 'oprah.png', 'Inspiring and powerful.', TRUE, 'user'),
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'therock', 'Dwayne', 'Johnson', 'therock@example.com', 'passwordhash', '600000010', 'therock.png', 'Strong and charismatic.', TRUE, 'user');

-- INSERTS PARA LA TABLA articulos (10 filas)
INSERT INTO articulos (id, nombre, categoria, localidad, precio, descripcion, visibilidad, vendido, vendedorId) VALUES
('b0000000-0000-0000-0000-000000000001', 'iPhone 13', 'telefono', 'Madrid', 999.99, 'Latest iPhone 13 with advanced features.', TRUE, FALSE, '22222222-2222-2222-2222-222222222222'),
('b0000000-0000-0000-0000-000000000002', 'Samsung Galaxy S22', 'telefono', 'Barcelona', 899.99, 'Samsung flagship with great camera.', TRUE, FALSE, '33333333-3333-3333-3333-333333333333'),
('b0000000-0000-0000-0000-000000000003', 'MacBook Pro 16', 'ordenador', 'Valencia', 2399.99, 'High-performance MacBook Pro for professionals.', TRUE, FALSE, '44444444-4444-4444-4444-444444444444'),
('b0000000-0000-0000-0000-000000000004', 'Dell XPS 15', 'ordenador', 'Sevilla', 1399.99, 'Powerful and sleek Dell laptop.', TRUE, FALSE, '55555555-5555-5555-5555-555555555555'),
('b0000000-0000-0000-0000-000000000005', 'PlayStation 5', 'consola', 'Bilbao', 499.99, 'Next-gen console with stunning graphics.', TRUE, FALSE, '66666666-6666-6666-6666-666666666666'),
('b0000000-0000-0000-0000-000000000006', 'Xbox Series X', 'consola', 'Zaragoza', 499.99, 'Powerful Xbox with immersive gameplay.', TRUE, FALSE, '77777777-7777-7777-7777-777777777777'),
('b0000000-0000-0000-0000-000000000007', 'Cyberpunk 2077', 'videojuego', 'Madrid', 59.99, 'Futuristic open-world action game.', TRUE, FALSE, '88888888-8888-8888-8888-888888888888'),
('b0000000-0000-0000-0000-000000000008', 'FIFA 22', 'videojuego', 'Barcelona', 49.99, 'Popular soccer video game with realistic graphics.', TRUE, FALSE, '99999999-9999-9999-9999-999999999999'),
('b0000000-0000-0000-0000-000000000009', 'Wireless Headphones', 'accesorios', 'Valencia', 199.99, 'Noise-cancelling headphones with superior sound quality.', TRUE, FALSE, 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'),
('b0000000-0000-0000-0000-000000000010', 'Gaming Mouse', 'accesorios', 'Sevilla', 79.99, 'High precision gaming mouse with customizable buttons.', TRUE, FALSE, '11111111-1111-1111-1111-111111111111');

-- INSERTS PARA LA TABLA fotos (5 filas)
INSERT INTO fotos (id, foto, articuloId) VALUES
('c0000000-0000-0000-0000-000000000001', 'iphone13.jpg', 'b0000000-0000-0000-0000-000000000001'),
('c0000000-0000-0000-0000-000000000002', 'galaxyS22.jpg', 'b0000000-0000-0000-0000-000000000002'),
('c0000000-0000-0000-0000-000000000003', 'macbookpro16.jpg', 'b0000000-0000-0000-0000-000000000003'),
('c0000000-0000-0000-0000-000000000004', 'ps5.jpg', 'b0000000-0000-0000-0000-000000000005'),
('c0000000-0000-0000-0000-000000000005', 'wireless_headphones.jpg', 'b0000000-0000-0000-0000-000000000009');

-- INSERTS PARA LA TABLA solicitudesCompra (3 filas)
INSERT INTO solicitudesCompra (id, estado, compradorId, articuloId) VALUES
('d0000000-0000-0000-0000-000000000001', 'pendiente', '44444444-4444-4444-4444-444444444444', 'b0000000-0000-0000-0000-000000000007'),
('d0000000-0000-0000-0000-000000000002', 'aceptada', '55555555-5555-5555-5555-555555555555', 'b0000000-0000-0000-0000-000000000008'),
('d0000000-0000-0000-0000-000000000003', 'rechazada', '66666666-6666-6666-6666-666666666666', 'b0000000-0000-0000-0000-000000000010');

-- INSERTS PARA LA TABLA valoraciones (2 filas)
INSERT INTO valoraciones (id, valoracion, comentario, compradorId, solicitudCompraId) VALUES
('e0000000-0000-0000-0000-000000000001', 5, 'Excelente producto y servicio.', '44444444-4444-4444-4444-444444444444', 'd0000000-0000-0000-0000-000000000001'),
('e0000000-0000-0000-0000-000000000002', 4, 'Muy satisfecho con la compra.', '55555555-5555-5555-5555-555555555555', 'd0000000-0000-0000-0000-000000000002');





INSERT INTO usuarios (id, username, nombre, apellidos, email, password, telefono, avatar, biografia, activado, rol)
VALUES
('11111111-1111-1111-1111-111111111111', 'juanp', 'Juan', 'Pérez', 'juanp@example.com', '$2b$10$CwTycUXWue0Thq9StjUM0uJ8VAg/GY5ElhXdpzMG0qP6rNzU9Y6U2', '600111111', 'avatar1.png', 'Apasionado del café y la tecnología.', TRUE, 'user'),
('22222222-2222-2222-2222-222222222222', 'marial', 'María', 'López', 'marial@example.com', '$2b$10$CwTycUXWue0Thq9StjUM0uJ8VAg/GY5ElhXdpzMG0qP6rNzU9Y6U2', '600222222', 'avatar2.png', 'Fan de novelas y amante de la innovación.', TRUE, 'user'),
('33333333-3333-3333-3333-333333333333', 'carloss', 'Carlos', 'Sánchez', 'carloss@example.com', '$2b$10$CwTycUXWue0Thq9StjUM0uJ8VAg/GY5ElhXdpzMG0qP6rNzU9Y6U2', '600333333', 'avatar3.png', 'Entusiasta de la fotografía y gadgets.', TRUE, 'user'),
('44444444-4444-4444-4444-444444444444', 'anam', 'Ana', 'Martínez', 'anam@example.com', '$2b$10$CwTycUXWue0Thq9StjUM0uJ8VAg/GY5ElhXdpzMG0qP6rNzU9Y6U2', '600444444', 'avatar4.png', 'Amante de la música y las nuevas tecnologías.', TRUE, 'user'),
('55555555-5555-5555-5555-555555555555', 'sofiag', 'Sofía', 'García', 'sofiag@example.com', '$2b$10$CwTycUXWue0Thq9StjUM0uJ8VAg/GY5ElhXdpzMG0qP6rNzU9Y6U2', '600555555', 'avatar5.png', 'Creadora de contenidos y apasionada por los retos.', TRUE, 'user'),
('66666666-6666-6666-6666-666666666666', 'miguelt', 'Miguel', 'Torres', 'miguelt@example.com', '$2b$10$CwTycUXWue0Thq9StjUM0uJ8VAg/GY5ElhXdpzMG0qP6rNzU9Y6U2', '600666666', 'avatar6.png', 'Desarrollador y amante del código limpio.', TRUE, 'user'),
('77777777-7777-7777-7777-777777777777', 'luciag', 'Lucía', 'Gómez', 'luciag@example.com', '$2b$10$CwTycUXWue0Thq9StjUM0uJ8VAg/GY5ElhXdpzMG0qP6rNzU9Y6U2', '600777777', 'avatar7.png', 'Exploradora de nuevas fronteras digitales.', TRUE, 'user'),
('88888888-8888-8888-8888-888888888888', 'pedror', 'Pedro', 'Ruiz', 'pedror@example.com', '$2b$10$CwTycUXWue0Thq9StjUM0uJ8VAg/GY5ElhXdpzMG0qP6rNzU9Y6U2', '600888888', 'avatar8.png', 'Apasionado de los libros y la innovación tecnológica.', TRUE, 'user'),
('99999999-9999-9999-9999-999999999999', 'fernandods', 'Fernando', 'Del Sol', 'fernandods@example.com', '$2b$10$CwTycUXWue0Thq9StjUM0uJ8VAg/GY5ElhXdpzMG0qP6rNzU9Y6U2', '600999999', 'avatar9.png', 'Soñador y emprendedor en serie.', TRUE, 'user'),
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'elonmusk', 'Elon', 'Musk', 'elonmusk@example.com', '$2b$10$CwTycUXWue0Thq9StjUM0uJ8VAg/GY5ElhXdpzMG0qP6rNzU9Y6U2', '600101010', 'avatar10.png', 'Famoso por innovar y, de paso, por sus tweets peculiares.', TRUE, 'user');

INSERT INTO articulos (id, nombre, categoria, localidad, precio, descripcion, visibilidad, vendedorId) VALUES
('00000000-0000-0000-0000-000000000001', 'iPhone 12 Pro', 'telefono', 'Madrid', 899.99, 'Smartphone iPhone 12 Pro, 128GB, en perfecto estado y con garantía original.', true, '11111111-1111-1111-1111-111111111111'),
('00000000-0000-0000-0000-000000000002', 'Samsung Galaxy S21', 'telefono', 'Barcelona', 749.50, 'Smartphone Samsung Galaxy S21, 128GB, usado ligeramente y en excelentes condiciones.', true, '22222222-2222-2222-2222-222222222222'),
('00000000-0000-0000-0000-000000000003', 'Google Pixel 5', 'telefono', 'Valencia', 599.00, 'Smartphone Google Pixel 5, 128GB, con cámara excepcional y batería de larga duración.', true, '33333333-3333-3333-3333-333333333333'),
('00000000-0000-0000-0000-000000000004', 'Dell XPS 13', 'ordenador', 'Sevilla', 1199.99, 'Portátil Dell XPS 13, ultraligero, 16GB RAM, 512GB SSD, perfecto para profesionales.', true, '44444444-4444-4444-4444-444444444444'),
('00000000-0000-0000-0000-000000000005', 'MacBook Air M1', 'ordenador', 'Bilbao', 999.99, 'MacBook Air con chip M1, 8GB RAM, 256GB SSD, ideal para tareas cotidianas y diseño gráfico.', true, '55555555-5555-5555-5555-555555555555'),
('00000000-0000-0000-0000-000000000006', 'HP Pavilion Gaming', 'ordenador', 'Zaragoza', 849.00, 'Portátil HP Pavilion Gaming, 15.6 pulgadas, perfecto para gaming y entretenimiento.', true, '66666666-6666-6666-6666-666666666666'),
('00000000-0000-0000-0000-000000000007', 'PlayStation 5', 'consola', 'Madrid', 499.99, 'Consola PlayStation 5, con un rendimiento impresionante y juegos de última generación.', true, '77777777-7777-7777-7777-777777777777'),
('00000000-0000-0000-0000-000000000008', 'Xbox Series X', 'consola', 'Barcelona', 499.99, 'Consola Xbox Series X, potente y lista para la próxima generación de videojuegos.', true, '88888888-8888-8888-8888-888888888888'),
('00000000-0000-0000-0000-000000000009', 'Nintendo Switch OLED', 'consola', 'Valencia', 349.99, 'Nintendo Switch con pantalla OLED, ideal para juegos en casa y en movimiento.', true, '99999999-9999-9999-9999-999999999999'),
('00000000-0000-0000-0000-000000000010', 'Razer Blade 15', 'ordenador', 'Sevilla', 1799.00, 'Portátil gaming Razer Blade 15, con alta potencia y diseño elegante, perfecto para gamers exigentes.', true, 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'),
('00000000-0000-0000-0000-000000000011', 'OnePlus 9 Pro', 'telefono', 'Madrid', 799.99, 'Smartphone OnePlus 9 Pro, 256GB, con cámara avanzada y experiencia fluida.', true, '11111111-1111-1111-1111-111111111111'),
('00000000-0000-0000-0000-000000000012', 'Lenovo Legion 5', 'ordenador', 'Barcelona', 1299.99, 'Portátil Lenovo Legion 5, ideal para gaming y multitarea, con sistema de refrigeración avanzado.', true, '22222222-2222-2222-2222-222222222222'),
('00000000-0000-0000-0000-000000000013', 'iPad Pro 11"', 'telefono', 'Valencia', 899.99, 'Tablet iPad Pro 11, 128GB, con pantalla Liquid Retina y rendimiento excepcional.', true, '33333333-3333-3333-3333-333333333333'),
('00000000-0000-0000-0000-000000000014', 'Sony WH-1000XM4', 'accesorios', 'Sevilla', 349.99, 'Auriculares Sony WH-1000XM4, con cancelación de ruido, sonido envolvente y batería de larga duración.', true, '44444444-4444-4444-4444-444444444444'),
('00000000-0000-0000-0000-000000000015', 'Logitech MX Master 3', 'accesorios', 'Bilbao', 99.99, 'Ratón Logitech MX Master 3, diseño ergonómico, ideal para profesionales y gamers.', true, '55555555-5555-5555-5555-555555555555'),
('00000000-0000-0000-0000-000000000016', 'Asus ROG Strix G15', 'ordenador', 'Zaragoza', 1499.99, 'Portátil Asus ROG Strix G15, con 16GB RAM, 1TB SSD y alto rendimiento para gaming.', true, '66666666-6666-6666-6666-666666666666'),
('00000000-0000-0000-0000-000000000017', 'Cyberpunk 2077 Collector\'s Edition', 'videojuego', 'Madrid', 89.99, 'Edición de coleccionista de Cyberpunk 2077, incluye contenido exclusivo y objetos de colección.', true, '77777777-7777-7777-7777-777777777777'),
('00000000-0000-0000-0000-000000000018', 'The Last of Us Part II (PS4)', 'videojuego', 'Barcelona', 39.99, 'Juego The Last of Us Part II para PS4, con una historia emocionante y gráficos impresionantes.', true, '88888888-8888-8888-8888-888888888888'),
('00000000-0000-0000-0000-000000000019', 'Nintendo Switch Pro Controller', 'accesorios', 'Valencia', 69.99, 'Control Pro para Nintendo Switch, diseño ergonómico y alta precisión para juegos competitivos.', true, '99999999-9999-9999-9999-999999999999'),
('00000000-0000-0000-0000-000000000020', 'SteelSeries Apex Pro Keyboard', 'accesorios', 'Sevilla', 199.99, 'Teclado mecánico SteelSeries Apex Pro, con retroiluminación RGB y teclas ajustables para máxima precisión.', true, 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa');

INSERT INTO fotos (id, foto, articuloId) VALUES
('f0000000-0000-0000-0000-000000000001', 'iphone12pro.jpg', '00000000-0000-0000-0000-000000000001'),
('f0000000-0000-0000-0000-000000000002', 'samsung_galaxy_s21.jpg', '00000000-0000-0000-0000-000000000002'),
('f0000000-0000-0000-0000-000000000003', 'google_pixel5.jpg', '00000000-0000-0000-0000-000000000003'),
('f0000000-0000-0000-0000-000000000004', 'dell_xps13.jpg', '00000000-0000-0000-0000-000000000004'),
('f0000000-0000-0000-0000-000000000005', 'macbook_air_m1.jpg', '00000000-0000-0000-0000-000000000005'),
('f0000000-0000-0000-0000-000000000006', 'hp_pavilion_gaming.jpg', '00000000-0000-0000-0000-000000000006'),
('f0000000-0000-0000-0000-000000000007', 'playstation5.jpg', '00000000-0000-0000-0000-000000000007'),
('f0000000-0000-0000-0000-000000000008', 'xbox_series_x.jpg', '00000000-0000-0000-0000-000000000008'),
('f0000000-0000-0000-0000-000000000009', 'nintendo_switch_oled.jpg', '00000000-0000-0000-0000-000000000009'),
('f0000000-0000-0000-0000-000000000010', 'razer_blade15.jpg', '00000000-0000-0000-0000-000000000010'),
('f0000000-0000-0000-0000-000000000011', 'oneplus_9_pro.jpg', '00000000-0000-0000-0000-000000000011'),
('f0000000-0000-0000-0000-000000000012', 'lenovo_legion5.jpg', '00000000-0000-0000-0000-000000000012'),
('f0000000-0000-0000-0000-000000000013', 'ipad_pro11.jpg', '00000000-0000-0000-0000-000000000013'),
('f0000000-0000-0000-0000-000000000014', 'sony_wh1000xm4.jpg', '00000000-0000-0000-0000-000000000014'),
('f0000000-0000-0000-0000-000000000015', 'logitech_mx_master3.jpg', '00000000-0000-0000-0000-000000000015'),
('f0000000-0000-0000-0000-000000000016', 'asus_rog_strix_g15.jpg', '00000000-0000-0000-0000-000000000016'),
('f0000000-0000-0000-0000-000000000017', 'cyberpunk2077_collectors.jpg', '00000000-0000-0000-0000-000000000017'),
('f0000000-0000-0000-0000-000000000018', 'last_of_us_part2_ps4.jpg', '00000000-0000-0000-0000-000000000018'),
('f0000000-0000-0000-0000-000000000019', 'nintendo_switch_pro_controller.jpg', '00000000-0000-0000-0000-000000000019'),
('f0000000-0000-0000-0000-000000000020', 'steelseries_apex_pro_keyboard.jpg', '00000000-0000-0000-0000-000000000020');

INSERT INTO solicitudesCompra (id, estado, compradorId, articuloId) VALUES
('s0000000-0000-0000-0000-000000000001', 'pendiente', '22222222-2222-2222-2222-222222222222', '00000000-0000-0000-0000-000000000001'),
('s0000000-0000-0000-0000-000000000002', 'aceptada', '33333333-3333-3333-3333-333333333333', '00000000-0000-0000-0000-000000000002'),
('s0000000-0000-0000-0000-000000000003', 'rechazada', '44444444-4444-4444-4444-444444444444', '00000000-0000-0000-0000-000000000003'),
('s0000000-0000-0000-0000-000000000004', 'pendiente', '55555555-5555-5555-5555-555555555555', '00000000-0000-0000-0000-000000000004'),
('s0000000-0000-0000-0000-000000000005', 'aceptada', '66666666-6666-6666-6666-666666666666', '00000000-0000-0000-0000-000000000005'),
('s0000000-0000-0000-0000-000000000006', 'rechazada', '77777777-7777-7777-7777-777777777777', '00000000-0000-0000-0000-000000000006'),
('s0000000-0000-0000-0000-000000000007', 'pendiente', '88888888-8888-8888-8888-888888888888', '00000000-0000-0000-0000-000000000007'),
('s0000000-0000-0000-0000-000000000008', 'aceptada', '99999999-9999-9999-9999-999999999999', '00000000-0000-0000-0000-000000000008'),
('s0000000-0000-0000-0000-000000000009', 'rechazada', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '00000000-0000-0000-0000-000000000009'),
('s0000000-0000-0000-0000-000000000010', 'pendiente', '11111111-1111-1111-1111-111111111111', '00000000-0000-0000-0000-000000000010'),
('s0000000-0000-0000-0000-000000000011', 'aceptada', '22222222-2222-2222-2222-222222222222', '00000000-0000-0000-0000-000000000011'),
('s0000000-0000-0000-0000-000000000012', 'rechazada', '33333333-3333-3333-3333-333333333333', '00000000-0000-0000-0000-000000000012'),
('s0000000-0000-0000-0000-000000000013', 'pendiente', '44444444-4444-4444-4444-444444444444', '00000000-0000-0000-0000-000000000013'),
('s0000000-0000-0000-0000-000000000014', 'aceptada', '55555555-5555-5555-5555-555555555555', '00000000-0000-0000-0000-000000000014'),
('s0000000-0000-0000-0000-000000000015', 'rechazada', '66666666-6666-6666-6666-666666666666', '00000000-0000-0000-0000-000000000015'),
('s0000000-0000-0000-0000-000000000016', 'pendiente', '77777777-7777-7777-7777-777777777777', '00000000-0000-0000-0000-000000000016'),
('s0000000-0000-0000-0000-000000000017', 'aceptada', '88888888-8888-8888-8888-888888888888', '00000000-0000-0000-0000-000000000017'),
('s0000000-0000-0000-0000-000000000018', 'rechazada', '99999999-9999-9999-9999-999999999999', '00000000-0000-0000-0000-000000000018'),
('s0000000-0000-0000-0000-000000000019', 'pendiente', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '00000000-0000-0000-0000-000000000019'),
('s0000000-0000-0000-0000-000000000020', 'aceptada', '11111111-1111-1111-1111-111111111111', '00000000-0000-0000-0000-000000000020'),
('s0000000-0000-0000-0000-000000000021', 'rechazada', '22222222-2222-2222-2222-222222222222', '00000000-0000-0000-0000-000000000001'),
('s0000000-0000-0000-0000-000000000022', 'pendiente', '33333333-3333-3333-3333-333333333333', '00000000-0000-0000-0000-000000000002'),
('s0000000-0000-0000-0000-000000000023', 'aceptada', '44444444-4444-4444-4444-444444444444', '00000000-0000-0000-0000-000000000003'),
('s0000000-0000-0000-0000-000000000024', 'rechazada', '55555555-5555-5555-5555-555555555555', '00000000-0000-0000-0000-000000000004'),
('s0000000-0000-0000-0000-000000000025', 'pendiente', '66666666-6666-6666-6666-666666666666', '00000000-0000-0000-0000-000000000005'),
('s0000000-0000-0000-0000-000000000026', 'aceptada', '77777777-7777-7777-7777-777777777777', '00000000-0000-0000-0000-000000000006'),
('s0000000-0000-0000-0000-000000000027', 'rechazada', '88888888-8888-8888-8888-888888888888', '00000000-0000-0000-0000-000000000007'),
('s0000000-0000-0000-0000-000000000028', 'pendiente', '99999999-9999-9999-9999-999999999999', '00000000-0000-0000-0000-000000000008'),
('s0000000-0000-0000-0000-000000000029', 'aceptada', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '00000000-0000-0000-0000-000000000009'),
('s0000000-0000-0000-0000-000000000030', 'rechazada', '11111111-1111-1111-1111-111111111111', '00000000-0000-0000-0000-000000000010');
