import React from "react";
import getAllProducts from "@/app/actions/getAllProducts";
import Product from "../../_components/UserPanel/Product/Product";
import getOrdersForSpecificUser from "@/app/actions/getOrdersForSpecificUser";

const Page = async () => {
  const allProducts = await getAllProducts();
  const allOrders = await getOrdersForSpecificUser();
  // console.log(allOrders?.data?.result);
  return <Product products={allProducts?.data?.result} />;
};

export default Page;
