import React from "react";
import Withdraw from "../../_components/Withdraw/Withdraw";
import getAllWithdraws from "@/app/actions/getAllWithdraws";

const page = async (context: any) => {
  const pageNumber = Number(context?.searchParams?.page) || 1;
  const allWithdraws = await getAllWithdraws(pageNumber);
  return <Withdraw allWithdraws={allWithdraws} />;
};

export default page;
