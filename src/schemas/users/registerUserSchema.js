import joi from "joi";
import { joiErrorMessages } from "./joiErrorMessages.js";

export const registerUserSchema = joi.object({
    username: joi.string().min(5).required().messages(joiErrorMessages), // cadena con al menos 3 caracteres
    email: joi.string().email().required().messages(joiErrorMessages), // El debe ser un string válido (por ejemplo, algo@dominio.com)
    password: joi
        .string()
        .min(8)
        .pattern(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@¡!$%^&*()_+|~=`{}:";'<>¿?,.])[a-zA-Z0-9@¡!$%^&*()_+|~=`{}:";'<>¿?,.]{8,}$/
        )
        .required()
        .messages(joiErrorMessages),
    // La contraseña debe tener al menos 8 caracteres
});

// (?=.*[a-z]): Verifica si hay al menos una letra minúscula ([a-z]).
// (?=.*[A-Z]): Verifica si hay al menos una letra mayúscula ([A-Z]).

// (?=.* [@¡!$ %^&* ()_ +| ~=\`{}: ";'<>¿?,.]):Verifica si hay al menos un símbolo especial de entre los permitidos.

// [a - zA - Z0 - 9@¡!$ %^&* ()_ +| ~=\`{}: ";'<>¿?,.]: Define el conjunto permitido de caracteres en la contraseña: Letras minúsculas (a-z), letras mayúsculas (A-Z), números (0-9), y los caracteres especiales.
