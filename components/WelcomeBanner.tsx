"use client";

import { UserData } from "@/utils/interfaces";
import { Avatar, Button, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

interface WelcomeBannerProps {
  currentUser: UserData;
}

export const WelcomeBanner = ({ currentUser }: WelcomeBannerProps) => {
  return (
    <div className="flex flex-row w-full px-8 py-6 justify-between items-center gap-0 bg-[url('../public/welcomebg.png')] bg-cover rounded-xl">
      <div className="flex gap-3 items-center">
        <Avatar
          isBordered
          radius="sm"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          className="w-20 h-20"
        />
        <h1 className="text-3xl text-white">
          👋 Welcome, {currentUser?.personal_information?.firstName}{" "}
          {currentUser?.personal_information?.lastName}
        </h1>
      </div>
      <div className="items-center">
        <Link href="/dashboard/user/profile">
          <Button>View Profile</Button>
        </Link>
      </div>
    </div>
  );
};
