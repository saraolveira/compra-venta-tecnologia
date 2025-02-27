// verifica si el usuario existe, encripta la contraseña, guarda el usuario en la base de datos y envía el email.

import randomstring from "randomstring";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { selectUserByUsernameModel } from "../../models/users/selectUserByUsernameModel.js";
import { selectUserByEmailModel } from "../../models/users/selectUserByEmailModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";
import { insertUserModel } from "../../models/users/insertUsernameModel.js";
import { sendEmailBrevoUtil } from "../../utils/sendEmailBrevoUtils.js";
import { FRONTEND_HOST } from "../../../env.js";

// función que se encarga de registrar un usuario en la base de datos
export const registerUserService = async (username, email, password) => {
    // buscar si el usuario o email ya existe
    const checkUser = async (username, email) => {
        if (await selectUserByUsernameModel(username)) {
            throw generateErrorUtils(
                404,
                "USERNAME_REGISTERED",
                "El nombre de usuario ya está en uso. Prueba con otro o inicia sesión."
            );
        }

        if (await selectUserByEmailModel(email)) {
            throw generateErrorUtils(
                404,
                "EMAIL_REGISTERED",
                "El email ya está en uso. Prueba con otro o inicia sesión."
            );
        }
    };

    await checkUser(username, email);

    // generar un ID único de usuario de manera aleatoria
    const id = crypto.randomUUID();

    // generar cógio de registro
    const registrationCode = randomstring.generate(10);

    // hashear contraseña
    const hashedPassword = await bcrypt.hash(password, 12);

    // insertar el usuario en la base de datos
    const newUser = {
        id,
        username,
        email,
        password: hashedPassword,
        registrationCode,
    };

    const result = await insertUserModel(newUser);

    if (!result || result.affectedRows !== 1) {
        throw generateErrorUtils(
            500,
            "ERROR_DB",
            "No se pudo completar el registro del usuario"
        );
    }

    // Enviar email de confirmacion
    // Asunto email
    const emailSubject = "Activación de cuenta";
    // Cuerpo del email
    const emailText = `
    <h2>¡Bienvenid@ a Tech2Go, ${username}!</h2>
    <p>Ya casi eres parte de nuestra comunidad, la plataforma donde la tecnología y la innovación se encuentran.</p>
    <p>Para empezar a vender o comprar los mejores productos tecnológicos, activa tu cuenta haciendo clic en el siguiente enlace:</p>
    <p><a href="${FRONTEND_HOST}/validar/${registrationCode}">Activa tu cuenta</a></p>
    <p>¡No esperes más!</p>
    <p>El equipo de Tech2Go</p>
    `;
    // Llamar al servicio que envía el email
    await sendEmailBrevoUtil(email, emailSubject, emailText);

    // Devolver el usuario creado
    return { id, username, email, registrationCode };
};
