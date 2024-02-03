"use client";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import btc from "../public/btc.png";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { UserData, settingsData } from "@/utils/interfaces";
import { currencyConvert } from "@/utils/currencyConvert";
import { Icon } from "@iconify/react/dist/iconify.js";

const colors = ["#C4EAF5", "#2C929C"];
const data = [
  {
    name: "Snapchat",
    value: 20000,
  },
  {
    name: "LinkedIn",
    value: 29078,
  },
];
interface UserDashBalanceProps {
  currentUser: UserData;
  settings: settingsData[];
}

export const UserDashBalance = ({
  currentUser,
  settings,
}: UserDashBalanceProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
      <Card className="p-6 space-y-3">
        <h2>Live Balance</h2>
        <div className="bg-lightYellow flex items-center gap-3 rounded-xl px-3 py-2 my-2">
          <Image src={btc} alt="btc" className="" />
          <span>
            {currencyConvert(currentUser?.balance, settings[0]?.btc)} BTC
          </span>
        </div>
        <div className="flex items-center gap-3 bg-lightYellow rounded-xl px-3 py-2 my-2">
          <Icon icon="uil:usd-circle" width={40} />
          <span>{currentUser?.balance.toFixed(2) || 0} USD</span>
        </div>
      </Card>
      <Card className="p-6 space-y-3">
        <h2>Gross Balance</h2>

        <div className="bg-lightYellow flex items-center gap-3 rounded-xl px-3 py-2 my-2">
          <Image src={btc} alt="btc" className="" />
          <span>
            {currencyConvert(currentUser?.grossBalance, settings[0]?.btc)} BTC
          </span>
        </div>
      </Card>
      <Card className="p-6">
        <h2>Profit</h2>
        <div className="bg-lightYellow flex items-center gap-3 rounded-xl px-3 py-2 my-2">
          <Image src={btc} alt="btc" className="" />
          <p className="text-lg">
            {currencyConvert(currentUser?.profit, settings[0]?.btc)} BTC
          </p>
        </div>
      </Card>
    </div>
  );
};
