import React from "react";
import Withdraw from "../../_components/UserPanel/Withdraw/Withdraw";
import getUserWithdraws from "@/app/actions/getUserWithdraws";

const page = async () => {
  const withdraw = await getUserWithdraws();
  console.log(withdraw);

  return <Withdraw />;
};

export default page;
