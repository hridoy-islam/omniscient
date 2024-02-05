import React from "react";
import User from "../../_components/User/User";
import getAllUsers from "@/app/actions/getAllUsers";

const page = async (context: any) => {
  const pageNumber = Number(context?.searchParams?.page) || 1;

  const allUsers = await getAllUsers(pageNumber);
  return (
    <div>
      <User allUsers={allUsers?.data} />
    </div>
  );
};

export default page;
