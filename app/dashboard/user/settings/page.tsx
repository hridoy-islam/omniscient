import React from "react";
import UserSettings from "../../_components/UserPanel/UserSettings/UserSettings";
import getAllWallets from "@/app/actions/getAllWallets";
import getAllExchanges from "@/app/actions/getAllExchanges";
import getUser from "@/app/actions/getUser";
import getUserUsingCookie from "@/app/actions/getUserUsingCookie";

const page = async () => {
  const allWallets = await getAllWallets();
  const allExchanges = await getAllExchanges();
  const currentUser = await getUserUsingCookie();
  console.log("all exchanges", currentUser?.data);
  return (
    <UserSettings
      allWallets={allWallets?.data}
      allExchanges={allExchanges?.data}
      currentUser={currentUser?.data}
    />
  );
};

export default page;
