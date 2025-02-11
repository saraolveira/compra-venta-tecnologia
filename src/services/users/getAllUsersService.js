import { selectAllUsersModel } from "../../models/users/selectAllusersModel.js";

export const getAllUsersService = async () => {
  const users = await selectAllUsersModel();
  if (!users.lenght) {
    throw generateErrorUtils(
      404,
      "NO_USERS_FOUND",
      "No se han encontrado los usuarios"
    );
  }
  return users;
};
