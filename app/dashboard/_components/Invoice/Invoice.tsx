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
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

interface Invoice {
  _id: string;
  invoiceId: string;
  category: string;
  userid: string;
  information: Information[];
  createdAt: string;
  updatedAt: string;
}

interface Information {
  item: string;
  quantity: number;
  rate: string;
  tax: string;
  amount: string;
}

interface AllInvoicesResponse {
  success: boolean;
  message: string;
  data: {
    meta: {
      page: number;
      limit: number;
      total: number;
      totalPage: number;
    };
    result: Invoice[];
  };
}

interface InvoiceProps {
  allInvoices: AllInvoicesResponse;
}

const calculateTotalAmount = (information: Information[]) => {
  return information
    .reduce((total, info) => total + parseFloat(info.amount), 0)
    .toFixed(2);
};

const Invoice = ({ allInvoices }: InvoiceProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const invoices = allInvoices?.data?.result;

  // Separate invoices based on categories
  const billInvoices = invoices?.filter(
    (invoice) => invoice.category === "bill"
  );
  const addonInvoices = invoices?.filter(
    (invoice) => invoice.category === "addon"
  );
  const rigsInvoices = invoices?.filter(
    (invoice) => invoice.category === "rigs"
  );
  // console.log("bill", billInvoices);
  // console.log("addon", addonInvoices);
  // console.log("rigs", rigsInvoices);
  return (
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
              <div>
                <Link href="/dashboard/admin/invoice/create">
                  <Button className="btn-basic rounded-md">
                    <Icon icon="ic:round-plus" width={24} /> Create Invoice
                  </Button>
                </Link>
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
                  {billInvoices?.map((invoice, index) => (
                    <tr key={index}>
                      <td>{invoice?.invoiceId}</td>
                      <td>{calculateTotalAmount(invoice?.information || 0)}</td>
                      <td>
                        <div className="flex items-center gap-2">
                          <Avatar
                            className="w-6 h-6"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                          />
                          <span>The Sliding</span>
                        </div>
                      </td>
                      <td>{invoice?.createdAt}</td>
                      <td>
                        <EditButton />
                        <Button
                          onPress={onOpen}
                          className="text-primary border-primary border-1 bg-white ml-2 px-3 text-md"
                        >
                          <Icon icon="solar:eye-linear" className="text-lg" />
                          <span>View</span>
                        </Button>{" "}
                      </td>
                    </tr>
                  ))}
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
              <div>
                <Link href="/dashboard/admin/invoice/create">
                  <Button className="btn-basic rounded-md">
                    <Icon icon="ic:round-plus" width={24} /> Create Invoice
                  </Button>
                </Link>
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
                  {addonInvoices?.map((invoice, index) => (
                    <tr key={index}>
                      <td>{invoice?.invoiceId}</td>
                      <td>{calculateTotalAmount(invoice?.information || 0)}</td>
                      <td>
                        <div className="flex items-center gap-2">
                          <Avatar
                            className="w-6 h-6"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                          />
                          <span>The Sliding</span>
                        </div>
                      </td>
                      <td>{invoice?.createdAt}</td>
                      <td>
                        <EditButton />
                        <Button
                          onPress={onOpen}
                          className="text-primary border-primary border-1 bg-white ml-2 px-3 text-md"
                        >
                          <Icon icon="solar:eye-linear" className="text-lg" />
                          <span>View</span>
                        </Button>{" "}
                      </td>
                    </tr>
                  ))}
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
              <div>
                <Link href="/dashboard/admin/invoice/create">
                  <Button className="btn-basic rounded-md">
                    <Icon icon="ic:round-plus" width={24} /> Create Invoice
                  </Button>
                </Link>
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
                  {rigsInvoices?.map((invoice, index) => (
                    <tr key={index}>
                      <td>{invoice?.invoiceId}</td>
                      <td>{calculateTotalAmount(invoice?.information || 0)}</td>
                      <td>
                        <div className="flex items-center gap-2">
                          <Avatar
                            className="w-6 h-6"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                          />
                          <span>The Sliding</span>
                        </div>
                      </td>
                      <td>{invoice?.createdAt}</td>
                      <td>
                        <EditButton />
                        <Button
                          onPress={onOpen}
                          className="text-primary border-primary border-1 bg-white ml-2 px-3 text-md"
                        >
                          <Icon icon="solar:eye-linear" className="text-lg" />
                          <span>View</span>
                        </Button>{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Pagination />
    </div>
  );
};

export default Invoice;
