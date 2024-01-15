"use client";
import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
import ViewButton from "@/components/ViewButton";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname, useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  const pathName = usePathname();
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
        <table className="table-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Powerd By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Something Product</td>
              <td>$292</td>
              <td>Intel</td>
              <td>
                <Button
                  className="bg-primary text-white text-md"
                  onClick={() => router.push(`${pathName}/edit/1`)}
                >
                  <Icon icon="uil:edit" className="text-lg" />
                  <span>Edit</span>
                </Button>

                <Button
                  onClick={() => router.push(`${pathName}/1`)}
                  className="text-primary border-primary border-1 bg-white ml-2 px-3 text-md"
                >
                  <Icon icon="solar:eye-linear" className="text-lg" />
                  <span>View</span>
                </Button>
                <DeleteButton />
              </td>
            </tr>
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
