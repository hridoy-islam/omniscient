import React from "react";
import UserInvoice from "../../_components/UserPanel/UserInvoice/UserInvoice";
import getInvoiceById from "@/app/actions/getInvoiceById";

const page = async () => {
  const invoices = await getInvoiceById();
  console.log('user invoice', invoices)
  return <UserInvoice />;
};

export default page;
