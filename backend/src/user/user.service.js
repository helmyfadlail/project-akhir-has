const { insertUser, deleteUser, editUser, findUserById, findUsers } = require("./user.repository");

const getAllUsers = async () => {
  const users = await findUsers();

  return users;
};

const getUserById = async (id) => {
  const user = await findUserById(id);

  if (!user) {
    throw Error("User not found");
  }

  return user;
};

const createUser = async (newUserData) => {
  const user = await insertUser(newUserData);

  return user;
};

const deleteUserById = async (id) => {
  await getUserById(id);

  await deleteUser(id);
};

const editUserById = async (id, userData) => {
  await getUserById(id);

  const user = await editUser(id, userData);

  return user;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  editUserById,
};
