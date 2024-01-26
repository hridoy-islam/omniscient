import { getAllWithdrawsById } from "@/app/actions/getAllWithdrawsById";
import getUserUsingCookie from "@/app/actions/getUserUsingCookie";
import UpdateWithdraw from "@/app/dashboard/_components/Withdraw/UpdateWithdraw";
import React from "react";

interface pageProps {
  params: { id: string };
}

const page = async ({ params }: pageProps) => {
  const withdraw = await getAllWithdrawsById(params?.id);
  // console.log("withdraw data", withdraw);
  return <UpdateWithdraw withdraw={withdraw?.data} id={params?.id} />;
};

export default page;
