"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import axios from "@/utils/axios";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import { DecodedToken, UserData } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";

interface PersonalInfoProps {
  id: string;
}

const Profit: React.FC<PersonalInfoProps> = ({ id }) => {
  const [profit, setProfit] = useState(0);
  const [balance, setBalance] = useState(0);
  const [grossBalance, setGrossBalance] = useState(0);

  const cookie = new Cookies();
  const token = cookie.get("jwt");
  const decoded: DecodedToken = jwtDecode(token) as DecodedToken;

  useEffect(() => {
    axios
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response) {
          setProfit(response?.data?.data?.profit);
          setBalance(response?.data?.data?.balance);
          setGrossBalance(response?.data?.data?.grossBalance);
        }
      })
      .catch((err) => console.log(""));
  }, []);

  const handleSave = () => {
    // const userId = decoded?.id;
    if (!id) {
      console.error("User ID not available");
      return;
    }

    const url = `/users/${id}`;

    axios
      .patch(
        url,
        { profit, balance, grossBalance },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success(response?.data?.message);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        // console.error("Error saving data", error);
      });
  };

  return (
    <Card>
      <CardHeader>
        <h2>Profile Information</h2>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-2 gap-2 items-center">
          <div>
            <div className="flex gap-2">
              <div className="flex flex-col w-full">
                <label htmlFor="profit">Profit</label>
                <input
                  type="number"
                  name="profit"
                  className="roboinput"
                  id="profit"
                  value={profit}
                  onChange={(e) => setProfit(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col w-full">
                <label htmlFor="balance">Balance</label>
                <input
                  type="number"
                  name="balance"
                  className="roboinput"
                  id="balance"
                  value={balance}
                  onChange={(e) => setBalance(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col w-full">
                <label htmlFor="grossBalance">Gross Balance</label>
                <input
                  type="number"
                  name="grossBalance"
                  className="roboinput"
                  id="grossBalance"
                  value={grossBalance}
                  onChange={(e) => setGrossBalance(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="w-full flex flex-row-reverse gap-3">
        <Button className="btn-basic rounded-md" onClick={handleSave}>
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Profit;
