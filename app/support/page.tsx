"use client";
import Footer from "@/components/public/Footer";
import Header from "@/components/public/Header";
import SupportForm from "@/components/public/SupportForm";
import SupportHeader from "@/components/public/SupportHeader";
import SupportStep from "@/components/public/SupportStep";

export default function page() {
  return (
    <>
      <Header />
      <SupportHeader />
      <SupportStep />
      <SupportForm />
      <Footer />
    </>
  );
}
