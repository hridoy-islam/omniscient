import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function UserRigsTable() {
  return (
    <Card>
      <CardHeader className="tableHeader">
        <h2>Rigs</h2>
      </CardHeader>
      <CardBody>
        <table className="table-fixed">
          <thead>
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
            <tr>
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
