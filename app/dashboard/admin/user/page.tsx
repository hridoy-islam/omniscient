"use client";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";
import ViewButton from "@/components/ViewButton";
import { Icon } from "@iconify/react";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      <Card>
        <CardHeader className="flex justify-between tableHeader">
          <h2>All User</h2>

          <Link
            className="text-white bg-primary px-3 py-2 rounded-md flex"
            href="/dashboard/admin/user/create"
          >
            <Icon icon="ic:round-plus" width={24} /> Add User
          </Link>
        </CardHeader>
        <CardBody>
          <table className="table-fixed">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email Address</th>
                <th>City</th>
                <th>Country</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center">
                    <Avatar
                      className="w-6 h-6"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    />
                    <span>The Sliding</span>
                  </div>
                </td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
                <td>1961</td>
                <td>1961</td>
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
    </div>
  );
}
