import Footer from "@/components/public/Footer";
import Header from "@/components/public/Header";
import SupportGrid from "@/components/public/SupportGrid";
import SupportHeader from "@/components/public/SupportHeader";
import SupportStep from "@/components/public/SupportStep";

export default function page() {
  return (
    <>
      <Header />
      <SupportHeader />
      <SupportGrid />
      <SupportStep />
      <Footer />
    </>
  );
}
