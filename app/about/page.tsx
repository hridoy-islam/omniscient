"use client";
import AboutHeader from "@/components/public/AboutHeader";
import AboutMission from "@/components/public/AboutMission";
import AboutStep from "@/components/public/AboutStep";
import AboutVission from "@/components/public/AboutVission";
import Footer from "@/components/public/Footer";
import Header from "@/components/public/Header";
import Mining from "@/components/public/Mining";
import Testimonial from "@/components/public/Testimonial";
import Breadcumb from "@/components/ui/breadcumb";

export default function page() {
  return (
    <div>
      <Header />
      <Breadcumb
        tagline="About Us"
        title="Crafting Success: Unveiling Our Story"
        subtitle="It’s super simple — your mining rigs are already set up and running."
        description="At RoboFX, we make crypto mining effortless. No complex setups, no technical headaches — just powerful, automated mining working for you 24/7. ⛏️💰"
      />
      {/* <AboutHeader /> */}
      <Mining />
      <AboutStep />
      <AboutMission />
      <AboutVission />
      <Testimonial />
      <Footer />
    </div>
  );
}
