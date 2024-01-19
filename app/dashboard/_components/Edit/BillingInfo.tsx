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
import Cookies from "universal-cookie";
import { DecodedToken } from "@/app/login/page";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

interface BillingInfoData {
  address: string;
  state: string;
  country: string;
  city: string;
  zipcode: string;
}

interface BillingInfoProps {
  id: string;
}

const BillingInfo: React.FC<BillingInfoProps> = ({ id }) => {
  // const cookie = new Cookies();
  // const token = cookie.get("jwt");
  // const decoded: DecodedToken = jwtDecode(token) as DecodedToken;

  const [billingInfo, setBillingInfo] = useState<BillingInfoData>({
    address: "",
    state: "",
    country: "",
    city: "",
    zipcode: "",
  });

  useEffect(() => {
    axios
      .get(`/users/${id}`)
      .then((response) => {
        // console.log("response", response?.data?.data);
        if (response?.data?.data?.billing_information) {
          setBillingInfo(response?.data?.data?.billing_information);
        }
      })
      .catch((err) => console.log("error", err));
  }, []);

  const handleSave = () => {
    // const userId = decoded?.id;
    if (!id) {
      console.error("User ID not available");
      return;
    }

    const formattedData = {
      billing_information: {
        address: billingInfo.address,
        state: billingInfo.state,
        city: billingInfo.city,
        zipcode: billingInfo.zipcode,
        country: billingInfo.country,
      },
    };

    const url = `/users/${id}`;

    axios
      .patch(url, formattedData)
      .then((response) => {
        toast.success(response?.data?.message);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        // console.error("Error saving data", error);
      });
  };

  const handleClear = () => {
    setBillingInfo({
      address: "",
      state: "",
      country: "",
      city: "",
      zipcode: "",
    });
  };

  const handleChange = (key: keyof BillingInfoData, value: string) => {
    setBillingInfo((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <Card>
      <CardHeader>
        <h2>Billing Information</h2>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col w-full">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            className="roboinput"
            id="address"
            value={billingInfo.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-2 items-center">
          <div>
            <div className="flex flex-col">
              <label htmlFor="state">State</label>
              <select
                name="state"
                id="state"
                className="roboinput"
                value={billingInfo.state}
                onChange={(e) => handleChange("state", e.target.value)}
              >
                <option>Dhaka</option>
                <option>Chittagong</option>
                <option>Rajshahi</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="country">Country</label>
              <select
                name="country"
                id="country"
                className="roboinput"
                value={billingInfo.country}
                onChange={(e) => handleChange("country", e.target.value)}
              >
                <option>Bangladesh</option>
                <option>India</option>
                <option>USA</option>
              </select>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                className="roboinput"
                id="city"
                value={billingInfo.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="zipcode">Zip Code</label>
              <input
                type="text"
                name="zipcode"
                className="roboinput"
                id="zipcode"
                value={billingInfo.zipcode}
                onChange={(e) => handleChange("zipcode", e.target.value)}
              />
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="w-full flex flex-row-reverse gap-3">
        <Button className="btn-basic rounded-md" onClick={handleSave}>
          Save
        </Button>
        <Button
          className="bg-white border border-stroke rounded-md shadow-sm"
          onClick={handleClear}
        >
          Clear
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BillingInfo;
