import getAllInvoices from "@/app/actions/getAllInvoices";
import Invoice from "../../_components/Invoice/Invoice";

const Page = async (context: any) => {
  const pageNumber = Number(context?.searchParams?.page) || 1;
  const allInvoices = await getAllInvoices(pageNumber);
  console.log(allInvoices);
  return (
    <div>
      <Invoice allInvoices={allInvoices} />
    </div>
  );
};

export default Page;
