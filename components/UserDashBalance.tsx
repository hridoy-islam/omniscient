import { Card } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import btc from "../public/btc.png";

export const UserDashBalance = () => {
  return (
    <div className="grid grid-cols-3 gap-3 my-6">
      <Card className="p-6">
        <h2>Live Balance</h2>
      </Card>
      <Card className="p-6">
        <h2>Gross Balance</h2>
      </Card>
      <Card className="p-6">
        <h2>Payouts</h2>

        <h2 className="text-primary font-bold text-center my-3 text-xl">
          Current Actual Profitability
        </h2>
        <div className="bg-lightYellow flex items-center justify-between rounded-xl px-10 py-2 my-2 mx-6">
          <Image src={btc} alt="btc" />
          <p className="text-2xl font-semibold">0.0019603242 BTC</p>
        </div>
        <p className="text-center">Last 24hr</p>
      </Card>
    </div>
  );
};
