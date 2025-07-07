import Faq from "@/components/public/Faq";
import FaqHeader from "@/components/public/ContactHeader";
import Footer from "@/components/public/Footer";
import Header from "@/components/public/Header";
import Breadcumb from "@/components/ui/breadcumb";

export default function page() {
  return (
    <div>
      <Header />
      <Breadcumb
        tagline="Welcome to the RoboFX FAQ"
        title="Your Go-To Guide for Quick Answers"
        subtitle="Got Questions?"
        description="We’ve Mined the Answers for You! Before you hit support, check here! Whether you're wondering about mining setups, payouts, system requirements, or common troubleshooting tips — this is your first stop for fast, reliable info. 💡 Our curated FAQ covers the essentials (and then some), helping you resolve issues in minutes so you can keep mining with confidence. ⛏️⚙️"
      />
      <Faq />
      <Footer />
    </div>
  );
}
