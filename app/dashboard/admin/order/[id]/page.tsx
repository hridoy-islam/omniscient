"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Select,
  SelectItem,
} from "@nextui-org/react";

export default function Page() {
  const status = ["pending", "approve", "decline"];

  return (
    <div className="flex gap-8">
      <div className="w-9/12">
        <div>
          <h2 className="my-4 font-bold text-2xl">Order Details</h2>
          <Card>
            <CardBody>
              <table className="productview">
                <tr>
                  <td className="w-20">Order ID</td>
                  <td className="w-5">:</td>
                  <td>17187181</td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td>:</td>
                  <td>81817691</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>:</td>
                  <td>Paid</td>
                </tr>
              </table>
            </CardBody>
          </Card>
        </div>

        <div>
          <h2 className="my-4 font-bold text-2xl">Product Details</h2>
          <Card className="p-4 space-y-3">
            <div className="flex items-center gap-5">
              <Chip className="bg-primaryLight text-primary">Basic Mining</Chip>
              <p className="text-xl font-bold">$500</p>
            </div>

            <div className="productview">
              <table className="w-full">
                <tr>
                  <td className="w-12">
                    <Icon
                      icon="mdi:check-bold"
                      className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                    />
                  </td>
                  <td className="w-30">Motherboard</td>
                  <td>TUF GAMING Z590-PLUS</td>
                </tr>
                <tr>
                  <td className="w-12">
                    <Icon
                      icon="mdi:check-bold"
                      className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                    />
                  </td>
                  <td className="w-30">Processor</td>
                  <td>TUF GAMING Z590-PLUS</td>
                </tr>
                <tr>
                  <td className="w-12">
                    <Icon
                      icon="mdi:check-bold"
                      className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                    />
                  </td>
                  <td className="w-30">Ram</td>
                  <td>TUF GAMING Z590-PLUS</td>
                </tr>
                <tr>
                  <td className="w-12">
                    <Icon
                      icon="mdi:check-bold"
                      className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                    />
                  </td>
                  <td className="w-30">Motherboard</td>
                  <td>TUF GAMING Z590-PLUS</td>
                </tr>
                <tr>
                  <td className="w-12">
                    <Icon
                      icon="mdi:check-bold"
                      className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                    />
                  </td>
                  <td className="w-30">Motherboard</td>
                  <td>TUF GAMING Z590-PLUS</td>
                </tr>
                <tr>
                  <td className="w-12">
                    <Icon
                      icon="mdi:check-bold"
                      className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                    />
                  </td>
                  <td className="w-30">Motherboard</td>
                  <td>TUF GAMING Z590-PLUS</td>
                </tr>
              </table>
            </div>
          </Card>
        </div>
      </div>
      <div className="w-3/12">
        <Card className="mt-16 p-3">
          <CardHeader>
            <p>Order Summery</p>
          </CardHeader>
          <CardBody>
            <div className="flex justify-between">
              <h2>Basic Mining</h2>
              <p>$500</p>
            </div>

            <div className="flex justify-between border-t border-stroke mt-4 pt-4">
              <h2>Total</h2>
              <p>$500</p>
            </div>
          </CardBody>
        </Card>

        <Card className="mt-6 p-3">
          <CardHeader>
            <p>Change Order Status</p>
          </CardHeader>
          <CardBody>
            <Select placeholder="Change Status">
              {status.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </Select>
            <Button className="btn-basic w-16 rounded-lg my-4">Update</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
