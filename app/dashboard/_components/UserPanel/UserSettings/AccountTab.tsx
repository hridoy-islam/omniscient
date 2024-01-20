import React from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Avatar,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import EditButton from "@/components/EditButton";
const AccountTab = () => {
  return (
    <Card>
      <CardHeader className="tableHeader">
        <div>
          <h2>Primary Account</h2>
        </div>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b-2 border-stroke pb-6">
          <div className="flex items-center">
            <h2 className="rounded-lg rounded-r-none bg-primary p-2 w-1/3 text-white text-center">
              Exchange
            </h2>
            <h2 className="rounded-lg rounded-l-none bg-stroke p-2 w-2/3 text-textLight text-center">
              Coin Exchange
            </h2>
          </div>

          <div className="flex items-center">
            <h2 className="rounded-lg rounded-r-none bg-primary p-2 w-1/3 text-white text-center">
              Wallet
            </h2>
            <h2 className="rounded-lg rounded-l-none bg-stroke p-2 w-2/3 text-textLight text-center">
              USD
            </h2>
          </div>
          <div className="flex items-center">
            <h2 className="rounded-lg rounded-r-none bg-primary p-2 w-1/3 text-white text-center">
              Exchange
            </h2>
            <h2 className="rounded-lg rounded-l-none bg-stroke p-2 w-2/3 text-textLight text-center">
              Coin Exchange
            </h2>
          </div>

          <div className="flex items-center">
            <h2 className="rounded-lg rounded-r-none bg-primary h-12 w-1/3 text-white text-center pt-2.5">
              Wallet
            </h2>
            <select className="rounded-lg rounded-l-none bg-stroke h-12 outline-none w-2/3 text-textLight text-center">
              <option value="">Choose Primary Account</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between py-6 items-center">
          <div className="flex flex-col">
            <label htmlFor="" className="text-xl font-semobold">
              Currency Type
            </label>
            <select name="" className="roboinput w-60" id="">
              <option value="">$USD</option>
              <option value="">₹INR</option>
              <option value="">€Euro</option>
            </select>
          </div>
          <div>
            <Button className="btn-basic mr-3">Change</Button>
            <Button className="border border-red text-red bg-transparent">
              Clear
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AccountTab;
