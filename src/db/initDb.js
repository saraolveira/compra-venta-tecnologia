import path from "path";

import { getPool } from "./getPool.js";
import { MYSQL_DATABASE, UPLOADS_DIR } from "../../env.js";
import { createPathUtil, deletePathUtil } from "../utils/foldersUtils.js";

export const initDb = async () => {
    try {
        const pool = await getPool();

        // Poner la DDBB en uso
        console.log("Poniendo en uso la base de datos 📑");
        await pool.query(`USE ${MYSQL_DATABASE}`);
        console.log("Base de datos en uso ✅ 📑");

        // Borrar las tablas si existen
        console.log("Borrando tablas existentes 🗑 📑");
        await pool.query(
            "DROP TABLE IF EXISTS valoraciones, ventas, solicitudesCompra, articulos, usuarios"
        );
        console.log("Tablas borradas ✅ 📑");

        // Crear las tablas
        console.log("Creando tablas de nuevo 📑");
        // Crear la tabla usuarios
        await pool.query(`
            CREATE TABLE usuarios (
                id CHAR(36) PRIMARY KEY NOT NULL,
                username VARCHAR(50) UNIQUE NOT NULL,
                nombre VARCHAR(50),
                apellidos VARCHAR(50),
                email VARCHAR(100) UNIQUE NOT NULL,
                password CHAR(60) NOT NULL,
                telefono CHAR(9) UNIQUE NOT NULL,
                avatar CHAR(40) DEFAULT NULL,
                biografia TEXT DEFAULT NULL,
                activado BOOLEAN DEFAULT FALSE,
                rol ENUM('admin', 'user') DEFAULT 'user',
                registrationCode CHAR(15) DEFAULT NULL,
                recoveryPassCode CHAR(15) DEFAULT NULL,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedAt TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
            );
        `);

        // Crear la tabla articulos
        await pool.query(`
            CREATE TABLE articulos (
                id CHAR(36) PRIMARY KEY NOT NULL,
                nombre VARCHAR(50) UNIQUE NOT NULL,
                categoria ENUM('telefono', 'ordenador', 'consola', 'videojuego', 'accesorios') DEFAULT 'telefono',
                localidad VARCHAR(50) NOT NULL,
                precio DECIMAL(7, 2) NOT NULL,
                foto CHAR(40) DEFAULT NULL,
                stock ENUM('en stock', 'agotado') DEFAULT 'en stock',
                descripcion TEXT NOT NULL,
                entregaEstimada DATE NOT NULL,
                visibilidad ENUM('publicado', 'privado') DEFAULT 'privado',
                vendedorId CHAR(36) NOT NULL,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedAt TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (vendedorId) REFERENCES usuarios(id) ON DELETE CASCADE
            );
        `);

        // Crear la tabla solicitudesCompra
        await pool.query(`
            CREATE TABLE solicitudesCompra (
                id CHAR(36) PRIMARY KEY NOT NULL,
                estado ENUM('aceptada', 'pendiente', 'rechazada') DEFAULT 'pendiente',
                compradorId CHAR(36) NOT NULL,
                articuloId CHAR(36) NOT NULL,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedAt TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (compradorId) REFERENCES usuarios(id) ON DELETE CASCADE,
                FOREIGN KEY (articuloId) REFERENCES articulos(id) ON DELETE CASCADE
            );
        `);

        // Crear la tabla ventas
        await pool.query(`
            CREATE TABLE ventas (
                id CHAR(36) PRIMARY KEY NOT NULL,
                vendedorId CHAR(36) NOT NULL,
                compradorId CHAR(36) NOT NULL,
                articuloId CHAR(36) NOT NULL,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedAt TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (vendedorId) REFERENCES usuarios(id) ON DELETE CASCADE,
                FOREIGN KEY (compradorId) REFERENCES usuarios(id) ON DELETE CASCADE,
                FOREIGN KEY (articuloId) REFERENCES articulos(id) ON DELETE CASCADE
            );
        `);

        // Crear la tabal valoraciones
        await pool.query(`
            CREATE TABLE valoraciones (
                id CHAR(36) PRIMARY KEY NOT NULL,
                valoracion TINYINT UNSIGNED NOT NULL,
                comentario TEXT DEFAULT NULL,
                vendedorId CHAR(36) NOT NULL,
                compradorId CHAR(36) NOT NULL,
                compraId CHAR(36) NOT NULL,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedAt TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (vendedorId) REFERENCES usuarios(id) ON DELETE CASCADE,
                FOREIGN KEY (compradorId) REFERENCES usuarios(id) ON DELETE CASCADE,
                FOREIGN KEY (compraId) REFERENCES solicitudesCompra(id) ON DELETE CASCADE,
                CHECK (valoracion>= 1 AND valoracion<=5)
            );
        `);

        console.log("Tablas creadas");

        const uploadsDir = path.join(process.cwd(), `src/${UPLOADS_DIR}`);
        // Borramos el directorio uploads y todo su contenido
        console.log("Borrando directorio de subida");
        await deletePathUtil(uploadsDir);
        console.log("Directorio de subida borrado");

        // Crear el directorio uploads y sus subdirectorios users y tweets
        console.log("Creando directorios de subida");
        await createPathUtil(uploadsDir);
        const avatarsDir = path.join(uploadsDir, "avatars");
        await createPathUtil(avatarsDir);
        const productosDir = path.join(uploadsDir, "productos");
        await createPathUtil(productosDir);
        console.log("Directorios de subida creados ");

        console.log("Todo ha ido bien");
    } catch (error) {
        console.error("Error al inicializar la base de datos");
        process.exit(1);
    }
};

initDb();
