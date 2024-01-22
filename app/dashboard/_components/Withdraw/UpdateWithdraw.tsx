"use client";
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
const UpdateWithdraw = () => {
  const status = ["pending", "approve", "decline"];
  const [selectedStatus, setSelectedStatus] = useState("");

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
          <p className="text-md">Full Name : Md. Ridoy</p>
          <p className="text-md">Email: hridoy@gmail.com</p>
          <p className="text-md">Phone: 10191818181</p>
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
          <p className="text-md">Payment Method: Vindax</p>
          <p className="text-md">Wallet: USDT</p>
          <p className="text-md">Exchange: Coin-Exchange</p>
          <p className="text-md">Account Address: Tljesafghsauhgfiuhasi</p>
        </CardBody>
      </Card>
      <Card className="bg-stroke">
        <CardBody className="space-y-4 p-6">
          <Icon icon="lucide:file-pen" width={36} className="text-primary" />
          <h2 className="text-xl">Withdraw Amount Details</h2>
          <div className="flex gap-2">
            {" "}
            <p className="text-md">Amount :</p>
            <Chip className="rounded-md bg-primary text-white p-3">$115</Chip>
          </div>
          <div className="flex gap-2">
            {" "}
            <p className="text-md">Bitcoin: </p>
            <Chip className="rounded-md bg-orange text-white p-3">
              011212121
            </Chip>
          </div>
        </CardBody>
      </Card>

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
    </Card>
  );
};

export default UpdateWithdraw;
