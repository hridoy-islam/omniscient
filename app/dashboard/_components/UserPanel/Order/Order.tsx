"use client";

import React, { useState } from "react";
import { Card, CardBody, CardHeader, Chip, Button } from "@nextui-org/react";
import Link from "next/link";
import ViewButton from "@/components/ViewButton";
import { OrderInterface } from "@/utils/interfaces";
import { Icon } from "@iconify/react/dist/iconify.js";
import moment from "moment";
import Pagination from "@/components/Pagination";
import { useSearchParams } from "next/navigation";

interface OrderProps {
  orders: OrderInterface[];
  totalPage: any;
}

const Order = ({ orders, totalPage }: OrderProps) => {
  return (
    <>
      <Card>
        <CardHeader className="tableHeader">
          <div>
            <h2>Orders</h2>
          </div>
        </CardHeader>
        <CardBody>
          <table className="table-fixed">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>User</th>
                {/* <th>Payment</th> */}
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => (
                <tr key={order._id}>
                  <td>{order?.productid?.title}</td>
                  <td>{order?.userid?.email}</td>
                  <td>{moment(order?.createdAt).format("ll")}</td>
                  <td>
                    <Chip
                      color={
                        order?.status === "approved"
                          ? "success"
                          : order?.status === "pending"
                          ? "warning"
                          : "danger"
                      }
                    >
                      {order?.status}
                    </Chip>
                  </td>
                  <td className="flex">
                    <Link href={`/dashboard/user/order/${order?._id}`}>
                      <Button className="text-primary border-primary border-1 bg-white ml-2 px-3 text-md">
                        <Icon icon="solar:eye-linear" className="text-lg" />
                        <span>View</span>
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
};

export default Order;
