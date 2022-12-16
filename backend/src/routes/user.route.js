const express = require("express");

const app = express.Router();
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

// app.post("/signup", async (req, res) => {
//   const { name, email, password, address } = req.body;

//   const token = jwt.sign({ name, email, password, address }, "serretKey");
//   const newUser = new UserModel({ name, email, password, address });
//   await newUser.save();

//   console.log(token);
//   return res.send({ token });
// });

// ****************list of user*************
app.get("/", async (req, res) => {
  try {
    const user = await UserModel.find();
    return res.status(200).send({ message: "OK", user });
  } catch (e) {
    return res.send(e.message);
  }
});

// ************Remove the user from list****************

app.delete("/deleteproduct/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await UserModel.findByIdAndDelete({ _id: id });

    return res.status(200).send({ Message: "OK" });
  } catch (e) {
    return res.send(e.message);
  }
  console.log("helllo");
  return;
});
module.exports = app;
