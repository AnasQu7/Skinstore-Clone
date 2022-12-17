import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import SkinCare from "./SkinCare";
import HairCare from "./HairCare";
import ProductPage from "./ProductPage";
import Admin from "./Admin";
import CartPage from "./CartPage";
import Productdetails from "./Productdetails";
import Login from "./Login";
import Register from "./Register";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/skincare" element={<SkinCare />} />
      <Route path="/haircare" element={<HairCare />} />
      <Route path="/admin" element={<Admin />} />

      <Route path="/productpage" element={<ProductPage />} />
      <Route path="/product/:id" element={<Productdetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}
