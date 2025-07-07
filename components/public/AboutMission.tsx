import { Card, CardContent } from "@/components/ui/card";

export default function AboutMission() {
  const missions = [
    {
      title: "Catalyzing the Crypto Mining Movement",
      description:
        "At Algopips, our mission is to empower every individual and organization with the tools and technology required to navigate the complex world of cryptocurrency mining. We are committed to democratizing the mining process, making it accessible, profitable, and sustainable for all.",
    },
    {
      title: "Innovation at the Core",
      description:
        "We believe that the backbone of successful mining is innovative technology. Our continuous pursuit of advancements in mining hardware and software ensures that our customers are equipped with cutting-edge solutions. By pushing the boundaries of what's possible, we aim to elevate the standard of mining operations worldwide.",
    },
    {
      title: "Sustainability in Every Step",
      description:
        "Understanding the environmental impact of mining, we are dedicated to promoting and practicing eco-friendly mining. Our mission extends beyond profits, encompassing the well-being of our planet. Through energy-efficient technology and green initiatives, we strive to minimize our carbon footprint while maximizing mining efficiency.",
    },
    {
      title: "Educating and Building Community",
      description:
        "Knowledge is power, and we aim to empower our community by sharing our expertise in crypto mining. Through educational resources and dedicated support, we help our clients make informed decisions, fostering a community that grows stronger together.",
    },
    {
      title: "Your Success is Our Success",
      description:
        "Your mining success is the measure of our achievement. Our mission is to provide a transparent, fair, and rewarding mining experience, ensuring that our clients' investments turn into profitable returns. At Algopips, we're not just building a mining farm; we're cultivating a foundation for financial freedom and innovation in the cryptocurrency space.",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-4">Mining</p>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our Mission: Empowering Your
            <span className="block text-gradient">Crypto Mining Endeavors</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {missions.map((mission, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white card-hover border-0 shadow-xl"
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{mission.title}</h3>
                <p className="text-blue-100 leading-relaxed">
                  {mission.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
