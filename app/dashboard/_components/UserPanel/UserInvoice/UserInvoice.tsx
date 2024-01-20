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
import DownloadInvoiceButton from "@/components/DownloadInvoiceButton";
const UserInvoice = () => {
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
          <Tab key="bill" title="Bill Invoices">
            <Card>
              <CardHeader className="tableHeader">
                <div>
                  <h2>All Bill Invoices</h2>
                </div>
              </CardHeader>
              <CardBody>
                <table className="table-fixed">
                  <thead>
                    <tr>
                      <th>Invoice Number</th>
                      <th>Amount</th>
                      <th>User</th>
                      <th>Created On</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Invoice-0019</td>
                      <td>$292</td>
                      <td>
                        <div className="flex items-center">
                          <Avatar
                            className="w-6 h-6"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                          />
                          <span>The Sliding</span>
                        </div>
                      </td>
                      <td>1961</td>
                      <td>
                        <div className="flex gap-3">
                          <ViewButton />
                          <DownloadInvoiceButton />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="addon" title="Add-ons Invoice">
            <Card>
              <CardHeader className="tableHeader">
                <div>
                  <h2>Add On Invoices</h2>
                </div>
              </CardHeader>
              <CardBody>
                <table className="table-fixed">
                  <thead>
                    <tr>
                      <th>Invoice Number</th>
                      <th>Amount</th>
                      <th>User</th>
                      <th>Created On</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Invoice-0019</td>
                      <td>$292</td>
                      <td>
                        <div className="flex items-center">
                          <Avatar
                            className="w-6 h-6"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                          />
                          <span>The Sliding</span>
                        </div>
                      </td>
                      <td>1961</td>
                      <td>
                        <div className="flex gap-3">
                          <ViewButton />
                          <DownloadInvoiceButton />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="rigs" title="Rigs Invoice">
            <Card>
              <CardHeader className="tableHeader">
                <div>
                  <h2>Rigs Invoices</h2>
                </div>
              </CardHeader>
              <CardBody>
                <table className="table-fixed">
                  <thead>
                    <tr>
                      <th>Invoice Number</th>
                      <th>Amount</th>
                      <th>User</th>
                      <th>Created On</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Invoice-0019</td>
                      <td>$292</td>
                      <td>
                        <div className="flex items-center">
                          <Avatar
                            className="w-6 h-6"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                          />
                          <span>The Sliding</span>
                        </div>
                      </td>
                      <td>1961</td>
                      <td>
                        <div className="flex gap-3">
                          <ViewButton />
                          <DownloadInvoiceButton />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>

        <Pagination />
      </div>
    </div>
  );
};

export default UserInvoice;
