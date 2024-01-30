"use client";

import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { RigData, UserData, settingsData } from "@/utils/interfaces";
import { currencyConvert } from "@/utils/currencyConvert";

interface UserRigBalanceProps {
  rigs: RigData[];
  currentUser: UserData;
  settings: settingsData[];
}

export const UserRigBalance = ({
  rigs,
  currentUser,
  settings,
}: UserRigBalanceProps) => {
  console.log(currentUser);
  const miningRigs = rigs?.filter((rig) => rig?.status === "mining");

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
      <Card className="p-6 space-y-2 border border-green">
        <h1>Rigs Mining</h1>
        <h2 className="text-3xl font-bold text-green">{miningRigs?.length}</h2>
        <h3>Running Rigs</h3>
      </Card>
      <Card className="p-6 space-y-2 border border-blue">
        <h1>Next Payout</h1>
        <h2 className="text-3xl font-bold text-blue">24 Hours</h2>
        <h3>Remaining</h3>
      </Card>
      <Card className="p-6 space-y-2 border border-purple">
        <h1>Current Profitability</h1>
        <h2 className="text-3xl font-bold text-purple">
          {currencyConvert(currentUser?.profit, settings[0]?.btc)}
        </h2>
        <h3>${currentUser?.profit}</h3>
      </Card>
      <Card className="p-6 space-y-2 border border-orange">
        <h2>Unpaid Mining Balance</h2>
        <h2 className="text-3xl font-bold text-orange">
          {" "}
          {currencyConvert(currentUser?.balance, settings[0]?.btc)}
        </h2>
        <h3>${currentUser?.balance}</h3>
      </Card>
    </div>
  );
};
