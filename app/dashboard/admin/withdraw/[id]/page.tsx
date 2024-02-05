import React from "react";
import UpdateWithdraw from "@/app/dashboard/_components/Withdraw/UpdateWithdraw";
import { getSingleWithdraw } from "@/app/actions/getSingleWithdraw";
import getSettings from "@/app/actions/getSettings";

interface pageProps {
  params: { id: string };
}

const page = async ({ params }: pageProps) => {
  const withdraw = await getSingleWithdraw(params?.id);
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
