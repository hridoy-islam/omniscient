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

export default function Page() {
  const status = ["pending", "approve", "decline"];
  return (
    <div>
      <Card className="grid grid-cols-2 gap-5 p-6">
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
            <p className="text-md">
              Amount :{" "}
              <Chip className="rounded-md bg-primary text-white p-3">$115</Chip>
            </p>
            <p className="text-md">
              Bitcoin:{" "}
              <Chip className="rounded-md bg-orange text-white p-3">
                011212121
              </Chip>
            </p>
          </CardBody>
        </Card>

        <Card className="bg-stroke space-y-4 p-6">
          <label>Change Withdraw Status</label>
          <Select>
            {status.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </Select>
          <Button className="btn-basic w-30 rounded-md">Update</Button>
        </Card>
      </Card>
    </div>
  );
}
