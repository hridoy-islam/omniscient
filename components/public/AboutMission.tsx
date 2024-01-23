import { Card } from "@nextui-org/react";

export default function AboutMission() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <div>
          <h2 className="text-primary">Mining</h2>
          <h3 className="text-secondary text-4xl">
            Our Mission in Mining Excellence
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-10">
          <Card className="bg-primary text-white space-y-2 p-8">
            <h2>Innovation at the Core</h2>
            <p>
              At the heart of our mission lies an unwavering commitment to
              pioneering technological advancements in the mining industry.
            </p>
          </Card>
          <Card className="bg-primary text-white space-y-2 p-8">
            <h2>Universal Access</h2>
            <p>
              We believe that everyone should have the opportunity to engage in
              and benefit from the mining experience. We work towards making
              mining a universally accessible.
            </p>
          </Card>
          <Card className="bg-primary text-white space-y-2 p-8">
            <h2>Industry Evolution</h2>
            <p>
              Our mission involves staying ahead of industry needs, adapting to
              changes, and driving evolution. We contribute to the progressive
              growth of the entire mining ecosystem.
            </p>
          </Card>
          <Card className="bg-primary text-white space-y-2 p-8">
            <h2>Elevating Mining</h2>
            <p>
              Through ethical practices and a commitment to prosperity, we aim
              to make each mining endeavor a transformative and positive force.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
