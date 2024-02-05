"use client";
import Axios from "@/utils/axios";
import { Icon } from "@iconify/react";
import { Button, Card, CardBody, Chip, Progress } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import Pagination from "./Pagination";
import { RigData } from "@/utils/interfaces";
import { useState } from "react";

interface rig {
  _id: string;
  userid: string;
  rigName: string;
  gpu: string;
  temp: string;
  fan: string;
  load: string;
  power: string;
  efficiency: number;
  proficiency: number;
  status: string;
}

interface RigResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  result: rig[];
}

interface RigsDetailsProps {
  response: RigResponse;
}

export const RigDetails = ({ response }: RigsDetailsProps) => {
  const router = useRouter();

  const rigs = response?.result;
  const cookie = new Cookies();
  const token = cookie.get("jwt");

  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  const [currentPage, setCurrentPage] = useState(Number(page) || 1);

  const totalPages = response?.meta?.totalPage;

  const getNextPageHref = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      return null;
    } else {
      return `/dashboard/user/rigs?page=${nextPage}`;
    }
  };

  const getPreviousPageHref = () => {
    if (currentPage <= 1) {
      return null;
    } else {
      const previousPage = currentPage - 1;
      return `/dashboard/user/rigs?page=${previousPage}`;
    }
  };

  const handleStartMining = (rig: rig) => {
    const url = `/history/start/${rig?._id}`;

    Axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        toast.success(response?.data?.message);
        router.refresh();
      })
      .catch((error) => {
        // toast.error("Something went wrong!");
        router.refresh();
      });
  };

  const handlePauseMining = (rig: rig) => {
    const url = `/history/pause/${rig?._id}`;

    Axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        router.refresh();
        toast.success(response?.data?.message);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      });
  };

  return (
    <>
      {rigs?.map((rig, index) => (
        <Card className="p-6 space-y-3 mb-5">
          <CardBody>
            <div className="flex justify-between">
              <div>
                <h2>
                  {rig?.rigName}
                  <Chip
                    className="text-white uppercase ml-2"
                    color={rig?.status === "mining" ? "success" : "warning"}
                  >
                    {rig?.status === "mining" ? "mining" : "stopped"}
                  </Chip>
                </h2>
              </div>
              {rig?.status === "mining" ? (
                <Button
                  onClick={() => handlePauseMining(rig)}
                  className="bg-[#DFF9E8] text-secondary"
                >
                  <Icon icon="solar:pause-bold" /> <span>Pause Mining</span>
                </Button>
              ) : (
                <Button
                  onClick={() => handleStartMining(rig)}
                  className="bg-primaryLight"
                >
                  <Icon icon="ph:play-fill" /> Start Mining
                </Button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-2">
              <Card className="p-4 border border-stroke">
                <div className="rounded-lg w-14 text-3xl text-primary bg-[#F5F8FD] p-3 my-3">
                  <Icon icon="ic:outline-energy-savings-leaf" />
                </div>
                <p className="text-lg">Efficiency</p>
                <h4 className="text-3xl font-semibold">
                  {rig?.efficiency} <span className="text-xl">MH/J</span>
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
                  <span>{rig?.fan}%</span>
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
                  {rig?.proficiency} <span className="text-xl">BTC/24h</span>
                </h4>
              </Card>
              <Card className="p-4 border border-stroke">
                <div className="rounded-lg w-14 text-3xl text-primary bg-[#F5F8FD] p-3 my-3">
                  <Icon icon="solar:bolt-linear" />
                </div>
                <p className="text-lg">Power</p>
                <p className="flex justify-between my-1">
                  <span>{rig?.power} W</span>
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
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        previousPageHref={getPreviousPageHref()}
        nextPageHref={getNextPageHref()}
      />
    </>
  );
};
