"use client";

import { RigData } from "@/utils/interfaces";
import { Button, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface UserRigsTableProps {
  rigs: RigData[];
}

const UserRigsTable = ({ rigs }: UserRigsTableProps) => {
  const router = useRouter();
  return (
    <Card>
      <CardHeader className="tableHeader">
        <div className="flex w-full justify-between">
          <h2>Rigs</h2>
          <Button
            onClick={() => {
              router.push("/dashboard/user/rigs");
            }}
            className="text-white"
            color="primary"
          >
            View All
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <table className="table-fixed">
          <thead>
            <tr>
              <th>Rig Name</th>
              <th>Efficiency</th>
              <th>GPU</th>
              <th>Temp</th>
              <th>Fan</th>
              <th>Load</th>
              <th>Power</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rigs?.map((rig, index) => (
              <tr key={index}>
                <td>{rig?.rigName}</td>
                <td>{rig?.efficiency}</td>
                <td>{rig?.gpu}</td>
                <td>{rig?.temp}</td>
                <td>{rig?.fan}</td>
                <td>{rig?.load}</td>
                <td>{rig?.power}</td>
                <td>
                  <Chip
                    className="text-white uppercase"
                    color={rig?.status === "mining" ? "success" : "warning"}
                  >
                    {rig?.status === "mining" ? "mining" : "stopped"}
                  </Chip>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default UserRigsTable;
