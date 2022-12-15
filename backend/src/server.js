const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connect = async () => {
  return mongoose.connect("mongodb://localhost:27017/skincare");
};
const app = express();
const cors = require("cors");
const { urlencoded } = require("express");
app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: true }));
const CartRoutes = require("./routes/cart.route");
const AdminRoutes = require("./routes/admin.route");
const OrderRoutes = require("./routes/order.route");
const UserRoutes = require("./routes/user.route");

app.use("/cart", CartRoutes);
app.use("/admin", AdminRoutes);
app.use("/order", OrderRoutes);
app.use("/user", UserRoutes);

app.listen(8080, async () => {
  await connect();
  console.log("working");
});
