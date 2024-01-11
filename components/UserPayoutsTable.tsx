import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import ViewButton from "./ViewButton";

export const UserPayoutsTable = () => {
  return (
    <Card className="my-6">
      <CardHeader className="border-b border-stroke py-5">
        <h2>Payouts</h2>
      </CardHeader>
      <CardBody>
        <table className="table-fixed">
          <thead className="bg-primary h-7 text-white">
            <tr>
              <th>Withdraw ID</th>
              <th>Ammount</th>
              <th>BTC</th>
              <th>Wallet</th>
              <th>Status</th>
              <th>Efficiency</th>
              <th>Requested On</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-12 text-md">
              <td>Invoice-0019</td>
              <td>Something</td>
              <td>$292</td>
              <td>Something</td>
              <td>Something</td>
              <td>Something</td>
              <td>Something</td>
              <td>
                <ViewButton />
              </td>
            </tr>
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};
