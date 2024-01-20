"use client";
import { Icon } from "@iconify/react";
import { Button, Card, CardBody, Progress } from "@nextui-org/react";

export const RigDetails = () => {
  return (
    <>
      <Card className="p-6 space-y-3">
        <CardBody>
          <div className="flex justify-between">
            <div>
              <h2>
                Rig 00001 <span className="text-green">Mining</span>
              </h2>
              <p>Nvidia GeForce RTX 3090</p>
            </div>
            <Button className="bg-[#DFF9E8] text-secondary">
              <Icon icon="solar:pause-bold" /> <span>Pause Mining</span>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-2">
            <Card className="p-4 border border-stroke">
              <div className="rounded-lg w-14 text-3xl text-primary bg-[#F5F8FD] p-3 my-3">
                <Icon icon="ic:outline-energy-savings-leaf" />
              </div>
              <p className="text-lg">Efficiency</p>
              <h4 className="text-3xl font-semibold">
                1.944 <span className="text-xl">MH/J</span>
              </h4>
            </Card>
            <Card className="p-4 border border-stroke">
              <div className="rounded-lg w-14 text-3xl text-primary bg-[#F5F8FD] p-3 my-3">
                <Icon icon="ic:outline-energy-savings-leaf" />
              </div>
              <p className="text-lg">Temperature</p>
              <p className="flex justify-between my-1">
                <span>19° C</span>
                <span>20° C</span>
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
            <Card className="p-4 border border-stroke">
              <div className="rounded-lg w-14 text-3xl text-primary bg-[#F5F8FD] p-3 my-3">
                <Icon icon="ph:fan" />
              </div>
              <p className="text-lg">Fan</p>
              <p className="flex justify-between my-1">
                <span>90%</span>
                <span>100%</span>
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
            <Card className="p-4 border border-stroke">
              <div className="rounded-lg w-14 text-3xl text-primary bg-[#F5F8FD] p-3 my-3">
                <Icon icon="material-symbols:join-right-rounded" />
              </div>
              <p className="text-lg">Actual RIG Profeciency</p>
              <h4 className="text-3xl font-semibold">
                0.00016473 <span className="text-xl">BTC/24h</span>
              </h4>
            </Card>
            <Card className="p-4 border border-stroke">
              <div className="rounded-lg w-14 text-3xl text-primary bg-[#F5F8FD] p-3 my-3">
                <Icon icon="solar:bolt-linear" />
              </div>
              <p className="text-lg">Power</p>
              <p className="flex justify-between my-1">
                <span>199 W</span>
                <span>100%</span>
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
            <Card className="p-4 border border-stroke">
              <div className="rounded-lg w-14 text-3xl text-primary bg-[#F5F8FD] p-3 my-3">
                <Icon icon="solar:server-path-broken" />
              </div>
              <p className="text-lg">Load</p>
              <p className="flex justify-between my-1">
                <span>92%</span>
                <span>100%</span>
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
          </div>
        </CardBody>
      </Card>
      <Card className="p-6 space-y-2 my-6">
        <CardBody>
          <div className="flex justify-between">
            <div>
              <h2>
                Rig 00001 <span className="text-red">Stopped</span>
              </h2>
              <p>Nvidia GeForce RTX 3090</p>
            </div>
            <Button className="bg-[#D8F0FD] text-secondary">
              <Icon icon="solar:play-bold" /> <span>Start Mining</span>
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
