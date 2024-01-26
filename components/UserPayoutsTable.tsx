import React from "react";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import ViewButton from "./ViewButton";
import { WithdrawData } from "@/utils/interfaces";
import moment from "moment";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

interface UserPayoutsTableProps {
  withdraws: WithdrawData[];
}

export const UserPayoutsTable = ({ withdraws }: UserPayoutsTableProps) => {
  return (
    <Card className="my-6">
      <CardHeader className="tableHeader">
        <h2>Payouts</h2>
      </CardHeader>
      <CardBody>
        <table className="table-fixed">
          <thead>
            <tr>
              <th>Requested By</th>
              <th>Amount</th>
              <th>BTC</th>
              <th>Requested On</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {withdraws?.map((withdraw, index) => (
              <tr key={index}>
                <td>
                  {withdraw?.userid?.personal_information?.firstName}{" "}
                  {withdraw?.userid?.personal_information?.lastName}
                </td>
                <td>{String(withdraw?.amount)}</td>
                <td>{withdraw?.btc}</td>
                <td>{withdraw?.requestDate}</td>

                <td>
                  <Link href={`/dashboard/user/withdraw/${withdraw?._id}`}>
                    <Button className="text-primary border-primary border-1 bg-white ml-2 px-3 text-md">
                      <Icon icon="solar:eye-linear" className="text-lg" />
                      <span>View</span>
                    </Button>
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};
