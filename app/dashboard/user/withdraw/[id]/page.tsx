import { getAllWithdrawsById } from "@/app/actions/getAllWithdrawsById";
import getSettings from "@/app/actions/getSettings";
import getUserUsingCookie from "@/app/actions/getUserUsingCookie";
import UpdateWithdraw from "@/app/dashboard/_components/Withdraw/UpdateWithdraw";
import React from "react";

interface pageProps {
  params: { id: string };
}

const page = async ({ params }: pageProps) => {
  const withdraw = await getAllWithdrawsById(params?.id);
  const settings = await getSettings();
  return (
    <UpdateWithdraw
      withdraw={withdraw?.data}
      id={params?.id}
      settings={settings?.data}
    />
  );
};

export default page;
