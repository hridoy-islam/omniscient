"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { usePathname } from "next/navigation";

export default function UserNavbar() {
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
    <div className="">
      <Navbar disableAnimation className="bg-white border border-stroke">
        <NavbarContent className="sm:hidden " justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">Dashboard</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarBrand>
            <p className="font-bold text-inherit">Dashboard</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button color="warning" className="text-white border">
              BTC
            </Button>
          </NavbarItem>
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
