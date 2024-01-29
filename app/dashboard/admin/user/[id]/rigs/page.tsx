"use client";
import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
import ViewButton from "@/components/ViewButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import { useParams } from "next/navigation";

export default function page() {
  const params = useParams();

  return (
    <>
      <Card className="my-6">
        <CardHeader className="tableHeader">
          <h2>Assigned Rigs to </h2>
          <div className="flex justify-between">
            <Button className="bg-primaryLight mr-3">
              <Icon icon="ph:play-fill" /> Start All Rigs
            </Button>
            <Button className="bg-[#f9e5e5]">
              {" "}
              <Icon icon="solar:pause-bold" />
              Stop All Rigs
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <table className="table-fixed">
            <thead>
              <tr>
                <th>Rig ID</th>
                <th>GPU</th>
                <th>Efficiency</th>
                <th>Power</th>
                <th>Temp</th>
                <th>Load</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
                <td>1961</td>
                <td>1961</td>
                <td>1961</td>
                <td>1961</td>
                <td>
                  <Chip color="warning">Warning</Chip>
                </td>
                <td>
                  <EditButton />
                  <ViewButton />
                  <DeleteButton />
                </td>
              </tr>
            </tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
}
