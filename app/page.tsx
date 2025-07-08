"use client";
import Advantages from "@/components/Advantages";
import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderTop from "@/components/HeaderTop";
import HowToWork from "@/components/HowToWork";
import LiveResult from "@/components/LiveResult";
import OfficeLocations from "@/components/OfficeLocations";
import Pricing from "@/components/Pricing";
import RobotAnalyze from "@/components/RobotAnalyze";
import Testimonial from "@/components/Testimonial";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner />
      <Advantages />
      <HowToWork />
      <RobotAnalyze />
      <LiveResult />
      <Faq />
      <Pricing />
      <Testimonial />
      <OfficeLocations />
      <Footer />
    </div>
  );
}
