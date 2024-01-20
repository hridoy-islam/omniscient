import React from "react";
import Dashboard from "../_components/Dashboard/Dashboard";
import getAllUsers from "@/app/actions/getAllUsers";
import getAllOrders from "@/app/actions/getAllOrders";

const page = async () => {
  const allUsers = await getAllUsers();
  const allOrders = await getAllOrders();
  // console.log("all orders", allOrders?.data?.result);
  return (
    <Dashboard
      allUsers={allUsers?.data?.result}
      allOrders={allOrders?.data?.result}
    />
  );
};

export default page;
