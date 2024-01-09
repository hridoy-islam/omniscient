"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function page() {
  const [informations, setInformations] = useState([
    {
      item: "",
      quantity: "",
      rate: "",
      tax: "",
      ammount: "",
    },
  ]);

  const addClick = () => {
    const newInfo = {
      item: "",
      quantity: "",
      rate: "",
      tax: "",
      ammount: "",
    };

    setInformations((prevInformations: any) => {
      const newInfo = {
        item: "",
        quantity: "",
        rate: "",
        tax: "",
        ammount: "",
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
    info[index] = { ...info[index], [name]: value };
    setInformations(info);
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
            <label htmlFor="">Rig Name</label>
            <select name="" className="roboinput" id="">
              <option>Hridoy</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Invoice Type</label>
            <select name="" className="roboinput" id="">
              <option>Bill Invoice</option>
              <option>Add On Invoice</option>
              <option>Rig Invoice</option>
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
                      type="text"
                      name="quantity"
                      className="roboinput"
                      id=""
                      value={element.quantity || ""}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">Amount</label>
                    <input
                      type="text"
                      name="ammount"
                      className="roboinput"
                      value={element.ammount || ""}
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
        </CardBody>
        <CardFooter className="w-full flex flex-row-reverse gap-3">
          <Button className="btn-basic rounded-md">Create</Button>
          <Button className="bg-white border border-stroke rounded-md shadow-sm">
            Clear
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
