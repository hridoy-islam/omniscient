"use client";
import AboutHeader from "@/components/public/AboutHeader";
import AboutMission from "@/components/public/AboutMission";
import AboutVission from "@/components/public/AboutVission";
import Footer from "@/components/public/Footer";
import Header from "@/components/public/Header";
import Mining from "@/components/public/Mining";
import Testimonial from "@/components/public/Testimonial";

export default function page() {
  return (
    <div>
      <Header />
      <AboutHeader />
      <Mining />
      <AboutMission />
      <AboutVission />
      <Testimonial />
      <Footer />
    </div>
  );
}
