"use client";
import { UserData, settingsData } from "@/utils/interfaces";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Button,
  Card,
  CardBody,
  Chip,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import { currencyConvert } from "@/utils/currencyConvert";

interface UpdateWithdrawProps {
  withdraw: {
    _id: string;
    userid: UserData;
    btc: string;
    amount: number;
    requestDate: string;
    status: string;
  };
  admin?: string;
  id: string;
  settings: settingsData[];
}

const UpdateWithdraw = ({
  withdraw,
  admin = "false",
  id,
  settings,
}: UpdateWithdrawProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const localStatus = ["pending", "approved", "decline"];
  const [selectedStatus, setSelectedStatus] = useState("");
  const currentUser = withdraw?.userid;
  const [updatedAmount, setUpdatedAmount] = useState(withdraw?.amount);
  const router = useRouter();
  const cookies = new Cookies();
  const [btc, setBtc] = useState(0);

  const wallet = currentUser?.wallets?.find(
    (wallet) => wallet?.wallet === currentUser?.primary_account
  );

  const handleUpdate = async () => {
    // const userId = decoded?.id;
    const token = cookies.get("jwt");

    const url = `/withdraws/${id}`;

    await Axios.patch(
      url,
      {
        amount: updatedAmount,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        toast.success(response?.data?.message);
        router.refresh();
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      });
  };

  const handleStatus = () => {
    // if (isLoading) return;

    const token = cookies.get("jwt");

    const url = `/withdraws/${withdraw?._id}/${withdraw?.userid?._id}`;

    Axios.post(
      url,
      { status: selectedStatus },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        toast.success(response?.data?.message);
        router.refresh();
        // setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        // setIsLoading(false);
      });
  };

  useEffect(() => {
    const calculateBTC = currencyConvert(withdraw?.amount, settings[0]?.btc);
    setBtc(calculateBTC);
  }, [withdraw?.amount]);

  // const calculateBTC = currencyConvert(amount, settings[0]?.btc);

  return (
    <Card className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6">
      <Card className="bg-stroke">
        <CardBody className="space-y-4 p-6">
          <Icon
            icon="uil:money-withdrawal"
            width={36}
            className="text-primary"
          />
          <h2 className="text-xl">Withdraw Request Information</h2>
          <p className="text-md">
            Full Name : {currentUser?.personal_information?.firstName}{" "}
            {currentUser?.personal_information?.lastName}
          </p>
          <p className="text-md">Email: {currentUser?.email}</p>
          <p className="text-md">
            Phone: {currentUser?.personal_information?.phone}
          </p>
        </CardBody>
      </Card>
      <Card className="bg-stroke">
        <CardBody className="space-y-4 p-6">
          <Icon icon="ri:bank-fill" width={36} className="text-primary" />
          <h2 className="text-xl">Receiving Wallet Details</h2>
          <p className="text-md">Payment Method: {wallet?.wallet}</p>
          <p className="text-md">
            Wallet: {currentUser?.currency.toUpperCase()}
          </p>
          <p className="text-md">Exchange: {wallet?.exchange}</p>
          <p className="text-md">Account Address: {wallet?.account}</p>
        </CardBody>
      </Card>
      <Card className="bg-stroke">
        <CardBody className="space-y-4 p-6">
          <Icon icon="lucide:file-pen" width={36} className="text-primary" />
          <h2 className="text-xl">Withdraw Amount Details</h2>
          <div className="flex items-center gap-2">
            {" "}
            <p className="text-md">Amount :</p>
            <Chip className="rounded-md bg-primary text-white p-5">
              ${withdraw?.amount}
            </Chip>
            <Button
              size="md"
              onPress={onOpen}
              className="rounded-md bg-primary text-white p-3 cursor-pointer"
            >
              Update
            </Button>
          </div>
          <div className="flex gap-2">
            {" "}
            <p className="text-md">Bitcoin: </p>
            <Chip className="rounded-md bg-orange text-white p-3">{btc}</Chip>
          </div>
          <div className="flex gap-2">
            <p className="text-md">Status: </p>
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
          </div>
        </CardBody>
      </Card>

      {admin === "true" && (
        <Card
          className={`bg-stroke space-y-4 p-6 ${
            withdraw?.status === "approved" ? "hidden" : ""
          }`}
        >
          <label>Change Withdraw Status</label>
          <select
            onChange={(e) => {
              setSelectedStatus(e.target.value);
            }}
            className="roboinput"
          >
            <option>Select</option>
            {localStatus.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <Button onClick={handleStatus} className="btn-basic w-30 rounded-md">
            Update
          </Button>
        </Card>
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <p className="text-primary">Enter Amount</p>
                <input
                  required
                  type="number"
                  value={updatedAmount}
                  onChange={(e) => {
                    setUpdatedAmount(Number(e.target.value));
                  }}
                  className="roboinput"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  className="text-[#fff]"
                  onPress={onClose}
                  onClick={handleUpdate}
                >
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Card>
  );
};

export default UpdateWithdraw;
