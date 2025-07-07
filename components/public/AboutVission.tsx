import { Card, CardContent } from "@/components/ui/card";

export default function AboutVision() {
  const visionCards = [
    {
      title: "Pioneering a New Era of Digital Wealth",
      description:
        "At Algopips, our vision is to be the leading force in the cryptocurrency mining industry, shaping a future where anyone, anywhere, can tap into the digital wealth of tomorrow. We aspire to create a world where the complexities of mining become streamlined, enabling seamless integration of blockchain technologies into everyday lives.",
    },
    {
      title: "Driving Technological Breakthroughs",
      description:
        "We are dedicated to driving technological breakthroughs that not only enhance mining capabilities but also set new standards for environmental responsibility. Our vision encompasses the development of a mining ecosystem that is as sustainable as it is powerful, utilizing renewable energy sources and innovative cooling technologies to reduce the ecological footprint of mining operations.",
    },
    {
      title: "Building a Global Mining Network",
      description:
        "Our goal is to build a global network that connects miners from all corners of the world, fostering collaboration and sharing of resources. We envision a community-driven mining infrastructure that supports and uplifts various economies, contributing to the growth and adoption of cryptocurrencies on a worldwide scale.",
    },
    {
      title: "Empowering Through Education",
      description:
        "We aim to empower our clients through education, providing a comprehensive understanding of the mining process, the technology behind it, and the potential of cryptocurrency. By enlightening our users, we hope to instill confidence and inspire a new generation of miners and investors to participate in the financial revolution.",
    },
    {
      title: "Crafting a Legacy of Innovation",
      description:
        "Our vision extends beyond the present, reaching into a future where our contributions have laid the groundwork for an era of decentralized finance. We envision Algopips not just as a business, but as a legacy of innovation, inclusivity, and prosperity in the ever-evolving narrative of cryptocurrency.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-200 font-semibold mb-4">Our Vision</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Shaping the Future of Cryptocurrency Mining
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {visionCards.slice(0, 2).map((vision, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 card-hover"
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{vision.title}</h3>
                <p className="text-blue-100 leading-relaxed">
                  {vision.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-8">
          {visionCards.slice(2).map((vision, index) => (
            <Card
              key={index + 2}
              className="bg-white/10 backdrop-blur-md border-white/20 card-hover"
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{vision.title}</h3>
                <p className="text-blue-100 leading-relaxed">
                  {vision.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
