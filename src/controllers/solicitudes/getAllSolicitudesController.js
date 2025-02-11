export const getAllSolicitudesController = async (req, res, next) => {
  try {
    const solicitudes = await getAllSolicitudesService();
    res.status(200).send({
      status: "success",
      message: "Lista de solicitudes",
      data: { solicitudes },
    });
  } catch (error) {
    next(error);
  }
};
