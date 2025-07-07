import Contact from "@/components/public/Contact";
import ContactHeader from "@/components/public/ContactHeader";
import Footer from "@/components/public/Footer";
import Header from "@/components/public/Header";
import Breadcumb from "@/components/ui/breadcumb";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <Breadcumb
        tagline="Contact Us"
        title="We’re Here to Help — Anytime, Anywhere"
        subtitle="Got a question, issue, or just want to say hi?"
        description="Reach out — we’ll get back to you as quickly as possible. Your mining journey matters to us!"
      />
      <Contact />
      <Footer />
    </div>
  );
}
