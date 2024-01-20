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
    <div className="flex flex-col md:flex-row w-full px-8 py-6 justify-between items-center gap-0 bg-[url('../public/welcomebg.png')] bg-cover rounded-xl">
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <Avatar
          isBordered
          radius="sm"
          src={currentUser?.personal_information?.photo}
          className="w-20 h-20"
        />
        <h1 className="text-xl md:text-3xl text-white">
          👋 Welcome, {currentUser?.personal_information?.firstName}{" "}
          {currentUser?.personal_information?.lastName}
        </h1>
      </div>
      <div className="items-center mt-2 md:mt-0">
        <Link href="/dashboard/user/profile">
          <Button>View Profile</Button>
        </Link>
      </div>
    </div>
  );
};
