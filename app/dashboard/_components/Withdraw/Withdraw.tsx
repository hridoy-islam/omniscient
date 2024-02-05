"use client";
import Pagination from "@/components/Pagination";
import { UserData } from "@/utils/interfaces";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CardBody, CardHeader, Card, Button, Chip } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { useSearchParams } from "next/navigation";

interface WithdrawObject {
  _id: string;
  amount: number;
  btc: string;
  requestDate: string;
  status: string;
  userid: UserData;
}

interface WithdrawData {
  success: boolean;
  message: string;
  data: WithdrawDataDetails;
}

interface WithdrawDataDetails {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  result: WithdrawObject[];
}

interface WithdrawProps {
  allWithdraws: WithdrawData;
}

const Withdraw = ({ allWithdraws }: WithdrawProps) => {
  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  const [currentPage, setCurrentPage] = useState(Number(page) || 1);

  const totalPages = Math.ceil(allWithdraws?.data?.meta?.total / 10);

  const getNextPageHref = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      return null;
    } else {
      return `/dashboard/admin/withdraw?page=${nextPage}`;
    }
  };

  const getPreviousPageHref = () => {
    if (currentPage <= 1) {
      return null;
    } else {
      const previousPage = currentPage - 1;
      return `/dashboard/admin/withdraw?page=${previousPage}`;
    }
  };

  const withdraws = allWithdraws?.data?.result;
  // Filter withdraws based on status
  const pendingRequests = withdraws?.filter(
    (withdraw) => withdraw?.status === "pending"
  );
  const approvedRequests = withdraws?.filter(
    (withdraw) => withdraw?.status === "approved"
  );

  // Get the lengths of filtered arrays
  const pendingRequestLength = pendingRequests?.length || 0;
  const approvedRequestLength = approvedRequests?.length || 0;

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  return (
    <div>
      {/* <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} /> */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="p-5">
          <p>Total Requests</p>
          <h3 className="text-4xl font-semibold my-2">
            {pendingRequestLength}
          </h3>
        </Card>
        <Card className="p-5">
          <p>Total Withdraw</p>
          <h3 className="text-4xl font-semibold my-2">
            {approvedRequestLength}
          </h3>
        </Card>
      </div>
      <Card className="mb-6">
        <CardHeader className="tableHeader">
          <h2>Withdraw Requests</h2>
        </CardHeader>
        <CardBody>
          <table className="table-auto">
            <thead>
              <tr>
                <th>Requested By</th>
                <th>Withdraw ID</th>
                <th>BTC</th>
                <th>Amount</th>
                <th>Requested Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {withdraws?.map((withdraw, index) => (
                <tr key={index}>
                  <td>
                    {withdraw?.userid?.personal_information?.firstName}{" "}
                    {withdraw?.userid?.personal_information?.lastName}
                  </td>
                  <td>
                    <Chip
                      color={
                        withdraw?.status === "approved"
                          ? "success"
                          : withdraw?.status === "pending"
                          ? "warning"
                          : "danger"
                      }
                      className="text-white uppercase"
                    >
                      {withdraw?.status}
                    </Chip>
                  </td>
                  <td>{withdraw?.btc}</td>
                  <td>${withdraw?.amount}</td>
                  <td>{withdraw?.requestDate}</td>
                  <td>
                    <Link href={`/dashboard/admin/withdraw/${withdraw?._id}`}>
                      <Button className="text-primary border-primary border-1 bg-white ml-2 px-3 text-md">
                        <Icon icon="solar:eye-linear" className="text-lg" />
                        <span>View</span>
                      </Button>
                    </Link>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        previousPageHref={getPreviousPageHref()}
        nextPageHref={getNextPageHref()}
      />
    </div>
  );
};

export default Withdraw;
