"use client";
import React from "react";
// import DeleteButton from "@/components/DeleteButton";
import { Button, Card, Chip } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { DecodedToken, Product } from "@/utils/interfaces";
import Image from "next/image";
import intel from "/public/intel.png";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";

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

  const cookies = new Cookies();
  const token = cookies.get("jwt");
  const decoded: DecodedToken = jwtDecode(token) as DecodedToken;
  const userId = decoded?._id;

  const handleAddToCart = async () => {
    try {
      const response = await Axios.post(
        "/orders",
        {
          userid: userId,
          productid: _id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response?.data?.message);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <Card className="p-4 space-y-3">
      <Chip className="bg-primaryLight text-primary">Basic Mining</Chip>

      <div className="bg-primaryLight rounded-xl p-4 flex justify-between items-center">
        <p className="text-5xl font-bold">${price}</p>
        <div>
          <p className="text-sm">Powerd By</p>
          {photo ? (
            <Image
              width={100}
              height={100}
              className="h-14 w-auto object-cover"
              src={photo}
              alt="powerdby"
            />
          ) : (
            <Image
              width={100}
              height={100}
              className="h-14 w-auto object-cover"
              src={intel}
              alt="powerdby"
            />
          )}
        </div>
      </div>

      <div className="productview">
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
      </div>

      <Button onClick={handleAddToCart} className="btn-basic w-full rounded-md">
        Add To Cart
      </Button>
    </Card>
  );
};

export default SingleProductView;
