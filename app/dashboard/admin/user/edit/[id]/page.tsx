import Edit from "@/app/dashboard/_components/Edit/Edit";
import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const page = ({ params }: PageProps) => {
  console.log("here is the id", params?.id);
  return (
    <div>
      <Edit id={params?.id}/>
    </div>
  );
};

export default page;
