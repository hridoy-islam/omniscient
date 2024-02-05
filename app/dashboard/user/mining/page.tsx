import React from "react";
import Mining from "../../_components/UserPanel/Mining/Mining";
import getRigs from "@/app/actions/getRigs";
import getSettings from "@/app/actions/getSettings";
import getUser from "@/app/actions/getUser";
import getUserUsingCookie from "@/app/actions/getUserUsingCookie";
import getRigsUsingCookies from "@/app/actions/getRigsUsingCookies";
import getRigsWhole from "@/app/actions/getRigsWhole";

const page = async (context: any) => {
  const pageNumber = Number(context?.searchParams?.page) || 1;
  const settings = await getSettings();
  const currentUser = await getUserUsingCookie();
  const rigs = await getRigsUsingCookies(pageNumber);
  const wholeRigs = await getRigsWhole();


  return (
    <Mining
      settings={settings?.data}
      currentUser={currentUser?.data}
      rigs={rigs?.data?.result}
      wholeRigs={wholeRigs?.data?.result}
    />
  );
};

export default page;
