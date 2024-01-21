import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import EditButton from "@/components/EditButton";
import ViewButton from "@/components/ViewButton";
import DeleteButton from "@/components/DeleteButton";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";

interface RigsProps {
  id: string;
}

const Rigs = ({ id }: RigsProps) => {
  const [rigData, setRigData] = useState({
    rigName: "",
    efficiency: 0,
    gpu: "",
    power: "",
    temp: "",
    load: "",
    fan: "",
  });

  const saveData = async () => {
    try {
      const apiUrl = "/rigs";
      const formattedData = {
        userid: id,
        ...rigData,
      };
      // Make a POST request to the API
      const response = await Axios.post(apiUrl, formattedData);
      // console.log("API Response:", response.data);
      toast.success(response?.data?.message);
      setRigData({
        rigName: "",
        efficiency: 0,
        gpu: "",
        power: "",
        temp: "",
        load: "",
        fan: "",
      });
    } catch (error) {
      // console.error("Error saving data:", error);
      toast.error("Something went wrong!");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRigData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Card>
        <CardHeader>
          <h2>Assign Rigs</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-2 gap-2 items-center">
            <div>
              <div className="flex flex-col">
                <label htmlFor="rigName">Rig Name</label>
                <input
                  type="text"
                  name="rigName"
                  className="roboinput"
                  value={rigData.rigName}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="gpu">GPU</label>
                <input
                  type="text"
                  name="gpu"
                  className="roboinput"
                  value={rigData.gpu}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <label htmlFor="efficiency">Efficiency</label>
                <input
                  type="number"
                  name="efficiency"
                  className="roboinput"
                  value={rigData.efficiency}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="power">Power</label>
                <input
                  type="text"
                  name="power"
                  className="roboinput"
                  value={rigData.power}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="temp">Temp</label>
              <input
                type="text"
                name="temp"
                className="roboinput"
                value={rigData.temp}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="load">Fan</label>
              <input
                type="text"
                name="fan"
                className="roboinput"
                value={rigData.fan}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="load">Load</label>
              <input
                type="text"
                name="load"
                className="roboinput"
                value={rigData.load}
                onChange={handleChange}
              />
            </div>
          </div>
        </CardBody>
        <CardFooter className="w-full flex flex-row-reverse gap-3">
          <Button className="btn-basic rounded-md" onClick={saveData}>
            Save
          </Button>
          <Button className="bg-white border border-stroke rounded-md shadow-sm">
            Clear
          </Button>
        </CardFooter>
      </Card>

      <Card className="my-6">
        <CardHeader className="tableHeader">
          <h2>Assigned Rigs</h2>
        </CardHeader>
        <CardBody>
          <table className="table-fixed">
            <thead>
              <tr>
                <th>Rig ID</th>
                <th>GPU</th>
                <th>Efficiency</th>
                <th>Power</th>
                <th>Temp</th>
                <th>Load</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
                <td>1961</td>
                <td>1961</td>
                <td>1961</td>
                <td>1961</td>
                <td>
                  <Chip color="warning">Warning</Chip>
                </td>
                <td>
                  <EditButton />
                  <ViewButton />
                  <DeleteButton />
                </td>
              </tr>
            </tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
};

export default Rigs;
