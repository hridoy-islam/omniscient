"use client";

import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { RigData, UserData, settingsData } from "@/utils/interfaces";
import { currencyConvert } from "@/utils/currencyConvert";
import { useSearchParams } from "next/navigation";
import Pagination from "./Pagination";

interface RigResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  result: RigData[];
}

interface UserRigBalanceProps {
  rigs: RigResponse;
  currentUser: UserData;
  settings: settingsData[];
}

export const UserRigBalance = ({
  rigs,
  currentUser,
  settings,
}: UserRigBalanceProps) => {
  const miningRigs = rigs?.result?.filter((rig) => rig?.status === "mining");

  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  const [currentPage, setCurrentPage] = useState(Number(page) || 1);

  const totalPages = rigs?.meta?.totalPage;

  const getNextPageHref = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      return null;
    } else {
      return `/dashboard/user/rigs?page=${nextPage}`;
    }
  };

  const getPreviousPageHref = () => {
    if (currentPage <= 1) {
      return null;
    } else {
      const previousPage = currentPage - 1;
      return `/dashboard/user/rigs?page=${previousPage}`;
    }
  };

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
          {currencyConvert(currentUser?.profit, settings[0]?.btc)} BTC
        </h2>
        <h3>${currentUser?.profit}</h3>
      </Card>
      <Card className="p-6 space-y-2 border border-orange">
        <h2>Unpaid Mining Balance</h2>
        <h2 className="text-3xl font-bold text-orange">
          {" "}
          {currencyConvert(currentUser?.balance, settings[0]?.btc)} BTC
        </h2>
        <h3>${currentUser?.balance.toFixed(2)}</h3>
      </Card>

    </div>
  );
};
