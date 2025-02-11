import { getAllArticulosService } from "../../services/articulos/getAllArticulosService.js";

export const getAllArticulosController = async (req, res, next) => {
  try {
    const articulos = await getAllArticulosService();
    res.status(200).send({
      status: "success",
      message: "Lista de articulos",
      data: { articulos },
    });
  } catch (error) {
    next(error);
  }
};
