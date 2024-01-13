"use client";
import { Avatar, Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";
import ViewButton from "@/components/ViewButton";

interface User {
  _id: string;
  email: string;
  isDeleted: boolean;
  role: string;
  status: string;
}

interface ApiResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  result: User[];
}

interface UserProps {
  allUsers: ApiResponse;
}

export default function User({ allUsers }: UserProps) {
  const usersList = allUsers?.result;
  // console.log("All users data", allUsers?.result);
  return (
    <div>
      <Card>
        <CardHeader className="flex justify-between">
          <h2>All User</h2>

          <Link
            className="text-white bg-primary px-4 py-2 rounded-xl"
            href="/dashboard/admin/user/create"
          >
            Add User
          </Link>
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
            {usersList?.map((user, id) => (
              <tbody key={id}>
                <tr className="h-12 text-md">
                  <td>
                    <div className="flex items-center gap-2">
                      <Avatar
                        className="w-6 h-6"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                      />
                      <span>The Sliding</span>
                    </div>
                  </td>
                  <td>Malcolm Lockyer</td>
                  <td>{user?.email}</td>
                  <td>1961</td>
                  <td>1961</td>
                  <td>
                    <EditButton />
                    <ViewButton />
                    <DeleteButton />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </CardBody>
      </Card>
    </div>
  );
}
