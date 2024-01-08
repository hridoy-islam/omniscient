"use client";
import { Avatar, Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";
import ViewButton from "@/components/ViewButton";
export default function Page() {
  return (
    <div>
      <Card>
        <CardHeader className="flex justify-between">
            <h2>All User</h2>
            
            <Link className="text-white bg-primary px-4 py-2 rounded-xl" href="/dashboard/admin/user/create">Add User</Link>
              

        </CardHeader>
        <CardBody>
          <table className="table-fixed">
            <thead className="bg-primary h-7 text-white">
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
              <tr className="h-12 text-md">
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
                  <ViewButton  />
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
