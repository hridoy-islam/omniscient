import getAllWithdrawsById from "@/app/actions/getAllWithdrawsById";
import getUserUsingCookie from "@/app/actions/getUserUsingCookie";
import UpdateWithdraw from "@/app/dashboard/_components/Withdraw/UpdateWithdraw";
import React from "react";

interface pageProps {
  params: { id: string };
}

const page = async ({ params }: pageProps) => {
  // console.log(params)
  const withdraw = await getAllWithdrawsById(params?.id);
  return <UpdateWithdraw withdraw={withdraw?.data} />;
};

export default page;
