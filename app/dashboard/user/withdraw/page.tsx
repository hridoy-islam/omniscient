import React from "react";
import Withdraw from "../../_components/UserPanel/Withdraw/Withdraw";
import getUserWithdraws from "@/app/actions/getUserWithdraws";

const page = async () => {
  const withdraw = await getUserWithdraws();


  return <Withdraw withdrawsData={withdraw} />;
};

export default page;
