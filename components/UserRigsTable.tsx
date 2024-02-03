import { RigData } from "@/utils/interfaces";
import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";

interface UserRigsTableProps {
  rigs: RigData[];
}

const UserRigsTable = ({ rigs }: UserRigsTableProps) => {
  return (
    <Card>
      <CardHeader className="tableHeader">
        <h2>Rigs</h2>
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
