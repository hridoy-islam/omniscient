"use client";
import React from "react";
import DeleteButton from "@/components/DeleteButton";
import { Button, Card, Chip } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Product } from "@/utils/interfaces";

interface SingleProductViewProps {
  product: Product;
}

const SingleProductView = ({ product }: SingleProductViewProps) => {
  const {
    motherboard,
    graphicscard,
    photo,
    powerdby,
    price,
    processor,
    ram,
    smps,
    title,
    _id,
  } = product;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
      <Card className="p-4">
        <div className="flex gap-4 my-3">
          <Chip className="bg-primaryLight text-primary">Default</Chip>
          <h2 className="text-2xl">${price}</h2>
        </div>
        <div className="productview">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="w-12">
                  <Icon
                    icon="mdi:check-bold"
                    className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                  />
                </td>
                <td className="w-30">Name</td>
                <td>{title}</td>
              </tr>
              <tr>
                <td className="w-12">
                  <Icon
                    icon="mdi:check-bold"
                    className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                  />
                </td>
                <td className="w-30">Motherboard</td>
                <td>{motherboard}</td>
              </tr>
              <tr>
                <td className="w-12">
                  <Icon
                    icon="mdi:check-bold"
                    className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                  />
                </td>
                <td className="w-30">Processor</td>
                <td>{processor}</td>
              </tr>
              <tr>
                <td className="w-12">
                  <Icon
                    icon="mdi:check-bold"
                    className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                  />
                </td>
                <td className="w-30">Ram</td>
                <td>{ram}</td>
              </tr>
              <tr>
                <td className="w-12">
                  <Icon
                    icon="mdi:check-bold"
                    className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                  />
                </td>
                <td className="w-30">Graphics Card</td>
                <td>{graphicscard}</td>
              </tr>
              <tr>
                <td className="w-12">
                  <Icon
                    icon="mdi:check-bold"
                    className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                  />
                </td>
                <td className="w-30">Powered By</td>
                <td>{powerdby}</td>
              </tr>
              <tr>
                <td className="w-12">
                  <Icon
                    icon="mdi:check-bold"
                    className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                  />
                </td>
                <td className="w-30">SMPS</td>
                <td>{smps}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className="flex gap-3 my-2">
          <Button className="flex-1 w-full btn-basic">
            <Icon icon="uil:edit" className="text-lg" /> Edit
          </Button>
          <div className="flex-1">
            <DeleteButton label="products" id={_id} />
          </div>
        </div> */}
      </Card>
    </div>
  );
};

export default SingleProductView;
