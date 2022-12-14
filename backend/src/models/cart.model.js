const { Schema, model } = require("mongoose");

const CartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
  indiVidualQunatity: { type: Number, default: 1 },
});

const CartModel = model("cart", CartSchema);

module.exports = CartModel;
