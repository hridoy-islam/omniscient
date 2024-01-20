"use client";
import { Avatar, Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";
import ViewButton from "@/components/ViewButton";
import { UserData } from "@/utils/interfaces";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";

interface ApiResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  result: UserData[];
}

interface UserProps {
  allUsers: ApiResponse;
}

export default function User({ allUsers }: UserProps) {
  const usersList = allUsers?.result;
  // console.log("user id", allUsers?.result);
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
                      <span>
                        {user?.personal_information?.firstName}{" "}
                        {user?.personal_information?.lastName}
                      </span>
                    </div>
                  </td>
                  <td>+987438438</td>
                  <td>{user?.email}</td>
                  <td>{user?.contact_information?.city}</td>
                  <td>{user?.contact_information?.country}</td>
                  <td className="flex">
                    <EditButton userId={user?._id} />
                    <ViewButton userId={user?._id} />
                    <DeleteButton label="users" id={user?._id} />
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
