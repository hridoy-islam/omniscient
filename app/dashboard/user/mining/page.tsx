"use client";
import { Button, Card, Progress } from "@nextui-org/react";
import { Icon } from "@iconify/react";
export default function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
      <Card className="p-6 space-y-3">
        <h2>Active</h2>
        <p className="text-3xl font-bold">
          13 <span className="font-normal text-md">Rigs</span>
        </p>
        <p className="flex justify-between my-1">
          <div className="flex items-center justify-start">
            <Icon
              icon="octicon:dot-fill-24"
              color="#2385BA"
              className="text-xl"
            />
            <span>Active 13</span>
          </div>
          <div className="flex items-center">
            <Icon
              icon="octicon:dot-fill-24"
              color="#B8DEE9"
              className="text-xl"
            />
            <span> Inactive 0</span>
          </div>
        </p>
        <Progress
          size="md"
          classNames={{
            base: "max-w-md",
            track: "drop-shadow-md border border-default",
            indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
          value={80}
          showValueLabel={false}
        />
      </Card>
      <Card className="p-6 space-y-3">
        <h2>Current Mining Balance</h2>
        <h3 className="text-4xl font-bold">0.000434 BTC</h3>
        <div className="flex justify-between">
          <Button className="bg-primaryLight">
            <Icon icon="ph:play-fill" /> Start All Rigs
          </Button>
          <Button className="bg-[#f9e5e5]">
            {" "}
            <Icon icon="solar:pause-bold" />
            Stop All Rigs
          </Button>
        </div>
      </Card>
      <Card className="p-6 space-y-3">
        <h2>Power Consumed</h2>
      </Card>
    </div>
  );
}
