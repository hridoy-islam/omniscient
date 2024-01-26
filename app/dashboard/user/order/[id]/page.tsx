import getOrderById from "@/app/actions/getOrderById";
import SingleOrderView from "@/app/dashboard/_components/Order/SingleOrderView";
import UserSingleOrderView from "@/app/dashboard/_components/UserPanel/Order/UserSingleOrderView";

interface PageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const id = params?.id;

  let order;
  if (id) {
    order = await getOrderById(id);
  }

  return <UserSingleOrderView order={order?.data} />;
};

export default Page;
