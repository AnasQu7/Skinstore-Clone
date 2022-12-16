const http = require("http");
const express = require("express");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const { Server } = require("socket.io");
require("dotenv").config();

const cors = require("cors");
const { urlencoded } = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
app.use(urlencoded({ extended: true }));

const SignupRotue = require("./src/routes/signup.route");
const httpServer = http.createServer(app);
const LoginRoute = require("./src/routes/login.route");
// const io = new Server(httpServer);

app.use(express.json());
app.use(cors());
const connect = require("./src/config/db");
app.get("/", async (req, res) => {
  res.send("yahoo!!!");
});
app.use("/signup", SignupRotue);
app.use("/login", LoginRoute);

const CartRoutes = require("./src/routes/cart.route");
const AdminRoutes = require("./src/routes/admin.route");
const OrderRoutes = require("./src/routes/order.route");
const UserRoutes = require("./src/routes/user.route");

app.use("/cart", CartRoutes);
app.use("/admin", AdminRoutes);
app.use("/order", OrderRoutes);
app.use("/user", UserRoutes);

httpServer.listen(PORT, async () => {
  try {
    await connect();
    console.log(`listening http://localhost:${PORT}`);
  } catch (e) {
    console.log({ message: e.message });
  }
});
