import React from "react";
import Sidebar from "./AbhishekDashboard/Sidebar";
import ManageQuantity from "../AbhishekDashboard/ManageQunatity";
import OrderManagement from "../AbhishekDashboard/OrderManagement";
import ProductDetails from "../AbhishekDashboard/ProductDetails";
// import ProductDetails from "../AbhishekDashboard/ProductDetails";
import Sidebar from "../AbhishekDashboard/Sidebar";

const Admin = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="rightSidebar">
        {" "}
        <OrderManagement />
        <ManageQuantity />
        <h1>productlist</h1>
        <ProductDetails />
      </div>
    </div>
  );
};

export default Admin;
