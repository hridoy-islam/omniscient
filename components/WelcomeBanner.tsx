import { Avatar, Button, Card, CardBody } from "@nextui-org/react";
import React from "react";

export const WelcomeBanner = () => {
  return (
    <div className="flex flex-row w-full px-8 py-6 justify-between items-center gap-0 bg-[url('../public/welcomebg.png')] bg-cover rounded-xl">
      <div className="flex gap-3 items-center">
        <Avatar
          isBordered
          radius="sm"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          className="w-20 h-20"
        />
        <h1 className="text-3xl text-white">👋 Welcome, Smith</h1>
      </div>
      <div className="items-center">
        <Button>View Profile</Button>
      </div>
    </div>
  );
};
