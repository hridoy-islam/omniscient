import React from "react";
import html2pdf from "html2pdf.js";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/react";
import { UserData } from "@/utils/interfaces";
import Image from "next/image";
import Logo from "/public/logo.png";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import moment from "moment";

const generatePDF = () => {
  const element = document.getElementById("pdf-content");
  html2pdf(element);
};

interface Invoice {
  _id: string;
  category: string;
  userid: UserData;
  invoiceId: string;
  information: Information[];
  createdAt: string;
  updatedAt: string;
}

interface Information {
  item: string;
  quantity: number;
  rate: string;
  tax: string;
  ammount: string;
}

interface UserInvoiceProps {
  invoice: Invoice;
}

const PDFGenerator = ({ invoice }: UserInvoiceProps) => {
  return (
    <Button
      onClick={generatePDF}
      className="flex items-center text-purple border border-purple bg-transparent text-lg"
    >
      <Icon icon="material-symbols-light:download" width={27} /> Download
    </Button>
  );
};

export default PDFGenerator;
