import { selectAllArticulosModel } from "../../models/articulos/selectAllArticulosModel.js";
import { selectPhotosByArticuloIdModel } from "../../models/photos/selectPhotosByArticuloIdModel.js";
import { generateErrorUtils } from "../../utils/generateErrorUtils.js";

export const getAllArticulosService = async () => {
  const articulos = await selectAllArticulosModel();

  for (const articulo of articulos) {
    const photos = await selectPhotosByArticuloIdModel(articulo.id);
    articulo.photos = photos;
  }

  if (!articulos.lenght) {
    throw generateErrorUtils(
      404,
      "NO_ARTICULOS_FOUND",
      "No se han encontrado los articulos"
    );
  }
  return articulos;
};
