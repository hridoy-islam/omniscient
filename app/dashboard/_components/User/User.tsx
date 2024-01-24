"use client";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Link,
} from "@nextui-org/react";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";
import ViewButton from "@/components/ViewButton";
import { UserData } from "@/utils/interfaces";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

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
        <CardHeader className="tableHeader">
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
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email Address</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            {usersList?.map((user, id) => (
              <tbody key={id}>
                <tr>
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
                  <td>
                    <Chip
                      color={
                        user?.status === "pending"
                          ? "warning"
                          : user?.status === "approved"
                          ? "success"
                          : "danger"
                      }
                    >
                      {user?.status}
                    </Chip>
                  </td>
                  <td className="flex">
                    <EditButton userId={user?._id} />
                    <ViewButton userId={user?._id} />
                    <DeleteButton label="users" id={user?._id} />
                    <Button className="bg-secondary border border-black text-white mx-2">
                      Rigs
                    </Button>
                    <Button className="border border-purple text-purple bg-transparent">
                      Send Message
                    </Button>
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
