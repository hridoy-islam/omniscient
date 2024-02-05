import React from "react";
import Payouts from "../../_components/UserPanel/Payouts/Payouts";
import getPayouts from "@/app/actions/getPayouts";
import getSettings from "@/app/actions/getSettings";

const page = async (context: any) => {
  const pageNumber = Number(context?.searchParams?.page) || 1;

  const payouts = await getPayouts(pageNumber);
  const settings = await getSettings();

  return <Payouts response={payouts?.data} settings={settings?.data} />;
};

export default page;
