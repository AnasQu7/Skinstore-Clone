const express = require("express");
const app = express.Router();
const { model, Schema } = require("mongoose");
let ProductModel = model("product", new Schema({}));

app.get("/allproduct", async (req, res) => {
  try {
    let product = await ProductModel.find().limit(200);

    return res.send({ product });
  } catch (e) {
    return res.send(e.message);
  }
});

// ****************************limited qunatity alert******************
app.get("/quantity", async (req, res) => {
  try {
    let limitedProduct = await ProductModel.find({ quantity: { $lte: 5 } });

    return res.status(200).send({ limitedProduct });
  } catch (e) {
    return res.send(e.message);
  }
});

// ***********************add new product to the product coolecion of the database*
app.post("addnewproduct", async (req, res) => {
  const { name, type, category, brand, currency, price, imageurl, quantity } =
    req.body;

  let newProduct = new ProductModel({
    name,
    type,
    category,
    brand,
    currency,
    price,
    imagelink,
    quantity,
    description,
  });

  await newProduct.save();
  return res.send("product added");
});

// Remove product from product list
app.post("/deleteproduct", async (req, res) => {
  let { id } = req.body;
  // console.log(id);
  try {
    await ProductModel.findByIdAndDelete({ _id: id });
    return res.status(200).send("Ok");
  } catch (e) {
    return res.send(e.message);
  }
});

module.exports = app;
