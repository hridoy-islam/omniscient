"use client";
import ViewButton from "@/components/ViewButton";
import { Avatar, Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import axios from "axios";

async function getUserData() {
  // try {
  //   const res = await axios.get(`${process.env.API_URL}/users`);
  //   const user = res.data;
  //   return { user };
  // } catch (error) {
  //   return { error };
  // }
  async function getData() {
    const options = { credentials: true };
    const res = await fetch(`http://localhost:3000/api/users`, options);

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
}

export default async function Page() {
  const data = await getUserData();
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        <Card>
          <CardHeader>
            <p>Total Users</p>
            <h2>241</h2>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <p>New Users</p>
            <h2>48</h2>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <p>Total Rigs</p>
            <h2>38</h2>
          </CardHeader>
        </Card>
      </div>
      <div className="my-10">
        <Card>
          <CardHeader className="flex justify-between">
            <h2>Users</h2>
            <Button className="text-primary bg-white border-primary border rounded-md">
              View All
            </Button>
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
                    <ViewButton />
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>

      <div className="my-10">
        <Card>
          <CardHeader className="flex justify-between">
            <h2>Orders</h2>
            <Button className="text-primary bg-white border-primary border rounded-md">
              View All
            </Button>
          </CardHeader>
          <CardBody>
            <table className="table-fixed">
              <thead className="bg-primary h-7 text-white">
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>User</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-12 text-md">
                  <td>RD-191918</td>
                  <td>Basic Mining</td>

                  <td>
                    <div className="flex items-center">
                      <Avatar
                        className="w-6 h-6"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                      />
                      <span>The Sliding</span>
                    </div>
                  </td>
                  <td>$900</td>
                  <td>Approved</td>
                  <td>1961</td>
                  <td>
                    <ViewButton />
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
