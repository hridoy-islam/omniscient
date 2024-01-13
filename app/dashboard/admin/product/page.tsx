"use client";
import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
import ViewButton from "@/components/ViewButton";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { Icon } from "@iconify/react";
export default function Page() {
  return (
    <Card>
      <CardHeader className="tableHeader">
        <div>
          <h2>Products</h2>
        </div>
        <div>
          <Link href="/dashboard/admin/product/create">
            <Button className="btn-basic rounded-md">
              <Icon icon="ic:round-plus" width={24} /> Add Product
            </Button>
          </Link>
        </div>
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
    </Card>
  );
}
