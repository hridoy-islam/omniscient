import { RigData, UserData } from "@/utils/interfaces";
import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import moment from "moment";

interface payout {
  _id: string;
  rigid: {
    _id: string;
    rigName: string;
  };
  amount: Number;
  userid: UserData;
  createdAt: string;
}

interface UserRigsTableProps {
  payouts: payout[];
}

const UserPayoutTable = ({ payouts }: UserRigsTableProps) => {
  return (
    <Card className="mt-5">
      <CardHeader className="tableHeader">
        <h2>Payouts</h2>
      </CardHeader>
      <CardBody>
        <table className="table-fixed">
          <thead>
            <tr>
              <th>Rig Name</th>
              <th>Amount</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {payouts?.map((payout, index) => (
              <tr key={index}>
                <td>{payout?.rigid?.rigName}</td>
                <td>
                  <Chip color="warning">{String(payout?.amount)}</Chip>
                </td>
                <td>
                  {moment(payout?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default UserPayoutTable;
