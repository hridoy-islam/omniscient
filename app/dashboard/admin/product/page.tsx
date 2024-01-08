"use client"
import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
import ViewButton from "@/components/ViewButton";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function Page() {
  return <Card>
  <CardHeader className="border-b border-stroke py-5">
      <h2>Products</h2>
    </CardHeader>
    <CardBody>
    <table className="table-fixed">
    <thead className="bg-primary h-7 text-white">
      <tr>
        <th>Product ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr className="h-12 text-md">
        <td>Invoice-0019</td>
        <td>Something Product</td>
        <td>$292</td>
        <td>
          <EditButton />
          <ViewButton />
          <DeleteButton />
        </td>
      </tr>
    </tbody>
  </table>
    </CardBody>
  </Card>;
}
