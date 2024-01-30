"use client";

import React, { useEffect } from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { UserData, settingsData } from "@/utils/interfaces";
import { currencyConvert } from "@/utils/currencyConvert";



interface UserSidebarProps {
  currentUser: UserData;
  settings: settingsData[];
}

export default function UserNavbar({
  currentUser,
  settings,
}: UserSidebarProps) {
  const sidebarmenu = [
    {
      path: "/dashboard/user",
      name: "Dashboard",
      icon: <Icon icon="solar:pie-chart-outline" />,
    },
    {
      path: "/dashboard/user/mining",
      name: "Mining",
      icon: <Icon icon="solar:layers-linear" />,
    },
    {
      path: "/dashboard/user/rigs",
      name: "Rigs",
      icon: <Icon icon="solar:user-id-outline" />,
    },
    {
      path: "/dashboard/user/withdraw",
      name: "Withdraw",
      icon: <Icon icon="ri:currency-fill" />,
    },
    {
      path: "/dashboard/user/settings",
      name: "Settings",
      icon: <Icon icon="solar:settings-linear" />,
    },
    {
      path: "/dashboard/user/invoice",
      name: "Invoice",
      icon: <Icon icon="basil:invoice-outline" />,
    },

    {
      path: "/dashboard/user/product",
      name: "Product",
      icon: <Icon icon="solar:bag-heart-linear" />,
    },
  ];
  const pathname = usePathname();


  return (
    <div>
      <Navbar className="bg-white border border-stroke">
        {/* Toggle button for small screens */}
        <NavbarContent>
          <NavbarMenuToggle
            icon={<Icon icon="material-symbols:menu" width={24} />}
            className="lg:hidden"
          />
        </NavbarContent>

        {/* User info for all screens */}
        <NavbarContent className="sm:flex sm:items-center sm:justify-between">
          <NavbarBrand>
            <p className="font-bold text-inherit">{currentUser?.email}</p>
          </NavbarBrand>

          {/* Buttons and Logout for all screens */}
          <NavbarContent className="hidden sm:flex gap-4" justify="end">
            <NavbarItem>
              <div className="hidden sm:flex gap-2">
                <Button className="text-white bg-yellow rounded-e-none">
                  {currencyConvert(currentUser?.grossBalance, settings[0]?.btc)}{" "}
                  BTC
                </Button>
                <Button className="text-white bg-yellow rounded-l-none">
                  Gross <Icon icon="solar:dollar-linear" width={18} />
                </Button>
              </div>
            </NavbarItem>
            <NavbarItem>
              <div className="hidden sm:flex gap-2">
                <Button className="text-white bg-green rounded-e-none">
                  {currencyConvert(currentUser?.balance, settings[0]?.btc)} BTC
                </Button>
                <Button className="text-white bg-green rounded-l-none">
                  Live <Icon icon="solar:dollar-linear" width={18} />
                </Button>
              </div>
            </NavbarItem>
            <NavbarItem>
              <LogoutButton />
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>

        {/* Sidebar menu for small screens */}
        <NavbarMenu>
          <ul>
            {sidebarmenu.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`py-2 px-3 flex justify-start rounded-lg my-3 text-xl 
                    ${
                      pathname.toString().includes(item.path.toString())
                        ? "bg-primary text-white"
                        : ""
                    }`}
                >
                  <span className="text-2xl mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
