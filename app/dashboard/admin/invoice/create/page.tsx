import getAllUsers from "@/app/actions/getAllUsers";
import InvoiceCrationFrom from "@/app/dashboard/_components/Invoice/InvoiceCrationFrom";

const page = async () => {
  const allUsers = await getAllUsers();
  return <InvoiceCrationFrom allUsers={allUsers?.data?.result} />;
};

export default page;
