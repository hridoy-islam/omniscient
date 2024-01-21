"use client";
import Pagination from "@/components/Pagination";
import ViewButton from "@/components/ViewButton";
import Axios from "@/utils/axios";
import { DecodedToken } from "@/utils/interfaces";
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
} from "@nextui-org/react";
import { jwtDecode } from "jwt-decode";
import moment from "moment";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
const Withdraw = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [btc, setBtc] = useState("");
  const [amount, setAmount] = useState(0);
  const cookie = new Cookies();
  const token = cookie.get("jwt");

  const handleSubmit = async () => {
    let decoded;

    if (!amount || !btc) {
      return toast.error("Please fill all the fields!");
    }

    if (token) {
      decoded = jwtDecode(token) as DecodedToken;
    }

    try {
      const response = await Axios.post("/withdraws", {
        userid: decoded?.id,
        btc,
        amount,
        requestDate: moment().format("LL"),
      });
      // console.log("here is the response", response);
      toast.success(response?.data?.message);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  // const withdrawSchema = new Schema<TWithdraw>({
  //   userid: { type: Schema.Types.ObjectId, required: true }, //
  //   btc: { type: String, required: [true, 'BTC is required'] }, //
  //   amount: { type: Number, required: [true, 'amount is required'] }, //
  //   bank: { type: String },
  //   speed: { type: String },
  //   requestDate: { type: String }, //
  //   status: { type: String, default: 'pending' },
  //   efficiency: { type: String },
  //   message: { type: String },
  // });

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
                <th>Withdraw ID</th>
                <th>BTC</th>
                <th>Bank</th>
                <th>Amount</th>
                <th>Requested Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Invoice-0019</td>
                <td>$292</td>
                <td>1961</td>
                <td>1961</td>
                <td>1961</td>
                <td>1961</td>
                <td>
                  <ViewButton />
                </td>
              </tr>
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
                    required
                    type="text"
                    name="btc"
                    className="roboinput"
                    id="btc"
                    onChange={(e) => {
                      setBtc(e.target.value);
                    }}
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
