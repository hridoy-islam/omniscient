"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import SingleProductView from "@/app/dashboard/_components/UserPanel/Product/SingleProductView";
import { OrderInterface, Product } from "@/utils/interfaces";
import Order from "../Order/Order";

interface ProductInterface {
  products: Product[];
  orders: OrderInterface[];
}

const Product = ({ products, orders }: ProductInterface) => {
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products?.map((product, index) => (
                <SingleProductView key={index} product={product} />
              ))}
            </div>
          </Tab>
          <Tab key="orders" title="Orders">
            <Order orders={orders} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Product;
