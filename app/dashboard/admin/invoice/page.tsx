import getAllInvoices from "@/app/actions/getAllInvoices";
import Invoice from "../../_components/Invoice/Invoice";

const Page = async () => {
  const allInvoices = await getAllInvoices();
  return (
    <div>
      <Invoice allInvoices={allInvoices} />
    </div>
  );
};

export default Page;
