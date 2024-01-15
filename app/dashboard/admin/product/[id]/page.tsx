"use client";
import DeleteButton from "@/components/DeleteButton";
import { Button, Card, Chip } from "@nextui-org/react";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function page() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card className="p-4">
        <div className="flex gap-4 my-3">
          <Chip className="bg-primaryLight text-primary">Default</Chip>
          <h2 className="text-2xl">$500</h2>
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
        <div className="flex gap-3 my-2">
          <Button className="w-full btn-basic">
            <Icon icon="uil:edit" className="text-lg" /> Edit
          </Button>
          <Button className="text-red border border-red w-full bg-transparent">
            <Icon icon="system-uicons:trash" className="text-lg" />
            <span>Delete</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
