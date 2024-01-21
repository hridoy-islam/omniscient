"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import WalletTab from "./WalletTab";
import AccountTab from "./AccountTab";
import { UserData, Wallet } from "@/utils/interfaces";

interface UserSettingsProps {
  allWallets: { _id: string; name: string; __v: number }[];
  allExchanges: { _id: string; name: string; __v: number }[];
  currentUser: UserData;
}

const UserSettings = ({
  allWallets,
  allExchanges,
  currentUser,
}: UserSettingsProps) => {
  return (
    <div>
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="bordered"
          classNames={{
            tabList: "bg-white p-0 rounded-0 text-white",
            cursor: "w-full bg-primary",
            tab: "max-w-fit px-8 h-10",
            // tabContent: "group-data-[selected=true]:text-[#06b6d4]"
          }}
        >
          <Tab key="account" title="Account Settings">
            <AccountTab currentUser={currentUser} />
          </Tab>
          <Tab key="walltet" title="Wallet">
            <WalletTab
              allWallets={allWallets}
              allExchanges={allExchanges}
              currentUser={currentUser}
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default UserSettings;
