import getRigs from "@/app/actions/getRigs";
import Edit from "@/app/dashboard/_components/Edit/Edit";
import React from "react";

const page = async (context: any) => {
  const pageNumber = Number(context?.searchParams?.page) || 1;

  const userRigs = await getRigs(context?.params?.id, pageNumber);
  return (
    <div>
      <Edit id={context?.params?.id} rigs={userRigs?.data?.result} />
    </div>
  );
};

export default page;
