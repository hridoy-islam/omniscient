"use client";
import { UserData } from "@/utils/interfaces";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Button,
  Card,
  CardBody,
  Chip,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";

interface UpdateWithdrawProps {
  withdraw: {
    userid: UserData;
    btc: string;
    amount: number;
    requestDate: string;
  };
  admin?: {
    type: boolean;
    default: false;
  };
}

const UpdateWithdraw = ({ withdraw, admin }: UpdateWithdrawProps) => {
  // console.log(currentUser);
  const status = ["pending", "approve", "decline"];
  const [selectedStatus, setSelectedStatus] = useState("");
  const currentUser = withdraw?.userid;

  const wallet = currentUser?.wallets?.find(
    (wallet) => wallet?.wallet === currentUser?.primary_account
  );

  return (
    <Card className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6">
      <Card className="bg-stroke">
        <CardBody className="space-y-4 p-6">
          <Icon
            icon="uil:money-withdrawal"
            width={36}
            className="text-primary"
          />
          <h2 className="text-xl">Withdraw Request Information</h2>
          <p className="text-md">
            Full Name : {currentUser?.personal_information?.firstName}{" "}
            {currentUser?.personal_information?.lastName}
          </p>
          <p className="text-md">Email: {currentUser?.email}</p>
          <p className="text-md">
            Phone: {currentUser?.personal_information?.phone}
          </p>
        </CardBody>
      </Card>
      <Card className="bg-stroke">
        <CardBody className="space-y-4 p-6">
          <Icon icon="tdesign:money" width={36} className="text-primary" />
          <h2 className="text-xl">Credit Bank Details</h2>
          <p className="text-md">Transaction ID: 65389746598</p>
          <p className="text-md">Payment Date: April 23, 2024</p>
          <p className="text-md">Payment Method: Bank</p>
        </CardBody>
      </Card>
      <Card className="bg-stroke">
        <CardBody className="space-y-4 p-6">
          <Icon icon="ri:bank-fill" width={36} className="text-primary" />
          <h2 className="text-xl">Receiving Bank Details</h2>
          <p className="text-md">Payment Method: {wallet?.wallet}</p>
          <p className="text-md">
            Wallet: {currentUser?.currency.toUpperCase()}
          </p>
          <p className="text-md">Exchange: {wallet?.exchange}</p>
          <p className="text-md">Account Address: {wallet?.account}</p>
        </CardBody>
      </Card>
      <Card className="bg-stroke">
        <CardBody className="space-y-4 p-6">
          <Icon icon="lucide:file-pen" width={36} className="text-primary" />
          <h2 className="text-xl">Withdraw Amount Details</h2>
          <div className="flex gap-2">
            {" "}
            <p className="text-md">Amount :</p>
            <Chip className="rounded-md bg-primary text-white p-3">
              ${withdraw?.amount}
            </Chip>
          </div>
          <div className="flex gap-2">
            {" "}
            <p className="text-md">Bitcoin: </p>
            <Chip className="rounded-md bg-orange text-white p-3">
              {withdraw?.btc}
            </Chip>
          </div>
        </CardBody>
      </Card>

      {admin && (
        <Card className="bg-stroke space-y-4 p-6">
          <label>Change Withdraw Status</label>
          <select className="roboinput">
            <option>Select</option>
            {status.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <Button className="btn-basic w-30 rounded-md">Update</Button>
        </Card>
      )}
    </Card>
  );
};

export default UpdateWithdraw;
