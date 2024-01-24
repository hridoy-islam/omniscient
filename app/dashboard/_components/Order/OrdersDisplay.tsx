"use client";

// OrdersDisplay.tsx

import { Button, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import ViewButton from "@/components/ViewButton";
import DeleteButton from "@/components/DeleteButton";
import { Order } from "@/utils/interfaces";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

interface OrdersDisplayProps {
  allOrders: Order[];
}

const OrdersDisplay: React.FC<OrdersDisplayProps> = ({ allOrders }) => {
  // console.log("all orders", allOrders);
  return (
    <Card>
      <CardHeader className="tableHeader">
        <h2>Orders</h2>
      </CardHeader>
      <CardBody>
        <table className="table-fixed">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>User</th>
              {/* <th>Payment</th> */}
              <th>Status</th>
              {/* <th>Date</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allOrders?.map((order) => (
              <tr key={order._id}>
                <td>{order?.productid?.title}</td>
                <td>{order?.userid?.email}</td>
                {/* Add more fields based on your order structure */}
                {/* <td>{order.createdAt}</td> */}
                {/* <td>Render payment info</td> */}
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
                  <Link href={`/dashboard/admin/order/${order?._id}`}>
                    <Button className="text-primary border-primary border-1 bg-white ml-2 px-3 text-md">
                      <Icon icon="solar:eye-linear" className="text-lg" />
                      <span>View</span>
                    </Button>
                  </Link>
                  <DeleteButton label="orders" id={order._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default OrdersDisplay;
