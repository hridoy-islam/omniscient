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
import React from "react";
import robofxicon from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Header() {
  const menuItems = ["About", "Support", "Faq", "Contact"];
  return (
    <Navbar
      className="py-2 container mx-auto static bg-transparent"
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarMenuToggle
          icon={<Icon icon="material-symbols:menu" width={24} />}
          className="sm:hidden"
        />

        <NavbarBrand>
          <Link href={"/"}>
            <Image src={robofxicon} alt="robofx" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="space-x-6">
        <NavbarItem className="hidden lg:flex">
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="/about">About Us</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="/support">Support</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="/faq">FAQ</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="/contact">Contact Us</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/login"
            variant="flat"
            className="btn-basic rounded-3xl"
          >
            Mining
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={`/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
