"use client";

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
import { Icon } from "@iconify/react/dist/iconify.js";
import { usePathname } from "next/navigation";
import { UserData } from "@/utils/interfaces";

interface UserSidebarProps {
  currentUser: UserData;
}

export default function AdminNavbar({ currentUser }: UserSidebarProps) {
  const sidebarmenu = [
    {
      path: "/dashboard/admin",
      name: "Dashboard",
      icon: <Icon icon="solar:pie-chart-outline" />,
    },
    {
      path: "/dashboard/admin/user",
      name: "User",
      icon: <Icon icon="solar:user-linear" />,
    },
    {
      path: "/dashboard/admin/withdraw",
      name: "Withdraw",
      icon: <Icon icon="solar:banknote-2-linear" />,
    },
    {
      path: "/dashboard/admin/product",
      name: "Product",
      icon: <Icon icon="solar:bag-heart-linear" />,
    },
    {
      path: "/dashboard/admin/invoice",
      name: "Invoice",
      icon: <Icon icon="ri:currency-fill" />,
    },
    {
      path: "/dashboard/admin/order",
      name: "Order",
      icon: <Icon icon="akar-icons:cart" />,
    },
    {
      path: "/dashboard/admin/vendor",
      name: "Vendor",
      icon: <Icon icon="iconoir:bank" />,
    },
    {
      path: "/dashboard/admin/settings",
      name: "Settings",
      icon: <Icon icon="solar:settings-linear" />,
    },
  ];
  const pathname = usePathname();

  return (
    <div className="flex w-full bg-white drop-shadow-1">
      <Navbar disableAnimation className="bg-white border border-stroke">
        <NavbarContent className="sm:hidden " justify="start">
          <NavbarMenuToggle
            icon={<Icon icon="material-symbols:menu" width={24} />}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">{currentUser?.email}</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarBrand>
            <p className="font-bold text-inherit">{currentUser?.email}</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <LogoutButton />
          </NavbarItem>
        </NavbarContent>

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
          {/* {menuItems?.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))} */}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
