"use client";
import Footer from "@/components/public/Footer";
import Header from "@/components/public/Header";
import SupportForm from "@/components/public/SupportForm";
import SupportStep from "@/components/public/SupportStep";
import Breadcumb from "@/components/ui/breadcumb";

export default function page() {
  return (
    <>
      <Header />
      <Breadcumb
        tagline="Welcome to the RoboFX Support Center: Your Comprehensive Assistance Hub"
        title="Need Help?"
        subtitle="We've got your back!"
        description="Encountered a bump in your mining journey? No worries! Our quick solutions keep you mining without a hitch. From network checks to optimizing configurations, we've got you covered. Seamless mining is just a solution away. Mine on, stress-free! ⛏️💰`"
      />
      <SupportStep />
      <SupportForm />
      <Footer />
    </>
  );
}
