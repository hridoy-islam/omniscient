import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function UserRigsTable() {
  return (
    <Card>
      <CardHeader className="border-b border-stroke py-5">
        <h2>Rigs</h2>
      </CardHeader>
      <CardBody>
        <table className="table-fixed">
          <thead className="bg-primary h-7 text-white">
            <tr>
              <th>Rig ID</th>
              <th>Graphics</th>
              <th>Speed</th>
              <th>Load</th>
              <th>Efficiency</th>
              <th>Actual Rig</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-12 text-md">
              <td>Invoice-0019</td>
              <td>Something</td>
              <td>$292</td>
              <td>Something</td>
              <td>Something</td>
              <td>Something</td>
              <td>Something</td>
            </tr>
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
