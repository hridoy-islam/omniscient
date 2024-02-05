import React from "react";
import Withdraw from "../../_components/UserPanel/Withdraw/Withdraw";
import getUserWithdraws from "@/app/actions/getUserWithdraws";
import getUserUsingCookie from "@/app/actions/getUserUsingCookie";
import getSettings from "@/app/actions/getSettings";

const page = async (context: any) => {
  const pageNumber = Number(context?.searchParams?.page) || 1;

  const withdraw = await getUserWithdraws(pageNumber);
  
  const currentUser = await getUserUsingCookie();
  const settings = await getSettings();

  return (
    <Withdraw
      withdrawsData={withdraw}
      currentUser={currentUser?.data}
      settings={settings?.data}
    />
  );
};

export default page;
