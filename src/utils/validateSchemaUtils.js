import { generateErrorUtils } from "./helpersUtils.js";

export const validateSchemaUtil = async (schema, data) => {
    try {
        await schema.validateAsync(data, {
            abortEarly: false,
            allowUnknown: false,
            stripUnknown: true,
        });
    } catch (error) {
        throw generateErrorUtils(400, "INVALID_DATA", error.message);
    }
};

// un esquema es una definición de cómo deben lucir los datos que estamos recibiendo. Este esquema es como un conjunto de reglas que dicen "estos son los valores correctos y en este formato".

// abortEarly: false. Esto significa que, si hay varios errores (por ejemplo, un email inválido y una contraseña corta), no se detendrá en el primer error que encuentre. En lugar de eso, se mostrarán todos los errores encontrados. Si lo ponemos en true, la validación se detendría al primer error encontrado.

// allowUnknown: false. Esto significa que no permitirá que los datos incluyan propiedades que no estén definidas en el esquema. Por ejemplo, si alguien envía un campo extra como age que no está en el esquema, el validateAsync fallará.

// stripUnknown: true. Si alguien envía datos extra que no están definidos en el esquema, esos datos serán eliminados antes de continuar. Esto asegura que solo los datos válidos y necesarios se mantendrán.
