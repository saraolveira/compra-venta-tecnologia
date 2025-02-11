import joi from "joi";

export const registerUserSchema = joi.object({
    username: joi.string().min(5).required(), // cadena con al menos 3 caracteres
    email: joi.string().email().required(), // El debe ser un string válido (por ejemplo, algo@dominio.com)
    password: joi
        .string()
        .min(8)
        .pattern(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@¡!$%^&*()_+|~=`{}:";'<>¿?,.])[a-zA-Z0-9@¡!$%^&*()_+|~=`{}:";'<>¿?,.]{8,}$/
        )
        .required(), // La contraseña debe tener al menos 8 caracteres
});
