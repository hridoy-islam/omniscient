import { Card, CardHeader } from "@nextui-org/react";

export default function Page() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        <Card>
          <CardHeader>
            <p>Total Users</p>
            <h2>241</h2>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <p>New Users</p>
            <h2>48</h2>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <p>Total Rigs</p>
            <h2>38</h2>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
