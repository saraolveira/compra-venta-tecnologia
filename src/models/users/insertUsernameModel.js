import { getPool } from "../../db/getPool.js";

// Nos conectamos a la base de datos y guardamos el usuario

export const insertUserModel = async (user) => {
    const pool = await getPool();

    const { id, username, email, password, registrationCode } = user;

    // El primer elemento (result) contiene información sobre la consulta (como cuántas filas fueron afectadas).
    const [result] = await pool.query(
        `INSERT INTO usuarios (id, username, email, password, registrationCode) VALUES (?, ?, ?, ?, ?);`,
        [id, username, email, password, registrationCode]
    );

    return result;
};

// users es el nombre de la tabla en la base de datos donde quieres insertar la información.
// (id, username, email, password, registrationCode): Son las columnas de la tabla en las que vas a insertar los datos.
// VALUES (?, ?, ?, ?, ?): Aquí es donde pasas los valores que quieres insertar. Los signos de interrogación (?) son marcadores de posición. Significan que los valores que vas a insertar se proporcionarán más adelante en el código, en el segundo argumento
// [id, username, email, password, registrationCode] Esta es la lista de valores que va a insertarse en las columnas mencionadas anteriormente.
