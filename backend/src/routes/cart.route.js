const express = require("express");
const app = express.Router();
const jwt = require("jsonwebtoken");

let ProductModel = require("../models/product.model");
let CartModel = require("../models/cart.model");
const UserModel = require("../models/user.model");

// fetching cart items*********************

app.get("/fetchcartItem", async (req, res) => {
  let { token } = req.headers;
  token = jwt.verify(token, "serretKey");

  const user = await UserModel.findOne({ email: token.email });

  let userId = user._id;

  const cartItem = await CartModel.find({ userId }).populate("productId");
  try {
    if (cartItem.length > 0) {
      // cartItem = cartItem.populate("product");
      console.log(cartItem);
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
  let { token } = req.headers;
  let { productId, qty } = req.body;
  token = jwt.decode(token, "serretKey");
  const user = await UserModel.findOne({ email: token.email });

  let userId = user._id;

  let product = await CartModel.findOne({ userId, productId });
  // console.log(product);
  try {
    if (!product) {
      let newCartItem = new CartModel({ userId, productId });
      await newCartItem.save();

      return res.redirect("/fetchcartItem");
    }

    totalQunatity = product.indiVidualQunatity + qty;
    console.log(totalQunatity);

    let x = await CartModel.updateOne(
      { userId, productId },
      { $set: { indiVidualQunatity: totalQunatity } }
    );
    console.log(x);
    return res.redirect("/fetchcartItem");
  } catch (e) {
    return res.send(e.message);
  }
});

module.exports = app;
