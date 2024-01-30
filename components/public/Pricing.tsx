import { Button, Card, Chip } from "@nextui-org/react";

export default function Pricing() {
  return (
    <div className="py-14 container mx-auto">
      <div className="text-center px-10 space-y-4 py-10">
        <h3>PRICING PLANS</h3>
        <h2 className="text-primary text-4xl font-semibold">
          Transparent Pricing, Tailored Solutions
        </h2>
        <p className="px-20">
          Tailored solutions, unbeatable value – because your journey to
          excellence starts with a clear path and a partner you can trust.
          Welcome to a new era of mining, where pricing meets perfection.
        </p>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
        <Card className="border border-primary p-6 space-y-4 justify-between">
          <Chip className="bg-primaryLight rounded-md align-center p-4 mb-3 mx-auto">
            Hash Hero Starter Kit
          </Chip>
          <p>
            Embark on your crypto journey with a plan that turns beginners into
            heroes of hashing!
          </p>
          <div className="space-y-2">
            <h3 className="font-bold">Motherboard</h3>
            <p>TUF GAMING Z590-PLUS</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Processor</h3>
            <p>Intel Core i5-11400F</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Ram</h3>
            <p>Corsair Vengeance DDR4 3200MHZ (2x8GB)</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">SMPS</h3>
            <p>CORSAIR RMX RM1000X 1000W ATX12V</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Graphics Card</h3>
            <p>NVIDIA GeForce RTX 3060 Ti - "Hero Edition" </p>
          </div>
          <Button className="btn-basic rounded-md">Get Started</Button>
        </Card>
        <Card className="border border-primary p-6 space-y-4 justify-between">
          <Chip className="bg-primaryLight rounded-md align-center p-4 mb-3 mx-auto">
            Gold Rush Pro-Pack
          </Chip>
          <p>
            Designed for the gold-seekers in the digital age, this plan is for
            serious miners ready to stake their claim.
          </p>
          <div className="space-y-2">
            <h3 className="font-bold">Motherboard</h3>
            <p>TUF GAMING Z590-PLUS</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Processor</h3>
            <p>Intel Core i5-11400F</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Ram</h3>
            <p>Corsair Vengeance DDR4 3200MHZ (2x8GB)</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">SMPS</h3>
            <p>CORSAIR RMX RM1000X 1000W ATX12V</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Graphics Card</h3>
            <p>NVIDIA GeForce RTX 3070 Ti - "Prospector's Choice"</p>
          </div>
          <Button className="btn-basic rounded-md">Get Started</Button>
        </Card>
        <Card className="border border-primary p-6 space-y-4 justify-between">
          <Chip className="bg-primaryLight rounded-md align-center p-4 mb-3 mx-auto">
            Crypto Tycoon Elite
          </Chip>
          <p>
            For those who dream big and mine bigger, this plan is the gateway to
            becoming a crypto empire builder.
          </p>
          <div className="space-y-2">
            <h3 className="font-bold">Motherboard</h3>
            <p>TUF GAMING Z590-PLUS</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Processor</h3>
            <p>Intel Core i5-11400F</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Ram</h3>
            <p>Corsair Vengeance DDR4 3200MHZ (2x8GB)</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">SMPS</h3>
            <p>CORSAIR RMX RM1000X 1000W ATX12V</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Graphics Card</h3>
            <p>NVIDIA GeForce RTX 3080 Ti - "Elite Powerhouse"</p>
          </div>
          <Button className="btn-basic rounded-md">Get Started</Button>
        </Card>
        <Card className="border border-primary p-6 space-y-4 justify-between">
          <Chip className="bg-primaryLight rounded-md align-center p-4 mb-3 mx-auto">
            Blockchain Baron Bundle
          </Chip>
          <p>
            Rule the world of blockchain with this comprehensive package,
            tailor-made for the industry's barons and magnates
          </p>
          <div className="space-y-2">
            <h3 className="font-bold">Motherboard</h3>
            <p>TUF GAMING Z590-PLUS</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Processor</h3>
            <p>Intel Core i5-11400F</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Ram</h3>
            <p>Corsair Vengeance DDR4 3200MHZ (2x8GB)</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">SMPS</h3>
            <p>CORSAIR RMX RM1000X 1000W ATX12V</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Graphics Card</h3>
            <p>NVIDIA GeForce RTX 3090 Ti - "Baron's Beast" </p>
          </div>
          <Button className="btn-basic rounded-md">Get Started</Button>
        </Card>
      </div>
    </div>
  );
}
