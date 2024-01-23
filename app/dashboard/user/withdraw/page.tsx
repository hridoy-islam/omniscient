import React from "react";
import Withdraw from "../../_components/UserPanel/Withdraw/Withdraw";
import getUserWithdraws from "@/app/actions/getUserWithdraws";

const page = async () => {
  const withdraw = await getUserWithdraws();
  console.log("Here is the withdraw data", withdraw?.data?.result);

  return <Withdraw withdrawsData={withdraw} />;
};

export default page;
