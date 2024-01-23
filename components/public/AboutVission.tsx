import { Card } from "@nextui-org/react";

export default function AboutVission() {
  return (
    <div className="container mx-auto py-16">
      <Card className="bg-primary text-white p-10">
        <div className="space-y-3">
          <h2>Our Vision</h2>
          <h3 className="text-4xl font-semibold">
            Charting Tomorrow: Our Vision for Mining Excellence
          </h3>
          <p>
            As we strive to be pioneers, sustainability champions, and
            technological vanguards, our vision extends beyond profit,
            envisioning a global community where progress, ethics, and
            prosperity intertwine harmoniously.{" "}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-5">
          <Card className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Industry Pioneers</h2>
            <p>
              At the forefront of our vision is the aspiration to be industry
              pioneers, setting new benchmarks with revolutionary mining
              solutions. We strive to lead the way, not just in terms of
              innovation but by establishing standards that reshape the
              landscape of the mining sector, inspiring others to follow suit.
            </p>
          </Card>
          <Card className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">
              Sustainability and Inclusivity Champions
            </h2>
            <p>
              We envision a future where ethical practices are paramount, and
              sustainability and inclusivity are embedded in every facet of our
              operations. As champions of these values, our vision extends
              beyond profitability, aiming to contribute to a world where the
              benefits of mining are shared responsibly and inclusively.
            </p>
          </Card>
        </div>
        <div>
          <Card className="p-6 space-y-4 my-5">
            <h2 className="text-xl font-semibold">Technological Vanguard</h2>
            <p>
              In our pursuit of excellence, we are committed to redefining
              industry standards through continuous technological advancements.
              Our vision is to be the technological vanguard, staying ahead of
              the curve and pushing the boundaries of what is possible in mining
              technology. This commitment ensures that our solutions are always
              at the cutting edge, meeting the evolving needs of the industry.
            </p>
          </Card>
          <Card className="p-6 space-y-4 my-5">
            <h2 className="text-xl font-semibold">
              Global Prosperity Community
            </h2>
            <p>
              Beyond individual success, our vision extends to cultivating a
              community where progress, ethics, and prosperity thrive in
              harmony. We aspire to create an environment where the benefits of
              mining contribute to the well-being of communities globally.
              Through responsible practices and a commitment to shared
              prosperity, we aim to be a positive force for global advancement.
            </p>
          </Card>
        </div>
      </Card>
    </div>
  );
}
