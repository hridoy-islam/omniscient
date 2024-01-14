"use client";
import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import DeleteButton from "@/components/DeleteButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "@/utils/axios";
// Define the type for a single wallet item
interface Wallet {
  _id: string;
  name: string;
  // Add other properties if needed
}

// Define the type for the prop containing an array of wallets
interface WalletDisplayProps {
  wallets: Wallet[];
}

const WalletDisplay: React.FC<WalletDisplayProps> = ({ wallets }) => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [updatedName, setUpdatedName] = useState("");
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);

  const handleEdit = (wallet: Wallet) => {
    setSelectedWallet(wallet);
    setUpdatedName(wallet.name);
    onOpen();
  };

  const handleUpdate = async () => {
    try {
      if (!selectedWallet) {
        console.error("No exchange selected for update");
        return;
      }

      const apiUrl = `/wallet/${selectedWallet._id}`;
      const response = await axios.patch(apiUrl, {
        name: updatedName,
      });

      toast.success(response?.data?.message);
      router.refresh();
      onOpenChange();
    } catch (error) {
      toast.error("Error updating wallet");
      console.error("Error updating wallet", error);
    }
  };
  return (
    <Card className="shadow-xl">
      <CardHeader>
        <h2>Wallet Names</h2>
      </CardHeader>
      <CardBody>
        <table className="table-fixed">
          <thead>
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {wallets.map((wallet, index) => (
              <tr key={wallet._id}>
                <td>{index + 1}</td>
                <td>{wallet.name}</td>
                <td>
                  <Button
                    onPress={() => handleEdit(wallet)}
                    className="bg-primary text-white text-md"
                  >
                    <Icon icon="uil:edit" className="text-lg" />
                    <span>Edit</span>
                  </Button>{" "}
                  <DeleteButton label="wallet" id={wallet?._id} />
                </td>
              </tr>
            ))}
          </tbody>
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            isDismissable={false}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                  <ModalBody>
                    {" "}
                    <label htmlFor="updatedName">Exchange Name</label>
                    <input
                      type="text"
                      id="updatedName"
                      className="roboinput"
                      value={updatedName}
                      onChange={(e) => setUpdatedName(e.target.value)}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button
                      color="primary"
                      className="text-white"
                      onPress={handleUpdate}
                    >
                      Update
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </table>
      </CardBody>
    </Card>
  );
};

export default WalletDisplay;
