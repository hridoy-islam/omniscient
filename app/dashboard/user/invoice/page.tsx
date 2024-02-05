import React from "react";
import UserInvoice from "../../_components/UserPanel/UserInvoice/UserInvoice";
import getInvoiceById from "@/app/actions/getInvoiceById";

const page = async (context: any) => {
  const pageNumber = Number(context?.searchParams?.page) || 1;

  const invoices = await getInvoiceById(pageNumber);
  return <UserInvoice invoices={invoices} />;
};

export default page;
