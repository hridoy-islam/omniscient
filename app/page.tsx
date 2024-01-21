import Banner from "@/components/public/Banner";
import Contact from "@/components/public/Contact";
import Faq from "@/components/public/Faq";
import Footer from "@/components/public/Footer";
import Header from "@/components/public/Header";
import Mining from "@/components/public/Mining";
import Pricing from "@/components/public/Pricing";
import WhyChooseUs from "@/components/public/WhyChooseUs";

export default function page() {
  return (
    <>
      <Header />
      <Banner />
      <Mining />
      <Pricing />
      <WhyChooseUs />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
