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
        title="Discover the Power Behind"
        subtitle="Your Mining Success."
        description="Learn about our mission, vision, and the cutting-edge technology that drives the future of cryptocurrency mining."
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
