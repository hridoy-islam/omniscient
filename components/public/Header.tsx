"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import React from "react";
import robofxicon from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <Navbar>
      <NavbarBrand>
        <div>
          <Link href={'/'}>
          <Image src={robofxicon} alt="Robofx" /></Link>
        </div>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link className="text-darkText text-base font-bold px-2" href={"/"}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className="text-lightText text-base font-medium px-2"
            href={"/about"}
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-lightText text-base font-medium px-2"
            href={"/support"}
          >
            Support
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-lightText text-base font-medium px-2"
            href={"/faq"}
          >
            FAQ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-lightText text-base font-medium px-2"
            href={"/contact"}
          >
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="text-white bg-primary rounded-full text-base font-medium"
            href={"/login"}
            variant="flat"
          >
            Mining
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="text-red" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}
