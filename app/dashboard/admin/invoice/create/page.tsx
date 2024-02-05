import getAllUsers from "@/app/actions/getAllUsers";
import InvoiceCrationFrom from "@/app/dashboard/_components/Invoice/InvoiceCrationFrom";

const page = async (context: any) => {
  const pageNumber = Number(context?.searchParams?.page) || 1;

  const allUsers = await getAllUsers(pageNumber);
  return <InvoiceCrationFrom allUsers={allUsers?.data?.result} />;
};

export default page;
