import React from "react";
import UpdateWithdraw from "@/app/dashboard/_components/Withdraw/UpdateWithdraw";
import { getAllWithdrawsById } from "@/app/actions/getAllWithdrawsById";
import getSettings from "@/app/actions/getSettings";

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
      admin="true"
      settings={settings?.data}
    />
  );
};

export default page;
