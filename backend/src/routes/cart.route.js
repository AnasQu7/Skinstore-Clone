const express = require("express");
const app = express.Router();
const jwt = require("jsonwebtoken");

let ProductModel = "product";
let CartModel = require("../models/cart.model");

app.get("/", async (req, res) => {
  const { token } = req.header.authentications;
  token = jwt.verify(token);
  let userId = token.id;

  const cartItem = await CartModel.find({ userId });
  try {
    if (cartItem.length > 0) {
      cartItem = cartItem.populate("product");
      return res.send(cartItem);
    } else {
      return res.send("there is no item inside the cart");
    }
  } catch (e) {
    return res.send(e.message);
  }
});

// **************add to cart*********************
app.post("/", async (req, res) => {
  const { token } = req.header.authentications;
  let { productId, qty } = req.body;
  token = jwt.verify(token);
  let userId = token.id;
  let totalCartIem = await CartModel.find({ userId });
  try {
    let product = totalCartIem.findOne({ productId });
    if (!product) {
      let newCartItem = new CartModel({ userId, productId });
      await newCartItem.save();

      return res.redirect("/");
    }

    totalQunatity = product.quantity + qty;

    await CartModel.find(
      { userId, productId },
      { $set: { quantity: totalQunatity } }
    );
    return res.redirect("/");
  } catch (e) {
    return res.send(e.message);
  }
});

app.get("/quantity", async (req, res) => {
  let limitedProduct = await ProductModel.find({ quantity: { $lt: 5 } });

  try {
    return res.status(200).send(limitedProduct);
  } catch (e) {
    return res.send(e.message);
  }
});

module.exports = app;
