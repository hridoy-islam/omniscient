import React from "react";
import Dashboard from "../_components/Dashboard/Dashboard";
import getAllUsers from "@/app/actions/getAllUsers";
import getAllOrders from "@/app/actions/getAllOrders";
import getAllRigs from "@/app/actions/getAllRigs";

const page = async () => {
  const allUsers = await getAllUsers();
  const allOrders = await getAllOrders();
  const allRigs = await getAllRigs();

  return (
    <Dashboard
      allUsers={allUsers?.data?.result}
      allOrders={allOrders?.data?.result}
      allRigs={allRigs?.data?.result}
    />
  );
};

export default page;
