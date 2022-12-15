const express = require("express");

const app = express.Router();
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

app.post("/signup", async (req, res) => {
  const { name, email, password, address } = req.body;

  const token = jwt.sign({ name, email, password, address }, "serretKey");
  const newUser = new UserModel({ name, email, password, address });
  await newUser.save();

  console.log(token);
  return res.send({ token });
});

module.exports = app;
