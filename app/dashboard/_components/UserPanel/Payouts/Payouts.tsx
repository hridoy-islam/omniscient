"use client";

import Pagination from "@/components/Pagination";
import { currencyConvert } from "@/utils/currencyConvert";
import { UserData, settingsData } from "@/utils/interfaces";
import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

interface payout {
  _id: string;
  rigid: {
    _id: string;
    rigName: string;
  };
  amount: number;
  userid: UserData;
  createdAt: string;
}

interface PayoutResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  result: payout[];
}

interface PayoutProps {
  response: PayoutResponse;
  settings: settingsData[];
}

const Payouts = ({ response, settings }: PayoutProps) => {
  const payouts = response?.result;

  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  const [currentPage, setCurrentPage] = useState(Number(page) || 1);

  const totalPages = response?.meta?.totalPage;

  const getNextPageHref = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      return null;
    } else {
      return `/dashboard/user/payouts?page=${nextPage}`;
    }
  };

  const getPreviousPageHref = () => {
    if (currentPage <= 1) {
      return null;
    } else {
      const previousPage = currentPage - 1;
      return `/dashboard/user/payouts?page=${previousPage}`;
    }
  };

  return (
    <>
      <Card className="mt-5">
        <CardHeader className="tableHeader">
          <h2>Payouts</h2>
        </CardHeader>
        <CardBody>
          <table className="table-fixed">
            <thead>
              <tr>
                <th>Rig Name</th>
                <th>Amount</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {payouts?.map((payout, index) => (
                <tr key={index}>
                  <td>{payout?.rigid?.rigName}</td>
                  <td>
                    <Chip color="warning">
                      {currencyConvert(payout?.amount, settings[0]?.btc)} BTC
                    </Chip>
                  </td>
                  <td>
                    {moment(payout?.createdAt).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        previousPageHref={getPreviousPageHref()}
        nextPageHref={getNextPageHref()}
      />
    </>
  );
};

export default Payouts;
