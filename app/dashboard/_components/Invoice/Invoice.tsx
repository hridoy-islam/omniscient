"use client";
import React, { useState } from "react";
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
import Image from "next/image";
import Logo from "/public/logo.png";
import moment from "moment";

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

  // State variables for the selected invoice
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  // Function to open the modal and set the selected invoice
  const openModal = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    onOpen();
  };

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
                      <td>{moment(invoice?.createdAt).format("LL")}</td>

                      <td>
                        <EditButton />
                        <Button
                          onPress={() => openModal(invoice)}
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
                      <td>{moment(invoice?.createdAt).format("LL")}</td>
                      <td>
                        <EditButton />
                        <Button
                          onPress={() => openModal(invoice)}
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
                      <td>{moment(invoice?.createdAt).format("LL")}</td>
                      <td className="flex">
                        <EditButton />
                        <Button
                          onPress={() => openModal(invoice)}
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

      <Pagination />
      <Modal
        size="3xl"
        className="mt-[300px]"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <div
                  className="p-6 bg-white rounded shadow-sm my-6 "
                  id="invoice"
                >
                  <div className="grid grid-cols-2 items-center">
                    <div>
                      <Image
                        src={Logo}
                        alt="company-logo"
                        className="h-auto w-24"
                        width={100}
                        height={100}
                      />
                    </div>

                    <div className="text-right">
                      <p>Tailwind Inc.</p>
                      <p className="text-gray-500 text-sm">
                        sales@tailwindcss.com
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        +41-442341232
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        VAT: 8657671212
                      </p>
                    </div>
                  </div>

                  {/* <!-- Client info --> */}
                  <div className="grid grid-cols-2 items-center mt-8">
                    <div>
                      <p className="font-bold text-gray-800">Bill to :</p>
                      <p className="text-gray-500">
                        Laravel LLC.
                        <br />
                        102, San-Fransico, CA, USA
                      </p>
                      <p className="text-gray-500">info@laravel.com</p>
                    </div>

                    <div className="text-right">
                      <p className="">
                        Invoice number:
                        <span className="text-gray-500">INV-2023786123</span>
                      </p>
                      <p>
                        Invoice date:{" "}
                        <span className="text-gray-500">03/07/2023</span>
                        <br />
                        Due date:
                        <span className="text-gray-500">31/07/2023</span>
                      </p>
                    </div>
                  </div>

                  {/* <!-- Invoice Items --> */}
                  <div className="-mx-4 mt-8 flow-root sm:mx-0">
                    <table className="min-w-full">
                      <colgroup>
                        <col className="w-full sm:w-1/2" />
                        <col className="sm:w-1/6" />
                        <col className="sm:w-1/6" />
                        <col className="sm:w-1/6" />
                      </colgroup>
                      <thead className="border-b border-gray-300 text-gray-900">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                          >
                            Items
                          </th>
                          <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                          >
                            Qty
                          </th>
                          <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                          >
                            Rate
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
                          >
                            Tax
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
                          >
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedInvoice?.information?.map(
                          (invoice: any, index: number) => (
                            <tr
                              key={index}
                              className="border-b border-gray-200"
                            >
                              <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                                <div className="font-medium text-gray-900">
                                  {invoice?.item}
                                </div>
                              </td>
                              <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                                {invoice?.quantity}
                              </td>
                              <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                                ${invoice?.rate}
                              </td>
                              <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                                {invoice?.tax}%
                              </td>
                              <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                                ${invoice?.amount}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th
                            scope="row"
                            colSpan={4}
                            className="hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                          >
                            Sub - total
                          </th>
                          <th
                            scope="row"
                            className="pl-6 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden"
                          >
                            Subtotal
                          </th>
                          <td className="pl-3 pr-6 pt-6 text-right text-sm text-gray-500 sm:pr-0">
                            $10,500.00
                          </td>
                        </tr>

                        <tr>
                          <th
                            scope="row"
                            colSpan={4}
                            className="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                          >
                            Discount
                          </th>
                          <th
                            scope="row"
                            className="pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
                          >
                            Discount
                          </th>
                          <td className="pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0">
                            - 10%
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            colSpan={4}
                            className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
                          >
                            Total
                          </th>
                          <th
                            scope="row"
                            className="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
                          >
                            Total
                          </th>
                          <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                            $11,550.00
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            colSpan={4}
                            className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
                          >
                            Total Payment
                          </th>
                          <th
                            scope="row"
                            className="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
                          >
                            Total
                          </th>
                          <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                            $11,550.00
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            colSpan={4}
                            className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
                          >
                            Total Due
                          </th>
                          <th
                            scope="row"
                            className="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
                          >
                            Total
                          </th>
                          <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                            $11,550.00
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  {/* <!--  Footer  --> */}
                  <div className="border-t-2 pt-4 text-xs text-gray-500 text-center mt-16">
                    Please pay the invoice before the due date. You can pay the
                    invoice by logging in to your account from our client
                    portal.
                  </div>
                </div>

                {/* <!-- <button type="button" id="btn" className="">Print</button> --> */}
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Invoice;
