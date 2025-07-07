"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import whitelogo from "../../public/whitelogo.png";

export default function Footer() {
  return (
    <div className="bg-black p-10 text-white">
      <div className="md:flex sm:flex-row gap-3 justify-between py-8 sm:space-y-6">
        <div className="md:w-1/2 sm:w-full space-y-2">
          <Image src={"/logo.png"} alt="" width={200} height={100} />
          <p>
            As you reach the end of this page, remember that your journey with
            us is just beginning. At Algopips, we are committed to fostering a
            vibrant community of enthusiasts, professionals, and visionaries in
            the world of cryptocurrency mining. Stay connected with us for the
            latest updates, insights, and support. For queries, assistance, or
            sharing your own mining success stories, reach out to us at
            support@algopips.net. Together, let's embark on a path of
            innovation, efficiency, and unparalleled success in the exciting
            realm of crypto mining. Follow us on social media to be a part of
            our ever-growing family. Happy Mining!
          </p>
        </div>
        <div className="space-y-2">
          <h2>Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href={"support"}>Support</Link>
            </li>
            <li>
              <Link href={"contact"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"faq"}>Faq</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2>Explore</h2>
          <ul className="space-y-2">
            <li>
              <Link href={"/"}>Packages</Link>
            </li>
            <li>
              <Link href={"/"}>Gpus</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2>Legal</h2>
          <ul className="space-y-2">
            <li>
              <Link href={"/"}>Terms & Conditions</Link>
            </li>
            <li>
              <Link href={"/"}>Cokkie Policy</Link>
            </li>
            <li>
              <Link href={"/"}>Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="md:flex justify-between sm:flex-row">
        <p>© 2025 Algopips All Rights Reserved</p>
        <ul className="flex gap-3">
          <li>
            <Link href="/">
              <Icon
                icon="ic:baseline-facebook"
                className="text-primary"
                width={16}
              ></Icon>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Icon
                icon="mdi:instagram"
                className="text-primary"
                width={16}
              ></Icon>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Icon
                icon="mdi:linkedin"
                className="text-primary"
                width={16}
              ></Icon>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Icon
                icon="mdi:youtube"
                className="text-primary"
                width={16}
              ></Icon>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Icon
                icon="mdi:pinterest"
                className="text-primary"
                width={16}
              ></Icon>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
