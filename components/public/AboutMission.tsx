import { Card } from "@nextui-org/react";

export default function AboutMission() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <div>
          <h2 className="text-primary">Mining</h2>
          <h3 className="text-secondary md:text-4xl sm:text-2xl">
            Our Mission: Empowering Your Crypto Mining Endeavors
          </h3>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10">
          <Card className="bg-primary text-white space-y-2 p-8">
            <h2>Catalyzing the Crypto Mining Movement</h2>
            <p>
              At RoboFX, our mission is to empower every individual and
              organization with the tools and technology required to navigate
              the complex world of cryptocurrency mining. We are committed to
              democratizing the mining process, making it accessible,
              profitable, and sustainable for all.
            </p>
          </Card>
          <Card className="bg-primary text-white space-y-2 p-8">
            <h2>Innovation at the Core</h2>
            <p>
              We believe that the backbone of successful mining is innovative
              technology. Our continuous pursuit of advancements in mining
              hardware and software ensures that our customers are equipped with
              cutting-edge solutions. By pushing the boundaries of what's
              possible, we aim to elevate the standard of mining operations
              worldwide.
            </p>
          </Card>
          <Card className="bg-primary text-white space-y-2 p-8">
            <h2>Sustainability in Every Step</h2>
            <p>
              Understanding the environmental impact of mining, we are dedicated
              to promoting and practicing eco-friendly mining. Our mission
              extends beyond profits, encompassing the well-being of our planet.
              Through energy-efficient technology and green initiatives, we
              strive to minimize our carbon footprint while maximizing mining
              efficiency.
            </p>
          </Card>
          <Card className="bg-primary text-white space-y-2 p-8">
            <h2>Educating and Building Community</h2>
            <p>
              Knowledge is power, and we aim to empower our community by sharing
              our expertise in crypto mining. Through educational resources and
              dedicated support, we help our clients make informed decisions,
              fostering a community that grows stronger together.
            </p>
          </Card>
          <Card className="bg-primary text-white space-y-2 p-8">
            <h2>Your Success is Our Success</h2>
            <p>
              Your mining success is the measure of our achievement. Our mission
              is to provide a transparent, fair, and rewarding mining
              experience, ensuring that our clients' investments turn into
              profitable returns. At RoboFX, we're not just building a mining
              farm; we're cultivating a foundation for financial freedom and
              innovation in the cryptocurrency space.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
