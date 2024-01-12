import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
export const UserRigBalance = () => {
  return (
    <div className="grid grid-cols-4 gap-3 my-6">
      <Card className="p-6 space-y-2 border border-green">
        <h1>Rigs Mining</h1>
        <h2 className="text-3xl font-bold text-green">13</h2>
        <h3>Running Rigs</h3>
      </Card>
      <Card className="p-6 space-y-2 border border-blue">
        <h1>Next Payout</h1>
        <h2 className="text-3xl font-bold text-blue">01h 7m</h2>
        <h3>Remaining</h3>
      </Card>
      <Card className="p-6 space-y-2 border border-purple">
        <h1>Current Profitability</h1>
        <h2 className="text-3xl font-bold text-purple">0.00005637</h2>
        <h3>$1.567</h3>
      </Card>
      <Card className="p-6 space-y-2 border border-orange">
        <h2>Unpaid Mining Balance</h2>
        <h2 className="text-3xl font-bold text-orange">0.00000657</h2>
        <h2>$0.061</h2>
      </Card>
    </div>
  );
};
