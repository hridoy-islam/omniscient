"use client";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import btc from "../public/btc.png";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

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

export const UserDashBalance = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
      <Card className="p-6">
        <h2>Live Balance</h2>
        <h2>BTC - 1012919291</h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={230} height={150}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Card>
      <Card className="p-6">
        <h2>Gross Balance</h2>
      </Card>
      <Card className="p-6">
        <h2>Payouts</h2>

        <h2 className="text-primary font-bold text-center my-3 text-xl">
          Current Actual Profitability
        </h2>
        <div className="bg-lightYellow flex items-center justify-between rounded-xl px-3 py-2 my-2 mx-6">
          <Image src={btc} alt="btc" />
          <p className="text-lg font-semibold">0.0019603242 BTC</p>
        </div>
        <p className="text-center">Last 24hr</p>
      </Card>
    </div>
  );
};
