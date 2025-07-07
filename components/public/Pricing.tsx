// import { Button, Card, Chip } from "@nextui-org/react";

// export default function Pricing() {
//   return (
//     <div className="py-14 container mx-auto">
//       <div className="text-center px-10 space-y-4 py-10">
//         <h3>PRICING PLANS</h3>
//         <h2 className="text-primary text-4xl font-semibold">
//           Transparent Pricing, Tailored Solutions
//         </h2>
//         <p className="px-20">
//           Tailored solutions, unbeatable value – because your journey to
//           excellence starts with a clear path and a partner you can trust.
//           Welcome to a new era of mining, where pricing meets perfection.
//         </p>
//       </div>
//       <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
//         <Card className="border border-primary p-6 space-y-4 justify-between">
//           <Chip className="bg-primaryLight rounded-md align-center p-4 mb-3 mx-auto">
//             Hash Hero Starter Kit
//           </Chip>
//           <p>
//             Embark on your crypto journey with a plan that turns beginners into
//             heroes of hashing!
//           </p>
//           <div className="space-y-2">
//             <h3 className="font-bold">Motherboard</h3>
//             <p>TUF GAMING Z590-PLUS</p>
//           </div>
//           <div className="space-y-2">
//             <h3 className="font-bold">Processor</h3>
//             <p>Intel Core i5-11400F</p>
//           </div>
//           <div className="space-y-2">
//             <h3 className="font-bold">Ram</h3>
//             <p>Corsair Vengeance DDR4 3200MHZ (2x8GB)</p>
//           </div>
//           <div className="space-y-2">
//             <h3 className="font-bold">SMPS</h3>
//             <p>CORSAIR RMX RM1000X 1000W ATX12V</p>
//           </div>
//           <div className="space-y-2">
//             <h3 className="font-bold">Graphics Card</h3>
//             <p>NVIDIA GeForce RTX 3060 Ti - "Hero Edition" </p>
//           </div>
//           <Button className="btn-basic rounded-md">Get Started</Button>
//         </Card>
//         <Card className="border border-primary p-6 space-y-4 justify-between">
//           <Chip className="bg-primaryLight rounded-md align-center p-4 mb-3 mx-auto">
//             Gold Rush Pro-Pack
//           </Chip>
//           <p>
//             Designed for the gold-seekers in the digital age, this plan is for
//             serious miners ready to stake their claim.
//           </p>
//           <div className="space-y-2">
//             <h3 className="font-bold">Motherboard</h3>
//             <p>TUF GAMING Z590-PLUS</p>
//           </div>
//           <div className="space-y-2">
//             <h3 className="font-bold">Processor</h3>
//             <p>Intel Core i5-11400F</p>
//           </div>
//           <div className="space-y-2">
//             <h3 className="font-bold">Ram</h3>
//             <p>Corsair Vengeance DDR4 3200MHZ (2x8GB)</p>
//           </div>
//           <div className="space-y-2">
//             <h3 className="font-bold">SMPS</h3>
//             <p>CORSAIR RMX RM1000X 1000W ATX12V</p>
//           </div>
//           <div className="space-y-2">
//             <h3 className="font-bold">Graphics Card</h3>
//             <p>NVIDIA GeForce RTX 3070 Ti - "Prospector's Choice"</p>
//           </div>
//           <Button className="btn-basic rounded-md">Get Started</Button>
//         </Card>
//         <Card className="border border-primary p-6 space-y-4 justify-between">
//           <Chip className="bg-primaryLight rounded-md align-center p-4 mb-3 mx-auto">
//             Crypto Tycoon Elite
//           </Chip>
//           <p>
//             For those who dream big and mine bigger, this plan is the gateway to
//             becoming a crypto empire builder.
//           </p>
//           <div className="space-y-2">
//             <h3 className="font-bold">Motherboard</h3>
//             <p>TUF GAMING Z590-PLUS</p>
//           </div>
//           <div className="space-y-2">
//             <h3 className="font-bold">Processor</h3>
//             <p>Intel Core i5-11400F</p>
//           </div>
//           <div className="space-y-2">
//             <h3 className="font-bold">Ram</h3>
//             <p>Corsair Vengeance DDR4 3200MHZ (2x8GB)</p>
//           </div>
//           <div className="space-y-2">
//             <h3 className="font-bold">SMPS</h3>
//             <p>CORSAIR RMX RM1000X 1000W ATX12V</p>
//           </div>
//           <div className="space-y-2">
//             <h3 className="font-bold">Graphics Card</h3>
//             <p>NVIDIA GeForce RTX 3080 Ti - "Elite Powerhouse"</p>
//           </div>
//           <Button className="btn-basic rounded-md">Get Started</Button>
//         </Card>
//         <Card className="border border-primary p-6 space-y-4 justify-between">
//           <Chip className="bg-primaryLight rounded-md align-center p-4 mb-3 mx-auto">
//             Blockchain Baron Bundle
//           </Chip>
//           <p>
//             Rule the world of blockchain with this comprehensive package,
//             tailor-made for the industry's barons and magnates
//           </p>
//           <div className="space-y-2">
//             <h3 className="font-bold">Motherboard</h3>
//             <p>TUF GAMING Z590-PLUS</p>
//           </div>
//           <div className="space-y-2">
//             <h3 className="font-bold">Processor</h3>
//             <p>Intel Core i5-11400F</p>
//           </div>
//           <div className="space-y-2">
//             <h3 className="font-bold">Ram</h3>
//             <p>Corsair Vengeance DDR4 3200MHZ (2x8GB)</p>
//           </div>
//           <div className="space-y-2">
//             <h3 className="font-bold">SMPS</h3>
//             <p>CORSAIR RMX RM1000X 1000W ATX12V</p>
//           </div>
//           <div className="space-y-2">
//             <h3 className="font-bold">Graphics Card</h3>
//             <p>NVIDIA GeForce RTX 3090 Ti - "Baron's Beast" </p>
//           </div>
//           <Button className="btn-basic rounded-md">Get Started</Button>
//         </Card>
//       </div>
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pricing() {
  const plans = [
    {
      name: "Hash Hero Starter Kit",
      description:
        "Embark on your crypto journey with a plan that turns beginners into heroes of hashing.",
      specs: {
        motherboard: "TUF GAMING Z590-PLUS",
        processor: "Intel Core i5-11400F",
        ram: "Corsair Vengeance DDR4 3200MHZ (2x8GB)",
        smps: "CORSAIR RMX RM1000X 1000W ATX12V",
        graphics: 'NVIDIA GeForce RTX 3060 Ti - "Hero Edition"',
      },
    },
    {
      name: "Gold Rush Pro-Pack",
      description:
        "Designed for the gold-seekers in the digital age, this plan is for serious miners ready to stake their claim.",
      specs: {
        motherboard: "TUF GAMING Z590-PLUS",
        processor: "Intel Core i5-11400F",
        ram: "Corsair Vengeance DDR4 3200MHZ (2x8GB)",
        smps: "CORSAIR RMX RM1000X 1000W ATX12V",
        graphics: 'NVIDIA GeForce RTX 3070 Ti - "Prospector\'s Choice"',
      },
    },
    {
      name: "Crypto Tycoon Elite",
      description:
        "For those who dream big and mine bigger, this plan is the gateway to becoming a crypto empire builder.",
      specs: {
        motherboard: "TUF GAMING Z590-PLUS",
        processor: "Intel Core i5-11400F",
        ram: "Corsair Vengeance DDR4 3200MHZ (2x8GB)",
        smps: "CORSAIR RMX RM1000X 1000W ATX12V",
        graphics: 'NVIDIA GeForce RTX 3080 Ti - "Elite Powerhouse"',
      },
    },
    {
      name: "Blockchain Baron Bundle",
      description:
        "Rule the world of blockchain with this comprehensive package, tailor-made for the industry's barons and magnates",
      specs: {
        motherboard: "TUF GAMING Z590-PLUS",
        processor: "Intel Core i5-11400F",
        ram: "Corsair Vengeance DDR4 3200MHZ (2x8GB)",
        smps: "CORSAIR RMX RM1000X 1000W ATX12V",
        graphics: 'NVIDIA GeForce RTX 3090 Ti - "Baron\'s Beast"',
      },
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-4">PRICING PLANS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transparent Pricing, Tailored Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Tailored solutions, unbeatable value – because your journey to
            excellence starts with a clear path and a partner you can trust.
            Welcome to a new era of mining, where pricing meets perfection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="card-hover border-2 hover:border-blue-200 transition-all duration-300"
            >
              <CardHeader className="text-center pb-4">
                <div className="bg-gray-100 rounded-lg px-4 py-2 mb-4">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {plan.name}
                  </CardTitle>
                </div>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900">Motherboard</p>
                    <p className="text-sm text-gray-600">
                      {plan.specs.motherboard}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Processor</p>
                    <p className="text-sm text-gray-600">
                      {plan.specs.processor}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ram</p>
                    <p className="text-sm text-gray-600">{plan.specs.ram}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">SMPS</p>
                    <p className="text-sm text-gray-600">{plan.specs.smps}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Graphics Card</p>
                    <p className="text-sm text-gray-600">
                      {plan.specs.graphics}
                    </p>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
