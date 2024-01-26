import React from "react";
import UserInvoice from "../../_components/UserPanel/UserInvoice/UserInvoice";
import getInvoiceById from "@/app/actions/getInvoiceById";

const page = async () => {
  const invoices = await getInvoiceById();
  return <UserInvoice invoices={invoices} />;
};

export default page;
