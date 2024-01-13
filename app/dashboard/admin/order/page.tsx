"use client";

import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import ViewButton from "@/components/ViewButton";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";

export default function Page() {
  return (
    <Card>
      <CardHeader className="tableHeader">
        <h2>Orders</h2>
      </CardHeader>
      <CardBody>
        <table className="table-fixed">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>User</th>
              <th>Payment</th>
              <th>status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Invoice-0019</td>
              <td>Something Product</td>
              <td>
                <div className="flex items-center">
                  <Avatar
                    className="w-6 h-6"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  />
                  <span>The Sliding</span>
                </div>
              </td>
              <td>$899</td>
              <td>Approved</td>
              <td>1912</td>
              <td>
                <EditButton />
                <ViewButton />
                <DeleteButton />
              </td>
            </tr>
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
