import Contact from "@/components/public/Contact";
import ContactHeader from "@/components/public/ContactHeader";
import Footer from "@/components/public/Footer";
import Header from "@/components/public/Header";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <ContactHeader />
      <Contact />
      <Footer />
    </div>
  );
}
