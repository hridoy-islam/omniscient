import getRigs from "@/app/actions/getRigs";
import Edit from "@/app/dashboard/_components/Edit/Edit";
import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: PageProps) => {
  const userRigs = await getRigs(params?.id);
  console.log(userRigs)
  return (
    <div>
      <Edit id={params?.id} />
    </div>
  );
};

export default page;
