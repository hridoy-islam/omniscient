import { Card } from "@nextui-org/react";

export default function AboutVission() {
  return (
    <div className="container mx-auto py-16">
      <Card className="bg-primary text-white p-10">
        <div className="space-y-3">
          <h2>Our Vision</h2>
          <h3 className="md:text-4xl sm:text-2xl font-semibold">
            Shaping the Future of Cryptocurrency Mining
          </h3>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 mt-5">
          <Card className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">
              Pioneering a New Era of Digital Wealth
            </h2>
            <p>
              At RoboFX, our vision is to be the leading force in the
              cryptocurrency mining industry, shaping a future where anyone,
              anywhere, can tap into the digital wealth of tomorrow. We aspire
              to create a world where the complexities of mining become
              streamlined, enabling seamless integration of blockchain
              technologies into everyday lives.
            </p>
          </Card>
          <Card className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">
              Driving Technological Breakthroughs
            </h2>
            <p>
              We are dedicated to driving technological breakthroughs that not
              only enhance mining capabilities but also set new standards for
              environmental responsibility. Our vision encompasses the
              development of a mining ecosystem that is as sustainable as it is
              powerful, utilizing renewable energy sources and innovative
              cooling technologies to reduce the ecological footprint of mining
              operations.
            </p>
          </Card>
        </div>
        <div>
          <Card className="p-6 space-y-4 my-5">
            <h2 className="text-xl font-semibold">
              Building a Global Mining Network
            </h2>
            <p>
              Our goal is to build a global network that connects miners from
              all corners of the world, fostering collaboration and sharing of
              resources. We envision a community-driven mining infrastructure
              that supports and uplifts various economies, contributing to the
              growth and adoption of cryptocurrencies on a worldwide scale.
            </p>
          </Card>
          <Card className="p-6 space-y-4 my-5">
            <h2 className="text-xl font-semibold">
              Empowering Through Education
            </h2>
            <p>
              We aim to empower our clients through education, providing a
              comprehensive understanding of the mining process, the technology
              behind it, and the potential of cryptocurrency. By enlightening
              our users, we hope to instill confidence and inspire a new
              generation of miners and investors to participate in the financial
              revolution.
            </p>
          </Card>
          <Card className="p-6 space-y-4 my-5">
            <h2 className="text-xl font-semibold">
              Crafting a Legacy of Innovation
            </h2>
            <p>
              Our vision extends beyond the present, reaching into a future
              where our contributions have laid the groundwork for an era of
              decentralized finance. We envision RoboFX not just as a business,
              but as a legacy of innovation, inclusivity, and prosperity in the
              ever-evolving narrative of cryptocurrency.
            </p>
          </Card>
        </div>
      </Card>
    </div>
  );
}
