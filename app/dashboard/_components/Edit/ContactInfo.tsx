"use client";

import React, { useState, useEffect } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import axios from "@/utils/axios";
import Cookies from "universal-cookie";
import { DecodedToken } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { countries } from "@/utils/constants";

interface ContactInfoProps {
  id: string;
}

const ContactInfo = ({ id }: ContactInfoProps) => {
  // const cookie = new Cookies();
  // const token = cookie.get("jwt");
  // const decoded: DecodedToken = jwtDecode(token) as DecodedToken;

  const [contactData, setContactData] = useState({
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
        if (response?.data?.data?.contact_information) {
          setContactData(response?.data?.data?.contact_information);
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
      contact_information: {
        address: contactData.address,
        state: contactData.state,
        city: contactData.city,
        zipcode: contactData.zipcode,
        country: contactData.country,
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
    // Clear the contact information locally
    setContactData({
      address: "",
      state: "",
      country: "",
      city: "",
      zipcode: "",
    });
  };

  const handleChange = (key: string, value: string) => {
    setContactData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <Card>
      <CardHeader>
        <h2>Contact Information</h2>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col w-full">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            className="roboinput"
            id="address"
            value={contactData.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-2 items-center">
          <div>
            <div className="flex flex-col mb-0.5">
              <label htmlFor="state">State</label>
              <input
                name="state"
                id="state"
                className="roboinput"
                value={contactData.state}
                onChange={(e) => handleChange("state", e.target.value)}
              />
                
              
            </div>
            <div className="">
              {/* <label htmlFor="country">Country</label>
              <select
                name="country"
                id="country"
                className="roboinput"
                value={contactData.country}
                onChange={(e) => handleChange("country", e.target.value)}
              >
                <option>Country 1</option>
                <option>Country 2</option>
              </select> */}
              <label htmlFor="country">
                Country
              </label>
              <Autocomplete
                defaultItems={countries}
                label=""
                placeholder="Search a country"
                className="mt-1.5 border rounded-xl border-primary focus:outline-none target:border-none h-[38px] flex items-center shadow-none"
                variant="bordered"
              >
                {(country) => (
                  <AutocompleteItem key={country?.code}>
                    {country?.name}
                  </AutocompleteItem>
                )}
              </Autocomplete>
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
                value={contactData.city}
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
                value={contactData.zipcode}
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

export default ContactInfo;
