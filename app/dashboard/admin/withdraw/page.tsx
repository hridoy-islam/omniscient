import React from "react";
import Withdraw from "../../_components/Withdraw/Withdraw";
import getAllWithdraws from "@/app/actions/getAllWithdraws";

const page = async () => {
  const allWithdraws = await getAllWithdraws();
  // console.log("all withdraws", allWithdraws);
  return <Withdraw allWithdraws={allWithdraws} />;
};

export default page;
