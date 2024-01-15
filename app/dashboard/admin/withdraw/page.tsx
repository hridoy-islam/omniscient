"use client";
import Pagination from "@/components/Pagination";
import ViewButton from "@/components/ViewButton";
import { Avatar, CardBody, CardHeader, Card } from "@nextui-org/react";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="p-5">
          <p>Total Requests</p>
          <h3 className="text-4xl font-semibold my-2">25</h3>
        </Card>
        <Card className="p-5">
          <p>Total Withdraw</p>
          <h3 className="text-4xl font-semibold my-2">25</h3>
        </Card>
      </div>
      <Card className="mb-6">
        <CardHeader className="tableHeader">
          <h2>Withdraw Requests</h2>
        </CardHeader>
        <CardBody>
          <table className="table-auto">
            <thead>
              <tr>
                <th>Requested By</th>
                <th>Withdraw ID</th>
                <th>BTC</th>
                <th>Bank</th>
                <th>Amount</th>
                <th>Requested Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Invoice-0019</td>
                <td>$292</td>
                <td>1961</td>
                <td>1961</td>
                <td>1961</td>
                <td>1961</td>
                <td>
                  <Link href={"/dashboard/admin/withdraw/1"}>
                    <ViewButton />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </CardBody>
      </Card>
      <Pagination />
    </div>
  );
}
