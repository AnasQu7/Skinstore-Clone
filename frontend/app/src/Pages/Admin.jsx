import React, { useState } from "react";
import AddNewProduct from "../Components/AbhishekDashboard/AddNewProduct";
import Sidebar from "../Components/AbhishekDashboard/Sidebar";
import UserDetails from "../Components/AbhishekDashboard/UserDetails";
import ManageQuantity from "../Components/AbhishekDashboard/ManageQunatity";
import OrderManagement from "../Components/AbhishekDashboard/OrderManagement";
import ProductDetails from "../Components/AbhishekDashboard/ProductDetails";
import OrderDetails from "../Components/AbhishekDashboard/OrderDetails";

const Admin = () => {
  const [dispalyStatus, setStatusDisplay] = useState("OrderManagement");

  // console.log(dispalyStatus);

  const displayFunction = (data) => {
    setStatusDisplay(data);
  };

  return (
    <div style={{marginTop:"150px",minHeight:"70vh",marginBottom:"50px"}} className="container">
      <div className="sidebar">
        <Sidebar displayFunction={displayFunction} />
      </div>
      <div className="rightSidebar">
        {" "}
        <div
          style={{
            display: dispalyStatus === "AddNewProduct" ? "block" : "none",
          }}
        >
          {" "}
          <AddNewProduct />
        </div>
        <div
          style={{
            display: dispalyStatus === "ProductList" ? "block" : "none",
          }}
        >
          {" "}
          <ProductDetails />
        </div>
        <div
          style={{
            display: dispalyStatus === "UserDetails" ? "block" : "none",
          }}
        >
          {" "}
          <UserDetails />
        </div>
        <div
          style={{
            display: dispalyStatus === "OrderManagement" ? "block" : "none",
          }}
        >
          {" "}
          <OrderManagement />
        </div>
        <div
          style={{
            display: dispalyStatus === "ManageQuantity" ? "block" : "none",
          }}
        >
          {" "}
          <ManageQuantity />
        </div>
        <div
          style={{
            display: dispalyStatus === "SeeOrderDetails" ? "block" : "none",
          }}
        >
          {" "}
          <OrderDetails />
        </div>
      </div>
    </div>
  );
};

export default Admin;
