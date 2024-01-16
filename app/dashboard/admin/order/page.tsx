import React from "react";
import OrdersDisplay from "../../_components/Order/OrdersDisplay";
import getAllOrders from "@/app/actions/getAllOrders";

const page = async () => {
  const allOrders = await getAllOrders();
  console.log("all orders", allOrders?.data);
  return <OrdersDisplay allOrders={allOrders?.data?.result} />;
};

export default page;
