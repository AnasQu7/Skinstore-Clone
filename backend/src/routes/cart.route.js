require("dotenv").config();
const express = require("express");

const app = express.Router();
const jwt = require("jsonwebtoken");

let ProductModel = require("../models/product.model");
let CartModel = require("../models/cart.model");
const UserModel = require("../models/user.model");

// fetching cart items*********************

app.get("/fetchcartItem", async (req, res) => {
  let { token } = req.headers;

  if(!token){
    return res.status(501).send("Not logged in")
  }
  token = jwt.verify(token, process.env.token_password);

  let userId = token.id;

  let cartItem = await CartModel.find({ userId, active: true }).populate({
    path: "products",
    populate: { path: "productId" },
  });
  try {
    if (cartItem.length > 0) {
      // cartItem = cartItem[0].products.populate("product");

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
  if(!token){
    return res.status(501).send("Not logged in")
  }
  token = jwt.decode(token, process.env.token_password);

  let userId = token.id;

  let cart = await CartModel.findOne({ userId });
  // let itemIndex = cart.products.findIndex((p) => p.productId == productId);
  console.log(cart);
  console.log("helllo");
  // return;
  try {
    if (!cart) {
      let newCartItem = new CartModel({ userId, products: [{ productId }] });
      await newCartItem.save();
      console.log(newCartItem);

      return res.status(200).send(newCartItem);
    } else {
      let itemIndex = cart.products.findIndex((p) => p.productId == productId);

      if (itemIndex > -1) {
        let productItem = cart.products[itemIndex];
        productItem.quantity = productItem.quantity + qty;
        cart.products[itemIndex] = productItem;
      } else {
        cart.products.push({ productId });
      }

      await cart.save();
      return res.status(201).send(cart);
    }
  } catch (e) {
    return res.send(e.message);
  }
});

// ****************Remove from Cart******************
app.post("/delete", async (req, res) => {
  let { token } = req.headers;
  let { productId, _id } = req.body;
  if(!token){
    return res.status(501).send("Not logged in")
  }
  token = jwt.decode(token, process.env.token_password);
  let userId = token.id;
  let cart = await CartModel.findOne({ userId, _id });
  // let itemIndex = cart.products.findIndex((p) => p.productId == productId);
  // console.log(cart);
  // return;
  try {
    if (!cart) {
      return res
        .status(401)
        .send("There is no no any cart to remove the product");
    } else {
      let itemIndex = cart.products.findIndex((p) => p.productId == productId);
      if (cart.products.length === 1) {
        await CartModel.findByIdAndDelete({ _id });
      } else {
        cart.products.splice(itemIndex, 1);
      }
      await cart.save();
      console.log(cart);
      return res.status(201).send(cart);
    }
  } catch (e) {
    return res.send(e.message);
  }
});
module.exports = app;
