import React from "react";
import OrdersDisplay from "../../_components/Order/OrdersDisplay";
import getAllOrders from "@/app/actions/getAllOrders";

const page = async () => {
  const allOrders = await getAllOrders();
  return <OrdersDisplay allOrders={allOrders?.data?.result} />;
};

export default page;
