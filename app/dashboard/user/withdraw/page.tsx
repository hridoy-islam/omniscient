"use client"
import Pagination from "@/components/Pagination";
import ViewButton from "@/components/ViewButton";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";

export default function Page() {
  return (
    <>

      <Card className="mb-6">
        <CardHeader className="tableHeader">

          <div>
            <h2>Recent Withdraw</h2>
          </div>
          <div>
            <Link href="/dashboard/admin/invoice/create">
              <Button className="bg-white text-primary border border-primary rounded-md">
                Request Withdraw
              </Button>
            </Link>
          </div>
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
                  <ViewButton />
                </td>
              </tr>
            </tbody>
          </table>
        </CardBody>
      </Card>
      <Pagination />
    </>
  );
}
