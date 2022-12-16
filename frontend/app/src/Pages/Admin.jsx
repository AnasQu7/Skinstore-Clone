import React from "react";
import Sidebar from "../Components/AbhishekDashboard/Sidebar";
import ManageQuantity from "../Components/AbhishekDashboard/ManageQunatity";
import OrderManagement from "../Components/AbhishekDashboard/OrderManagement";
import ProductDetails from "../Components/AbhishekDashboard/ProductDetails";


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
