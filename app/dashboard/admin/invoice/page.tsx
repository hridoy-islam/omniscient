import getAllInvoices from "@/app/actions/getAllInvoices";
import Invoice from "../../_components/Invoice/Invoice";

const Page = async () => {
  const allInvoices = await getAllInvoices();
  // console.log("all data invoices", allInvoices?.data?.result);
  return (
    <div>
      <Invoice allInvoices={allInvoices} />
    </div>
  );
};

export default Page;
