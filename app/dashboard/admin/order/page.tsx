import React from "react";
import OrdersDisplay from "../../_components/Order/OrdersDisplay";
import getAllOrders from "@/app/actions/getAllOrders";

const page = async (context: any) => {
  const pageNumber = Number(context?.searchParams?.page) || 1;
  const allOrders = await getAllOrders(pageNumber);
  console.log(allOrders?.data)
  return <OrdersDisplay response={allOrders?.data} />;
};

export default page;
