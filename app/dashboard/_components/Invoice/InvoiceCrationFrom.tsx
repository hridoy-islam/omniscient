"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { UserData } from "@/utils/interfaces";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
interface InvoiceCrationFromProps {
  allUsers: UserData[];
}

const InvoiceCrationFrom = ({ allUsers }: InvoiceCrationFromProps) => {
  const [informations, setInformations] = useState([
    {
      item: "",
      quantity: 0,
      rate: "",
      tax: "",
      amount: 0,
    },
  ]);
  const router = useRouter();

  const cookie = new Cookies();
  const token = cookie.get("jwt");

  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountType, setDiscountType] = useState("");
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedUser, setSelectedUser] = useState("");
  const [invoiceType, setInvoiceType] = useState("");

  const addClick = () => {
    const newInfo = {
      item: "",
      quantity: 0,
      rate: "",
      tax: "",
      amount: 0,
    };

    setInformations((prevInformations: any) => {
      const newInfo = {
        item: "",
        quantity: 0,
        rate: "",
        tax: "",
        amount: 0,
      };
      return [...prevInformations, newInfo];
    });
  };

  const removeClick = (index: any) => {
    let restInformations = informations.filter(
      (item: any, idx) => idx !== index
    );
    setInformations([...restInformations]);
  };

  const handleChange = (index: any, data: any) => {
    const { name, value } = data.target;
    let info = [...informations];

    // Update the specific field in the current information object
    info[index] = { ...info[index], [name]: value };

    // Convert quantity to a number
    if (name === "quantity") {
      info[index] = { ...info[index], [name]: Number(value) };
    }
    if (name === "rate") {
      info[index] = { ...info[index], [name]: Number(value) };
    }
    if (name === "tax") {
      info[index] = { ...info[index], [name]: Number(value) };
    }

    // Calculate amount based on rate, quantity, and tax
    const rate = parseFloat(info[index].rate) || 0;
    const quantity = Number(info[index].quantity) || 0;
    const tax = parseFloat(info[index].tax) || 0;

    // Calculate amount with tax included
    const amount = parseFloat(
      ((rate * quantity * (100 + tax)) / 100).toFixed(2)
    );

    // Update the amount field in the current information object
    info[index] = { ...info[index], amount: amount };

    // Update the state with the modified information
    setInformations(info);
  };

  // Calculate total amount from the informations array
  const calculateTotalAmount = () => {
    let totalAmount = 0;

    informations.forEach((info) => {
      totalAmount += info.amount || 0;
    });

    return totalAmount.toFixed(2);
  };

  // Calculate discounted amount based on discountType and discountAmount
  const calculateDiscountedAmount = (totalAmount: number) => {
    let discountedAmount = totalAmount;

    if (discountType === "percentage") {
      discountedAmount = totalAmount - totalAmount * (discountAmount / 100);
    } else if (discountType === "raw_amount") {
      discountedAmount = totalAmount - discountAmount;
    }

    return discountedAmount;
  };

  useEffect(() => {
    const totalAmount = calculateTotalAmount();
    const newDiscountedAmount = calculateDiscountedAmount(Number(totalAmount));
    setTotalAmount(Number(totalAmount));
    setDiscountedAmount(newDiscountedAmount);
  }, [discountType, discountAmount, informations]);

  const handleCreate = async () => {

    if (
      invoiceType === "" ||
      invoiceType === "Select Invoice Type" ||
      selectedUser === "" ||
      selectedUser === "Select User" ||
      !informations
    )
      return toast.error("Provide all the informations!");

    const formattedData = {
      category: invoiceType,
      userid: selectedUser,
      information: informations,
    };

    try {
      const response = await Axios.post("/invoices", formattedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(response?.data?.message);
      router.push("/dashboard/admin/invoice");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <h2>Create Invoice</h2>
        </CardHeader>
        <CardBody>
          <h2 className="mb-4">User Information</h2>
          <div className="flex flex-col">
            <label htmlFor="">User Name</label>
            <select
              required={true}
              onChange={(e) => setSelectedUser(e.target.value)}
              name=""
              className="roboinput"
              id=""
            >
              <option>Select User</option>{" "}
              {allUsers?.map((user, index) => (
                <option key={index} value={user._id}>
                  {user?.personal_information?.firstName}{" "}
                  {user?.personal_information?.lastName}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Invoice Type</label>
            <select
              required={true}
              onChange={(e) => setInvoiceType(e.target.value)}
              name=""
              className="roboinput"
              id=""
            >
              <option>Select Invoice Type</option>
              <option value="bill">Bill Invoice</option>
              <option value="addon">Add On Invoice</option>
              <option value="rigs">Rig Invoice</option>
            </select>
          </div>
          <h2 className="border-b border-stroke my-6">Informations</h2>
          {informations.map((element, index) => (
            <div key={index} className="my-2 border-1 border-stroke p-2">
              <div className="flex flex-row justify-between">
                <h2>Item {index + 1}</h2>
                <Icon
                  onClick={() => removeClick(index)}
                  icon="streamline:delete-1-solid"
                  className={`rounded-full text-lg text-white bg-red w-10 h-10 p-2 ${
                    informations.length < 2 ? "hidden" : ""
                  }`}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Description</label>
                <input
                  type="text"
                  className="roboinput"
                  name="item"
                  value={element.item || ""}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="">Rate</label>
                    <input
                      type="text"
                      name="rate"
                      className="roboinput"
                      id=""
                      value={element.rate || ""}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">Tax %</label>
                    <input
                      type="text"
                      name="tax"
                      className="roboinput"
                      id=""
                      value={element.tax || ""}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="">Quantity</label>

                    <input
                      type="number"
                      name="quantity"
                      value={element.quantity}
                      className="roboinput"
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">Amount</label>
                    <input
                      type="text"
                      name="amount"
                      className="roboinput"
                      value={element.amount || ""}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Icon
            onClick={() => addClick()}
            icon="ic:baseline-plus"
            className="rounded-full text-lg text-white bg-primary w-10 h-10 p-2"
          />
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex gap-5">
              <div className="flex flex-col w-full">
                <label htmlFor="">Discount Type</label>
                <select
                  name=""
                  onChange={(e) => setDiscountType(e.target.value)}
                  className="roboinput"
                  id=""
                >
                  <option value="">Select Type</option>
                  <option value="percentage">Percentage</option>
                  <option value="raw_amount">Raw Amount</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-primary">
                  Enter Amount
                </label>
                <input
                  type="text"
                  className="roboinput"
                  name="item"
                  value={discountAmount}
                  onChange={(e) => setDiscountAmount(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-primary">
                  Total Amount
                </label>
                <input
                  type="text"
                  className="roboinput"
                  name="item"
                  value={totalAmount}
                  onChange={(e) => {}}
                />
              </div>
              {/* <div className="flex flex-col w-full">
                <label htmlFor="" className="text-primary">
                  Discount
                </label>
                <input
                  type="text"
                  className="roboinput"
                  name="item"
                  value={discountedAmount}
                  onChange={(e) => {}}
                />
              </div> */}
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-primary">
                  Sub-Total
                </label>
                <input
                  type="text"
                  className="roboinput"
                  name="item"
                  value={discountedAmount}
                  onChange={(e) => {}}
                />
              </div>
            </div>
          </div>
        </CardBody>

        <CardFooter className="w-full flex flex-row-reverse gap-3">
          <Button onClick={handleCreate} className="btn-basic rounded-md">
            Create
          </Button>
          <Button className="bg-white border border-stroke rounded-md shadow-sm">
            Clear
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default InvoiceCrationFrom;
