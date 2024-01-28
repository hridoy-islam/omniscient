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
import { UserData } from "@/utils/interfaces";

import html2pdf from "html2pdf.js";

interface Invoice {
  _id: string;
  invoiceId: string;
  category: string;
  userid: UserData;
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

const generatePDF = () => {
  const element = document.getElementById("invoice");

  var options = {
    margin: 0,
    filename: "invoice.pdf",
    image: { type: "jpeg", quality: 0.2 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "in", format: "a4", orientation: "p" },
  };

  html2pdf(element, options);
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
                      <td>
                        ${calculateTotalAmount(invoice?.information || 0)}
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <Avatar
                            className="w-6 h-6"
                            src={invoice?.userid?.personal_information?.photo}
                          />
                          <span>
                            {invoice?.userid?.personal_information?.firstName}{" "}
                            {invoice?.userid?.personal_information?.lastName}
                          </span>
                        </div>
                      </td>
                      <td>{moment(invoice?.createdAt).format("LL")}</td>

                      <td className="flex gap-2">
                        <Button
                          onPress={() => openModal(invoice)}
                          className="text-primary border-primary border-1 bg-white ml-2 px-3 text-md"
                        >
                          <Icon icon="solar:eye-linear" className="text-lg" />
                          <span>View</span>
                        </Button>{" "}
                        <Button
                          onPress={() => openModal(invoice)}
                          className="flex items-center text-purple border border-purple bg-transparent text-lg"
                        >
                          <Icon
                            icon="material-symbols-light:download"
                            width={27}
                          />{" "}
                          Download
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
                      <td>
                        ${calculateTotalAmount(invoice?.information || 0)}
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <Avatar
                            className="w-6 h-6"
                            src={invoice?.userid?.personal_information?.photo}
                          />
                          <span>
                            {invoice?.userid?.personal_information?.firstName}{" "}
                            {invoice?.userid?.personal_information?.lastName}
                          </span>
                        </div>
                      </td>
                      <td>{moment(invoice?.createdAt).format("LL")}</td>

                      <td>
                        <Button
                          onPress={() => openModal(invoice)}
                          className="text-primary border-primary border-1 bg-white ml-2 px-3 text-md"
                        >
                          <Icon icon="solar:eye-linear" className="text-lg" />
                          <span>View</span>
                        </Button>{" "}
                        <Button
                          onPress={() => openModal(invoice)}
                          className="flex items-center text-purple border border-purple bg-transparent text-lg"
                        >
                          <Icon
                            icon="material-symbols-light:download"
                            width={27}
                          />{" "}
                          Download
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
                      <td>
                        ${calculateTotalAmount(invoice?.information || 0)}
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <Avatar
                            className="w-6 h-6"
                            src={invoice?.userid?.personal_information?.photo}
                          />
                          <span>
                            {invoice?.userid?.personal_information?.firstName}{" "}
                            {invoice?.userid?.personal_information?.lastName}
                          </span>
                        </div>
                      </td>
                      <td>{moment(invoice?.createdAt).format("LL")}</td>

                      <td>
                        <Button
                          onPress={() => openModal(invoice)}
                          className="text-primary border-primary border-1 bg-white ml-2 px-3 text-md"
                        >
                          <Icon icon="solar:eye-linear" className="text-lg" />
                          <span>View</span>
                        </Button>{" "}
                        <Button
                          onPress={() => openModal(invoice)}
                          className="flex items-center text-purple border border-purple bg-transparent text-lg"
                        >
                          <Icon
                            icon="material-symbols-light:download"
                            width={27}
                          />{" "}
                          Download
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

      {/* <Pagination /> */}
      <Modal
        size="3xl"
        className="mt-[300px]"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 "></ModalHeader>
              <ModalBody>
                <div
                  className="p-6 bg-white rounded shadow-sm my-6 "
                  id="invoice"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div>
                      <Image
                        src={Logo}
                        alt="company-logo"
                        className="h-auto w-40 object-cover"
                        width={100}
                        height={100}
                      />
                    </div>

                    <div className="mt-6 md:mt-0">
                      <div className="flex md:justify-end gap-8">
                        <div className="border-r-2 border-primary pr-6">
                          <p>Date</p>
                          {moment(selectedInvoice?.createdAt).format("LL")}
                        </div>

                        <div>
                          <p>Invoice</p>
                          <p>INV - {selectedInvoice?.invoiceId}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Client info --> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-8">
                    <div>
                      <p className="font-bold text-gray-800">Street Name</p>
                      <p className="text-gray-500">
                        Laravel LLC.
                        <br />
                        102, San-Fransico, CA, USA
                      </p>
                    </div>

                    <div className="md:text-right mt-5 md:mt-0">
                      <p className="">User Info</p>
                      <p className="font-normal text-gray-400">
                        {
                          selectedInvoice?.userid?.personal_information
                            ?.firstName
                        }{" "}
                        {
                          selectedInvoice?.userid?.personal_information
                            ?.lastName
                        }
                      </p>
                      <p className="font-normal text-gray-400">
                        {selectedInvoice?.userid?.contact_information?.address},
                        {selectedInvoice?.userid?.contact_information?.city},
                        {selectedInvoice?.userid?.contact_information?.country}
                      </p>
                      <p className="font-normal text-gray-400">
                        Phone:{" "}
                        {selectedInvoice?.userid?.personal_information?.phone}
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
                            $
                            {selectedInvoice &&
                              calculateTotalAmount(
                                selectedInvoice?.information
                              )}
                          </td>
                        </tr>

                        {/* <tr>
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
                        </tr> */}
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
                            $
                            {selectedInvoice &&
                              calculateTotalAmount(
                                selectedInvoice?.information
                              )}
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
                            $0
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  {/* <!--  Footer  --> */}
                  <div className="border-t pt-4 flex justify-between items-center mt-16">
                    <div>
                      {" "}
                      <Image
                        src={Logo}
                        alt="company-logo"
                        className="h-auto w-24 object-cover"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:border-r md:pr-4">mail@robofx.com</div>
                      <div>+1 000 0000000000</div>
                    </div>
                  </div>
                </div>

                {/* <!-- <button type="button" id="btn" className="">Print</button> --> */}
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={generatePDF}
                  className="flex items-center text-purple border border-purple bg-transparent text-lg"
                >
                  <Icon icon="material-symbols-light:download" width={27} />{" "}
                  Download
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Invoice;
