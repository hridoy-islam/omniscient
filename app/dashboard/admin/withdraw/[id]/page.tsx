import React from "react";
import UpdateWithdraw from "@/app/dashboard/_components/Withdraw/UpdateWithdraw";
import { getAllWithdrawsById } from "@/app/actions/getAllWithdrawsById";

interface pageProps {
  params: { id: string };
}

const page = async ({ params }: pageProps) => {
  // console.log(params)
  const withdraw = await getAllWithdrawsById(params?.id);
  return (
    <UpdateWithdraw withdraw={withdraw?.data} id={params?.id} admin="true" />
  );
};

export default page;
