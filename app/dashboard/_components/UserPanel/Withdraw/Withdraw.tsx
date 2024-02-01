"use client";
import Pagination from "@/components/Pagination";
import ViewButton from "@/components/ViewButton";
import Axios from "@/utils/axios";
import { currencyConvert } from "@/utils/currencyConvert";
import { DecodedToken, UserData, settingsData } from "@/utils/interfaces";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Chip,
} from "@nextui-org/react";
import { jwtDecode } from "jwt-decode";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";

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
  withdrawsData: WithdrawData;
  currentUser: UserData;
  settings: settingsData[];
}

const Withdraw = ({ withdrawsData, currentUser, settings }: WithdrawProps) => {
  const withdrawData = withdrawsData?.data?.result;
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [btc, setBtc] = useState(0);
  const [amount, setAmount] = useState(0);
  const cookie = new Cookies();
  const token = cookie.get("jwt");

  const handleSubmit = async () => {
    let decoded;

    if (!amount || !btc) {
      return toast.error("Please fill all the fields!");
    }

    if (btc > currentUser?.balance) {
      return toast.error("Insufficient balance!");
    }

    if (token) {
      decoded = jwtDecode(token) as DecodedToken;
    }

    try {
      const response = await Axios.post(
        "/withdraws",
        {
          userid: decoded?._id,
          btc: String(btc),
          amount,
          requestDate: moment().format("LL"),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response?.data?.message);
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    const calculateBTC = currencyConvert(amount, settings[0]?.btc);
    setBtc(calculateBTC);
  }, [amount]);

  return (
    <>
      <Card className="mb-6">
        <CardHeader className="tableHeader">
          <div>
            <h2>Recent Withdraw</h2>
          </div>
          <div>
            <Button
              onPress={onOpen}
              className="bg-white text-primary border border-primary rounded-md"
            >
              Request Withdraw
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <table className="table-auto">
            <thead>
              <tr>
                <th>Requested By</th>
                <th>Status</th>
                <th>BTC</th>
                <th>Amount</th>
                <th>Requested Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {withdrawData?.map((withdraw, index) => (
                <tr key={index}>
                  <td>
                    {withdraw?.userid?.personal_information?.firstName}{" "}
                    {withdraw?.userid?.personal_information?.lastName}
                  </td>{" "}
                  <td>
                    <Chip
                      color={
                        withdraw?.status === "pending"
                          ? "warning"
                          : withdraw?.status === "approved"
                          ? "success"
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
                    <Link href={`/dashboard/user/withdraw/${withdraw?._id}`}>
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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Request Withdraw
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col">
                  <label htmlFor="btc" className="text-primary">
                    BTC*
                  </label>
                  <input
                    readOnly
                    type="number"
                    name="btc"
                    className="roboinput"
                    id="btc"
                    value={btc}
                    // onChange={(e) => {
                    //   setBtc(e.target.value);
                    // }}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="amount" className="text-primary">
                    Amount*
                  </label>
                  <input
                    required
                    type="text"
                    name="amount"
                    className="roboinput"
                    id="amount"
                    onChange={(e) => {
                      setAmount(Number(e.target.value));
                    }}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="w-full text-white"
                  color="primary"
                  onPress={() => {
                    handleSubmit();
                    onClose();
                  }}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {/* <Pagination /> */}
    </>
  );
};

export default Withdraw;
