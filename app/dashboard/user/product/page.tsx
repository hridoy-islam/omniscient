import React from "react";
import getAllProducts from "@/app/actions/getAllProducts";
import Product from "../../_components/UserPanel/Product/Product";
import getOrdersForSpecificUser from "@/app/actions/getOrdersForSpecificUser";

const Page = async (context: any) => {
  const pageNumber = Number(context?.searchParams?.page) || 1;

  const allProducts = await getAllProducts(pageNumber);
  const allOrders = await getOrdersForSpecificUser(pageNumber);

  return (
    <Product
      productResponse={allProducts?.data}
      orderResponse={allOrders?.data}
    />
  );
};

export default Page;
