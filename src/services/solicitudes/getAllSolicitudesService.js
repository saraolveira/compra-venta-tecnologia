import { selectAllSolicitudesModel } from "../../models/solicitudes/selectAllSolicitudesModel.js";

export const getAllSolicitudesService = async () => {
  const solicitudes = await selectAllSolicitudesModel();

  for (const solicitud of solicitudes) {
  }

  if (!solicitudes.lenght) {
    throw generateErrorUtils(
      404,
      "NO_SOLICITUDES_FOUND",
      "No se han encontrado las solicitudes"
    );
  }

  return solicitudes;
};
