"use client";

import React, { useEffect, useState } from "react";
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
  wholeRigs: RigResponse;
  currentUser: UserData;
  settings: settingsData[];
}

export const UserRigBalance = ({
  rigs,
  currentUser,
  settings,
  wholeRigs,
}: UserRigBalanceProps) => {
  const miningRigs = wholeRigs?.result?.filter(
    (rig) => rig?.status === "mining"
  );
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const totalPages = rigs?.meta?.totalPage;

  const calculateTimeRemaining = () => {
    const now = new Date();
    const newYorkTime = new Date(
      now.toLocaleString("en-US", { timeZone: "America/New_York" })
    );
    const endOfDay = new Date(newYorkTime);
    endOfDay.setHours(24, 0, 0, 0); // Set to end of day (24:00:00)

    const difference = endOfDay.getTime() - now.getTime();
    return difference;
  };

  const [timeRemaining, setTimeRemaining] = useState<number>(
    calculateTimeRemaining()
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeRemaining]);

  // Convert milliseconds to HH:MM:SS format
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

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
        <div className="flex items-center space-x-1 text-3xl font-bold text-blue">
          <span>{hours < 10 ? `0${hours}` : hours}</span>:
          <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>{" "}
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
