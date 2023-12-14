const express = require("express");

const { getAllUsers, getUserById, createUser, deleteUserById, editUserById } = require("./user.service");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await getAllUsers();

  res.send({ data: users });
});

router.get("/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await getUserById(userId);

    res.send({ data: user });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newUserData = req.body;

    const user = await createUser(newUserData);

    res.send({
      data: user,
      message: "User has been created successfully",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    await deleteUserById(userId);

    res.send({ message: "User has been deleted successfully" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const userId = parseInt(req.params.id);
  const userData = req.body;
  try {
    const user = await editUserById(userId, userData);

    res.send({
      data: user,
      message: "User has been updated successfully",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
