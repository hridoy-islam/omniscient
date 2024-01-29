import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import EditButton from "@/components/EditButton";
import ViewButton from "@/components/ViewButton";
import DeleteButton from "@/components/DeleteButton";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";
import { Icon } from "@iconify/react/dist/iconify.js";
import Cookies from "universal-cookie";
import { RigData } from "@/utils/interfaces";
import { useRouter } from "next/navigation";

interface RigsProps {
  id: string;
  rigs: RigData[];
}

const Rigs = ({ id, rigs }: RigsProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const cookie = new Cookies();
  const token = cookie.get("jwt");
  const router = useRouter();

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
        efficiency: Number(rigData?.efficiency),
      };
      // Make a POST request to the API
      const response = await Axios.post(apiUrl, formattedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(response?.data?.message);
      router.refresh();
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

  const [showStartAllButton, setShowStartAllButton] = useState(true);
  const [showPauseAllButton, setShowPauseAllButton] = useState(false);

  useEffect(() => {
    const storedShowStartAllButton = localStorage.getItem("showStartAllButton");
    const storedShowPauseAllButton = localStorage.getItem("showPauseAllButton");

    if (
      storedShowStartAllButton !== null &&
      storedShowPauseAllButton !== null
    ) {
      setShowStartAllButton(storedShowStartAllButton === "true");
      setShowPauseAllButton(storedShowPauseAllButton === "true");
    }
  }, []);

  const handleStartAllRigs = async () => {
    const url = `/history/startall/${id}`;

    await Axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.data.success) {
          setShowStartAllButton(false);
          setShowPauseAllButton(true);
          localStorage.setItem("showStartAllButton", "false");
          localStorage.setItem("showPauseAllButton", "true");
          toast.success(response?.data?.message);
          router.refresh();
        }
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        console.error("Error starting rigs:", error);
      });
  };

  const handlePauseAllRigs = async () => {
    const url = `/history/pauseall/${id}`;

    await Axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.data.success) {
          setShowStartAllButton(true);
          setShowPauseAllButton(false);
          localStorage.setItem("showStartAllButton", "true");
          localStorage.setItem("showPauseAllButton", "false");
          toast.success(response?.data?.message);
          router.refresh();
        }
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        console.error("Error pausing rigs:", error);
      });
  };

  const [selectedRig, setSelectedRig] = useState<RigData>();

  const [modalFormData, setModalFormData] = useState({
    rigName: "",
    efficiency: 0,
    gpu: "",
    power: "",
    temp: "",
    load: "",
    fan: "",
  });

  const handleOpen = (rig: RigData) => {
    onOpen();
    setSelectedRig(rig);
    setModalFormData(rig); // Populate modal form data with selected rig data
  };

  const handleChangeModal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setModalFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const apiUrl = `/rigs/${selectedRig?._id}`; // Adjust the API endpoint accordingly
      // Make a PUT request to update the rig data
      const response = await Axios.patch(apiUrl, modalFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(response?.data?.message);
      onOpenChange();
    } catch (error) {
      toast.error("Something went wrong!");
      // console.error("Error updating rig data:", error);
    }
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
          <h2> </h2>
          <div className="flex justify-between">
            {showStartAllButton && (
              <Button onClick={handleStartAllRigs} className="bg-primaryLight">
                <Icon icon="ph:play-fill" /> Start All Rigs
              </Button>
            )}
            {showPauseAllButton && (
              <Button onClick={handlePauseAllRigs} className="bg-[#f9e5e5]">
                <Icon icon="solar:pause-bold" /> Stop All Rigs
              </Button>
            )}
          </div>
        </CardHeader>
        <CardBody>
          <table className="table-fixed">
            <thead>
              <tr>
                <th>Rig Name</th>
                <th>GPU</th>
                <th>Efficiency</th>
                <th>Temp</th>
                <th>Power</th>
                <th>Load</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rigs?.map((rig, index) => (
                <tr key={index}>
                  <td>{rig?.rigName}</td>
                  <td>{rig?.gpu}</td>
                  <td>{rig?.efficiency}</td>
                  <td>{rig?.temp}</td>
                  <td>{rig?.power}</td>
                  <td>{rig?.load}</td>
                  <td>
                    <Chip color="warning">{rig?.status}</Chip>
                  </td>
                  <td>
                    <Button
                      onClick={() => handleOpen(rig)}
                      className="bg-primary text-white text-md"
                    >
                      <Icon icon="uil:edit" className="text-lg" />
                      <span>Edit</span>
                    </Button>
                    {/* <ViewButton /> */}
                    <DeleteButton id={rig?._id} label="rigs" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
        <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Modal Title
                </ModalHeader>
                <ModalBody>
                  <Card>
                    <CardHeader></CardHeader>
                    <CardBody>
                      <div className="grid grid-cols-2 gap-2 items-center">
                        <div>
                          <div className="flex flex-col">
                            <label htmlFor="rigName">Rig Name</label>
                            <input
                              type="text"
                              name="rigName"
                              className="roboinput"
                              value={modalFormData?.rigName}
                              onChange={handleChangeModal}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="gpu">GPU</label>
                            <input
                              type="text"
                              name="gpu"
                              className="roboinput"
                              value={modalFormData?.gpu}
                              onChange={handleChangeModal}
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
                              value={modalFormData?.efficiency}
                              onChange={handleChangeModal}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="power">Power</label>
                            <input
                              type="text"
                              name="power"
                              className="roboinput"
                              value={modalFormData?.power}
                              onChange={handleChangeModal}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="temp">Temp</label>
                          <input
                            type="text"
                            name="temp"
                            className="roboinput"
                            value={modalFormData?.temp}
                            onChange={handleChangeModal}
                          />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="load">Fan</label>
                          <input
                            type="text"
                            name="fan"
                            className="roboinput"
                            value={modalFormData?.fan}
                            onChange={handleChangeModal}
                          />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="load">Load</label>
                          <input
                            type="text"
                            name="load"
                            className="roboinput"
                            value={modalFormData?.load}
                            onChange={handleChangeModal}
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    onClick={handleUpdate}
                    color="primary"
                    onPress={onClose}
                    className="text-white"
                  >
                    Update
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Card>
    </>
  );
};

export default Rigs;
