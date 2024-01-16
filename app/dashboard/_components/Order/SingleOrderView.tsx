"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Product, UserData } from "@/utils/interfaces";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";

interface SingleOrderViewProps {
  order: {
    _id: string;
    createdAt: any;
    status: string;
    productid: Product;
    userid: UserData;
  };
}

const SingleOrderView = ({ order }: SingleOrderViewProps) => {
  const DecisionStatus = ["pending", "approve", "decline"];
  const { _id, createdAt, productid, status } = order;
  const {
    motherboard,
    graphicscard,
    photo,
    price,
    powerdby,
    processor,
    ram,
    smps,
    title,
  } = productid;

  const [selectedStatus, setSelectedStatus] = useState(status);

  const handleStatusChange = async () => {
    // console.log(selectedStatus);
    try {
      const response = await Axios.patch(`/orders/${_id}`, {
        status: selectedStatus,
      });
      toast.success(response?.data?.message);
    } catch (error) {
      toast.error("Failed to update status");
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="flex gap-8">
      <div className="w-9/12">
        <div>
          <h2 className="my-4 font-bold text-2xl">Order Details</h2>
          <Card>
            <CardBody>
              <table className="productview">
                <tbody>
                  <tr>
                    <td className="w-20">Order ID</td>
                    <td className="w-5">:</td>
                    <td>{_id}</td>
                  </tr>
                  <tr>
                    <td>Date</td>
                    <td>:</td>
                    <td>{createdAt}</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>:</td>
                    <td>{status}</td>
                  </tr>
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div>

        <div>
          <h2 className="my-4 font-bold text-2xl">Product Details</h2>
          <Card className="p-4 space-y-3">
            <div className="flex items-center gap-5">
              <Chip className="bg-primaryLight text-primary">{processor}</Chip>
              <p className="text-xl font-bold">${price}</p>
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
          </Card>
        </div>
      </div>
      <div className="w-3/12">
        <Card className="mt-16 p-3">
          <CardHeader>
            <p>Order Summery</p>
          </CardHeader>
          <CardBody>
            <div className="flex justify-between">
              <h2>Basic Mining</h2>
              <p>$500</p>
            </div>

            <div className="flex justify-between border-t border-stroke mt-4 pt-4">
              <h2>Total</h2>
              <p>$500</p>
            </div>
          </CardBody>
        </Card>

        <Card className="mt-6 p-3">
          <CardHeader>
            <p>Change Order Status</p>
          </CardHeader>
          <CardBody>
            <Select
              placeholder="Change Status"
              value={selectedStatus}
              onChange={(event) => setSelectedStatus(event.target.value)}
              aria-label="Select Order Status"
            >
              {DecisionStatus.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </Select>

            <Button
              onClick={handleStatusChange}
              className="btn-basic w-16 rounded-lg my-4"
            >
              Update
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default SingleOrderView;
