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
      <div className="grid grid-cols-4 gap-4">
        <Card className="border border-primary p-6 space-y-4">
          <Chip className="bg-primaryLight rounded-md align-center p-4 mb-3 mx-auto">
            Basic Mining
          </Chip>
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
            <p>NVIDIA GeForce RTX 2060</p>
          </div>
          <Button className="btn-basic rounded-md">Get Started</Button>
        </Card>
        <Card className="border border-primary p-6 space-y-4">
          <Chip className="bg-primaryLight rounded-md align-center p-4 mb-3 mx-auto">
            Basic Mining
          </Chip>
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
            <p>NVIDIA GeForce RTX 2060</p>
          </div>
          <Button className="btn-basic rounded-md">Get Started</Button>
        </Card>
        <Card className="border border-primary p-6 space-y-4">
          <Chip className="bg-primaryLight rounded-md align-center p-4 mb-3 mx-auto">
            Basic Mining
          </Chip>
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
            <p>NVIDIA GeForce RTX 2060</p>
          </div>
          <Button className="btn-basic rounded-md">Get Started</Button>
        </Card>
        <Card className="border border-primary p-6 space-y-4">
          <Chip className="bg-primaryLight rounded-md align-center p-4 mb-3 mx-auto">
            Basic Mining
          </Chip>
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
            <p>NVIDIA GeForce RTX 2060</p>
          </div>
          <Button className="btn-basic rounded-md">Get Started</Button>
        </Card>
      </div>
    </div>
  );
}
