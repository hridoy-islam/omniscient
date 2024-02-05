import React from "react";
import Dashboard from "../_components/Dashboard/Dashboard";
import getAllUsers from "@/app/actions/getAllUsers";
import getAllOrders from "@/app/actions/getAllOrders";
import getAllRigs from "@/app/actions/getAllRigs";
import getRigsWholeAdmin from "@/app/actions/getRigsWholeAdmin";
import getAllUsersAdmin from "@/app/actions/getAllUsersAdmin";

const page = async (context: any) => {
  const pageNumber = Number(context?.searchParams?.page) || 1;

  const allUsers = await getAllUsers(pageNumber);
  const allOrders = await getAllOrders(pageNumber);
  const allRigs = await getAllRigs();
  const wholeRigs = await getRigsWholeAdmin();
  const wholeUsers = await getAllUsersAdmin();

  return (
    <Dashboard
      allUsers={allUsers?.data?.result}
      allOrders={allOrders?.data?.result}
      allRigs={allRigs?.data?.result}
      wholeRigsAdmin={wholeRigs?.data?.result}
      wholeUsers={wholeUsers?.data?.result}
    />
  );
};

export default page;
