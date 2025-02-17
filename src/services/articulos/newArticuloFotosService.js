import path from "path";
import crypto from "crypto";
import { savePhotoUtil } from "../../utils/photoUtils.js";
import { insertPhotoModel } from "../../models/photos/insertPhotoModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";
export const newArticuloFotosService = async (
    vendedorId,
    articuloId,
    fotos
) => {
    // Creamos un array para almacenar los resultados de cada foto procesada
    const processedPhotos = [];

    // Creamos el path relativo donde se guardarán las fotos
    const photosRelativePath = path.join(
        "src/uploads/articulos",
        vendedorId,
        articuloId
    );

    for (const foto of fotos) {
        // id para la foto
        const id = crypto.randomUUID();

        // Guardamos foto y obtener nombre
        const nombre = await savePhotoUtil(photosRelativePath, foto, 800);

        // Insertamos en la base de datos
        const result = await insertPhotoModel(id, articuloId, nombre);
        if (result.affectedRows !== 1) {
            throw generateErrorUtils(
                500,
                "PHOTO_NOT_SAVED",
                "No se ha podido guardar la foto en la base de datos"
            );
        }

        // Agregamos la información de la foto procesada al array
        processedPhotos.push({
            id,
            nombre,
            articuloId,
        });
    }

    return processedPhotos;
};
