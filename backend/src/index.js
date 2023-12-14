const express = require("express");
const dotenv = require("dotenv");
const userController = require("./user/user.controller");
const cors = require("cors");

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to my api deployment");
});

app.use("/users", userController);

app.listen(PORT, () => {
  console.log("Express API running in port: " + PORT);
});
