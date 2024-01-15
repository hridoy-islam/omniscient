"use client";
import ViewButton from "@/components/ViewButton";
import { Avatar, Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  // const [isClient, setIsClient] = useState(false);
  // console.log("is Client", isClient);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // const cookies = new Cookies();
  // const token = cookies.get("jwt");

  // console.log("here is the cookie", cookies.get("jwt"));
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
          <CardHeader className="tableHeader">
            <h2>Users</h2>
            <Button className="text-primary bg-white border-primary border rounded-md">
              View All
            </Button>
          </CardHeader>
          <CardBody>
            <table className="table-auto">
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
          <CardHeader className="tableHeader">
            <h2>Orders</h2>
            <Button className="text-primary bg-white border-primary border rounded-md">
              View All
            </Button>
          </CardHeader>
          <CardBody>
            <table className="table-auto">
              <thead>
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
                <tr>
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
