import React from "react";
import getAllProducts from "@/app/actions/getAllProducts";
import Product from "../../_components/UserPanel/Product/Product";
import getOrdersForSpecificUser from "@/app/actions/getOrdersForSpecificUser";

const Page = async () => {
  const allProducts = await getAllProducts();
  const allOrders = await getOrdersForSpecificUser();
  return (
    <Product
      products={allProducts?.data?.result}
      orders={allOrders?.data?.result}
    />
  );
};

export default Page;
