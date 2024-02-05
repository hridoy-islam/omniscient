import { currencyConvert } from "@/utils/currencyConvert";
import { RigData, UserData, settingsData } from "@/utils/interfaces";
import { Button, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import moment from "moment";
import { useRouter } from "next/navigation";

interface payout {
  _id: string;
  rigid: {
    _id: string;
    rigName: string;
  };
  amount: number;
  userid: UserData;
  createdAt: string;
}

interface UserRigsTableProps {
  payouts: payout[];
  settings: settingsData[];
}

const UserPayoutTable = ({ payouts, settings }: UserRigsTableProps) => {
  const router = useRouter();
  return (
    <Card className="mt-5">
      <CardHeader className="tableHeader">
        <div className="flex w-full justify-between">
          <h2>Payouts</h2>
          <Button
            onClick={() => {
              router.push("/dashboard/user/payouts");
            }}
            className="text-white"
            color="primary"
          >
            View All
          </Button>
        </div>{" "}
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
                  <Chip color="warning">
                    {currencyConvert(payout?.amount, settings[0]?.btc)} BTC
                  </Chip>
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
