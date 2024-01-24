import React from "react";
import Withdraw from "../../_components/Withdraw/Withdraw";
import getAllWithdraws from "@/app/actions/getAllWithdraws";

const page = async () => {
  const allWithdraws = await getAllWithdraws();
  return <Withdraw allWithdraws={allWithdraws} />;
};

export default page;
