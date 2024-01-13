"use client";
import React from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Avatar,
  Button,
} from "@nextui-org/react";
import ViewButton from "@/components/ViewButton";
import EditButton from "@/components/EditButton";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Page() {
  return (
    <div>
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="bordered"
          classNames={{
            tabList: "bg-white p-0 rounded-0 text-white",
            cursor: "w-full bg-primary",
            tab: "max-w-fit px-8 h-10",
            // tabContent: "group-data-[selected=true]:text-[#06b6d4]"
          }}
        >
          <Tab key="account" title="Account Settings">
            <Card>
              <CardHeader className="tableHeader">
                <div>
                  <h2>Primary Account</h2>
                </div>
              </CardHeader>
              <CardBody>
                <div className="grid grid-cols-2 gap-4 border-b-2 border-stroke pb-6">
                  <div className="flex items-center">
                    <h2 className="rounded-lg rounded-r-none bg-primary p-2 w-1/3 text-white text-center">Exchange</h2>
                    <h2 className="rounded-lg rounded-l-none bg-stroke p-2 w-2/3 text-textLight text-center">Coin Exchange</h2>
                  </div>

                  <div className="flex items-center">
                    <h2 className="rounded-lg rounded-r-none bg-primary p-2 w-1/3 text-white text-center">Wallet</h2>
                    <h2 className="rounded-lg rounded-l-none bg-stroke p-2 w-2/3 text-textLight text-center">USD</h2>
                  </div>
                  <div className="flex items-center">
                    <h2 className="rounded-lg rounded-r-none bg-primary p-2 w-1/3 text-white text-center">Exchange</h2>
                    <h2 className="rounded-lg rounded-l-none bg-stroke p-2 w-2/3 text-textLight text-center">Coin Exchange</h2>
                  </div>

                  <div className="flex items-center">
                    <h2 className="rounded-lg rounded-r-none bg-primary h-12 w-1/3 text-white text-center pt-2.5">Wallet</h2>
                    <select className="rounded-lg rounded-l-none bg-stroke h-12 outline-none w-2/3 text-textLight text-center">
                      <option value="">Choose Primary Account</option>
                    </select>
                  </div>

                </div>
              <div className="flex justify-between py-6 items-center">
                <div className="flex flex-col">
                  <label htmlFor="" className="text-xl font-semobold">Currency Type</label>
                  <select name="" className="roboinput w-60" id="" >
                    <option value="">$USD</option>
                  </select>
                </div>
                <div>
                  <Button className="btn-basic mr-3">Change</Button>
                  <Button className="border border-red text-red bg-transparent">Clear</Button>
                </div>
              </div>

              </CardBody>
            </Card>
          </Tab>
          <Tab key="walltet" title="Walltet">
            <Card>
              <CardHeader className="tableHeader">
                <div>
                  <h2>Walltet</h2>
                </div>
                <div>
                  <Link href="/dashboard/admin/invoice/create">
                    <Button className="btn-basic rounded-md">
                      <Icon icon="ic:round-plus" width={24} /> Add New
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardBody>
                <table className="table-fixed">
                  <thead>
                    <tr>
                      <th>Exchange</th>
                      <th>Wallet</th>
                      <th>Account Address</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Invoice-0019</td>
                      <td>$292</td>
                      <td>1961</td>
                      <td>
                        <EditButton />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
