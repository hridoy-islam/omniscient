"use client";
import type React from "react";
import { createContext, useContext, useState, type ReactNode } from "react";

interface ModalConfig {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  type?: "download" | "contact" | "demo" | "results";
}

interface ModalContextType {
  isOpen: boolean;
  config: ModalConfig;
  openModal: (config?: ModalConfig) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState<ModalConfig>({});

  const openModal = (modalConfig: ModalConfig = {}) => {
    setConfig({
      title: "Download Your Trading Robot",
      subtitle: "Fill out the form below to get instant access",
      buttonText: "Download AI Trading Robot",
      type: "download",
      ...modalConfig,
    });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Reset config after animation completes
    setTimeout(() => {
      setConfig({});
    }, 300);
  };

  return (
    <ModalContext.Provider value={{ isOpen, config, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
