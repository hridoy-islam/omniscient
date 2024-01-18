"use client";

import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import { DecodedToken, UserData } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";

interface WalletTabProps {
  allWallets: { _id: string; name: string; __v: number }[];
  allExchanges: { _id: string; name: string; __v: number }[];
  currentUser: UserData;
}

const WalletTab: React.FC<WalletTabProps> = ({
  allWallets,
  allExchanges,
  currentUser,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const cookies = new Cookies();
  const token = cookies.get("jwt");
  const decode: DecodedToken = jwtDecode(token) as DecodedToken;

  const [formValues, setFormValues] = useState({
    exchange: allExchanges?.[0]?.name || "",
    wallet: allWallets?.[0]?.name || "",
    account: "",
    // _id: "",
  });

  // State for modal mode (add or edit)
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");

  // State for the index of the wallet being edited
  const [editedWalletIndex, setEditedWalletIndex] = useState<number | null>(
    null
  );

  const userWallets = currentUser?.wallets;

  const submitForm = async () => {
    const formattedValue = {
      wallets: {
        exchange: formValues?.exchange,
        wallet: formValues?.wallet,
        account: formValues?.account,
        // _id: formValues?._id,
      },
    };

    try {
      if (modalMode === "add") {
        // Add new wallet
        const response = await Axios.patch(
          `/users/${decode?.id}`,
          formattedValue
        );
        toast.success(response?.data?.message);
      } else if (modalMode === "edit" && editedWalletIndex !== null) {
        // Edit existing wallet
        const updatedUserWallets = [...userWallets];
        // updatedUserWallets[editedWalletIndex] = formattedValue.wallets;
        const response = await Axios.patch(`/users/${decode?.id}`, {
          wallets: updatedUserWallets,
        });
        toast.success(response?.data?.message);
        setEditedWalletIndex(null);
      }

      // Clear the form values
      setFormValues({
        exchange: allExchanges?.[0]?.name || "",
        wallet: allWallets?.[0]?.name || "",
        account: "",
        // _id: "", // Reset _id property
      });
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("API Error:", error);
    }
  };

  // Handle form input changes
  const handleInputChange = (fieldName: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  // Open the modal in "add" mode
  const openAddModal = () => {
    setModalMode("add");
    onOpen();
  };

  // Open the modal in "edit" mode
  const openEditModal = (index: number) => {
    setModalMode("edit");
    setEditedWalletIndex(index);
    // Set the form values based on the wallet being edited
    setFormValues({
      exchange: userWallets[index]?.exchange || "",
      wallet: userWallets[index]?.wallet || "",
      account: userWallets[index]?.account || "",
    //   _id: userWallets[index]?._id || "", // Include _id property
    });
    onOpen();
  };

  return (
    <>
      <Card>
        <CardHeader className="tableHeader">
          <div>
            <h2>Wallet</h2>
          </div>
          <div>
            <Button onPress={openAddModal} className="btn-basic rounded-md">
              <Icon icon="ic:round-plus" width={24} /> Add New
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <table className="table-fixed">
            <thead>
              <tr>
                <th>Exchange</th>
                <th>Wallet</th>
                <th>Account Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userWallets?.map((wallet, index) => (
                <tr key={index}>
                  <td>{wallet?.exchange}</td>
                  <td>{wallet?.wallet}</td>
                  <td>{wallet?.account}</td>
                  <td>
                    <Button
                      className="bg-primary text-white text-md"
                      onPress={() => openEditModal(index)}
                    >
                      <Icon icon="uil:edit" className="text-lg" />
                      <span>Edit</span>
                    </Button>
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
                {modalMode === "add" ? "Add Wallet" : "Edit Wallet"}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col">
                  <label className="text-primary" htmlFor="exchange">
                    Exchange*
                  </label>
                  <select
                    required
                    name="exchange"
                    id="exchange"
                    className="roboinput"
                    onChange={(e) =>
                      handleInputChange("exchange", e.target.value)
                    }
                    value={formValues.exchange}
                  >
                    {allExchanges?.map((exchange, index) => (
                      <option key={index}>{exchange?.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-primary" htmlFor="wallet">
                    Wallet*
                  </label>
                  <select
                    required
                    name="wallet"
                    id="wallet"
                    className="roboinput"
                    onChange={(e) =>
                      handleInputChange("wallet", e.target.value)
                    }
                    value={formValues.wallet}
                  >
                    {allWallets?.map((wallet, index) => (
                      <option key={index}>{wallet?.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-primary">
                    Account Address*
                  </label>
                  <input
                    required
                    type="text"
                    name="phone"
                    className="roboinput"
                    id="phone"
                    onChange={(e) =>
                      handleInputChange("account", e.target.value)
                    }
                    value={formValues.account}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="w-full text-white"
                  color="primary"
                  onPress={() => {
                    submitForm();
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
    </>
  );
};

export default WalletTab;
