"use client";

import React from "react";
import { Card, CardBody, CardHeader, Chip, Button } from "@nextui-org/react";
import Link from "next/link";
import ViewButton from "@/components/ViewButton";
const Order = () => {
  return (
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
              <th>Order ID</th>
              <th>Product</th>
              <th>Payment</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Invoice-0019</td>
              <td>$292</td>
              <td>$292</td>
              <td>1961</td>
              <td>$292</td>
              <td>
                <Link href="/dashboard/user/order/1">
                  <ViewButton />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default Order;
