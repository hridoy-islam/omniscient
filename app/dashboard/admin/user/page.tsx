"use client";
import { Avatar, Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Icon } from "@iconify/react";
export default function Page() {
  return (
    <div>
      <Card>
        <CardHeader>
          <h2>All User</h2>
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
                  <Button>View</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}
