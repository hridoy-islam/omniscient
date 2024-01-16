"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import Order from "../Order/Order";
import SingleProductView from "@/app/dashboard/_components/UserPanel/Product/SingleProductView";
import { Product } from "@/utils/interfaces";

interface ProductInterface {
  products: Product[];
}

const Product = ({ products }: ProductInterface) => {
//   console.log("orducts", products);
  return (
    <div>
      {/* <SingleProductView /> */}
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="bordered"
          classNames={{
            tabList: "bg-white p-0 rounded-0 text-white",
            cursor: "w-full bg-primary",
            tab: "max-w-fit px-8 h-10",
            // tabContent: "group-data-[selected=true]:text-[#06b6d4]"
          }}
        >
          <Tab key="items" title="Items">
            <div className="grid grid-cols-2 gap-6">
              {products?.map((product, index) => (
                <SingleProductView key={index} product={product} />
              ))}
            </div>
          </Tab>
          <Tab key="orders" title="Orders">
            <Order />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Product;
