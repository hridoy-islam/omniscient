import React, { useState } from "react";
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
import { UserData } from "@/utils/interfaces";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Axios from "@/utils/axios";

interface AccountTabProps {
  // allWallets: { _id: string; name: string; __v: number }[];
  // allExchanges: { _id: string; name: string; __v: number }[];
  currentUser: UserData;
}

const AccountTab = ({ currentUser }: AccountTabProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState(
    currentUser?.currency || ""
  );

  const [selectedPrimaryAccount, setSelectedPrimaryAccount] = useState(
    currentUser?.primary_account || ""
  );
  const router = useRouter();

  const submitForm = async () => {
    try {
      const response = await Axios.patch(`/users/${currentUser?._id}`, {
        currency: selectedCurrency,
        // primary_account: selectedPrimaryAccount,
      });
      toast.success(response?.data?.message);
      router.refresh();

      // // Clear the form values
      // setSelectedCurrency("");
      // setSelectedPrimaryAccount("");
    } catch (error) {
      toast.error("Something went wrong!");
      // console.error("API Error:", error);
    }
  };

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
              {currentUser?.currency.charAt(0).toUpperCase() +
                currentUser?.currency.slice(1)}
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
            <select
              className="rounded-lg rounded-l-none bg-stroke h-12 outline-none w-2/3 text-textLight text-center"
              onChange={(e) => {
                setSelectedPrimaryAccount(e.target.value);
              }}
              value={selectedPrimaryAccount}
            >
              <option value="">Choose Primary Account</option>
              {currentUser?.wallets?.map((wallet, index) => (
                <option key={index} value={wallet?.wallet}>
                  {wallet?.wallet}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between py-6 items-center">
          <div className="flex flex-col">
            <label htmlFor="" className="text-xl font-semobold">
              Currency Type
            </label>
            <select
              onChange={(e) => {
                setSelectedCurrency(e.target.value);
              }}
              name=""
              className="roboinput w-60"
              id=""
              value={selectedCurrency}
            >
              <option>Select Currency</option>
              <option value="usd">$ USD</option>
              <option value="inr">₹ INR</option>
              <option value="euro">€ Euro</option>
            </select>
          </div>
          <div>
            <Button onClick={submitForm} className="btn-basic mr-3">
              Change
            </Button>
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
