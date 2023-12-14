const prisma = require("../db");

const findUsers = async () => {
  const users = await prisma.user.findMany();

  return users;
};

const findUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
};

const insertUser = async (userData) => {
  const { username, name, nim, faculty, department } = userData;
  const user = await prisma.user.create({
    data: {
      username: username,
      name: name,
      nim: nim,
      faculty: faculty,
      department: department,
    },
  });

  return user;
};

const deleteUser = async (id) => {
  await prisma.user.delete({
    where: {
      id,
    },
  });
};

const editUser = async (id, userData) => {
  const { username, name, nim, faculty, department } = userData;
  const user = await prisma.user.update({
    where: {
      id: parseInt(id),
    },
    data: {
      username: username,
      name: name,
      nim: nim,
      faculty: faculty,
      department: department,
    },
  });

  return user;
};

module.exports = {
  findUsers,
  findUserById,
  insertUser,
  deleteUser,
  editUser,
};
