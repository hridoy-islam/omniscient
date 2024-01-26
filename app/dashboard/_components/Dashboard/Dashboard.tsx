"use client";
import ViewButton from "@/components/ViewButton";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Tooltip,
} from "@nextui-org/react";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { OrderInterface, UserData } from "@/utils/interfaces";
import moment from "moment";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

interface DashboardProps {
  allUsers: UserData[];
  allOrders: OrderInterface[];
}

const Dashboard = ({ allUsers, allOrders }: DashboardProps) => {
  const router = useRouter();
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const user = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const rigs = [
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Card>
          <CardHeader>
            <div className="">
              <div className="">
                <p className="text-textLight">Total Users</p>
                <h2 className="text-4xl">{allUsers?.length}</h2>
              </div>

              <ResponsiveContainer width={400} height={100}>
                <AreaChart
                  data={data}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: 10,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="">
              <div>
                <p className="text-textLight">New Users</p>
                <h2 className="text-4xl">{allUsers?.length}</h2>
              </div>
              <ResponsiveContainer width={400} height={100}>
                <AreaChart
                  data={user}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: 10,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <Area type="monotone" dataKey="pv" stroke="red" fill="red" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="">
              <div>
                <p className="text-textLight">Total Rigs</p>
                <h2 className="text-4xl">38</h2>
              </div>
              <ResponsiveContainer width={400} height={100}>
                <AreaChart
                  data={rigs}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: 10,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardHeader>
        </Card>
      </div>
      <div className="my-10">
        <Card>
          <CardHeader className="tableHeader">
            <h2>Users</h2>
            <Button
              onClick={() => {
                router.push("/dashboard/admin/user");
              }}
              className="text-primary bg-white border-primary border rounded-md"
            >
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
                {allUsers?.slice(0, 3)?.map((user, index) => (
                  <tr key={index}>
                    <td>
                      <div className="flex items-center gap-2">
                        <Avatar
                          className="w-6 h-6"
                          src={user?.personal_information?.photo}
                        />
                        {user?.personal_information?.firstName}{" "}
                        {user?.personal_information?.lastName}
                      </div>
                    </td>
                    <td>{user?.personal_information?.phone}</td>
                    <td>{user?.email}</td>
                    <td>{user?.contact_information?.city}</td>
                    <td>{user?.contact_information?.country}</td>
                    <td>
                      <ViewButton userId={user?._id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>

      <div className="my-10">
        <Card>
          <CardHeader className="tableHeader">
            <h2>Orders</h2>
            <Button
              onClick={() => {
                router.push("/dashboard/admin/order");
              }}
              className="text-primary bg-white border-primary border rounded-md"
            >
              View All
            </Button>
          </CardHeader>
          <CardBody>
            <table className="table-auto">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>User</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allOrders?.slice(0, 3)?.map((order, index) => (
                  <tr key={index}>
                    <td>{order?.productid?.title}</td>

                    <td>
                      <div className="flex items-center gap-2">
                        <Avatar
                          className="w-6 h-6"
                          src={order?.userid?.personal_information?.photo}
                        />
                        <span>
                          {order?.userid?.personal_information?.firstName}{" "}
                          {order?.userid?.personal_information?.lastName}
                        </span>
                      </div>
                    </td>

                    <td>${order?.productid?.price}</td>
                    <td>{order?.status}</td>
                    <td>{moment(order?.createdAt).format("LL")}</td>
                    <td>
                      <Link href={`/dashboard/admin/order/${order?._id}`}>
                        <Button className="text-primary border-primary border-1 bg-white ml-2 px-3 text-md">
                          <Icon icon="solar:eye-linear" className="text-lg" />
                          <span>View</span>
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
