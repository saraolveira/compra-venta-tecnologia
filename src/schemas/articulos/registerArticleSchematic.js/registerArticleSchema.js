import joi from "joi";
import { joiErrorMessages } from "../joiErrorMessages.js";

export const registerArticleSchema = joi.object({
    nombre: joi.string().min(3).max(70).required().messages(joiErrorMessages),
    categoria: joi
        .string()
        .valid("telefono", "ordenador", "consola", "videojuego", "accesorios")
        .required()
        .messages(joiErrorMessages),
    localidad: joi.string().min(3).max(50).required().messages(joiErrorMessages),
    precio: joi.number().precision(2).positive().required().messages(joiErrorMessages),
    descripcion: joi.string().min(10).required().messages(joiErrorMessages),
    vendedorId: joi.string().guid({ version: "uuidv4" }).required().messages(joiErrorMessages),
});
