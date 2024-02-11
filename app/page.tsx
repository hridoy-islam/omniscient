"use client";
import AppView from "@/components/public/AppView";
import Banner from "@/components/public/Banner";
import Contact from "@/components/public/Contact";
import Faq from "@/components/public/Faq";
import Footer from "@/components/public/Footer";
import Mining from "@/components/public/Mining";
import Pricing from "@/components/public/Pricing";
import Product from "@/components/public/Product";
import Testimonial from "@/components/public/Testimonial";
import WhyChooseUs from "@/components/public/WhyChooseUs";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import { DecodedToken } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/public/Header"), {
  ssr: false,
});

export default function page() {
  const router = useRouter();
  const cookie = new Cookies();
  const token = cookie.get("jwt");
  let decoded: DecodedToken;
  if (token) {
    decoded = jwtDecode(token) as DecodedToken;
  }

  return (
    <>
      <Header />
      <Banner />
      <Mining />
      <Pricing />
      <AppView />
      <Product />
      <WhyChooseUs />
      <Faq />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
