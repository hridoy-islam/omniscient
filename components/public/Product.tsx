import { Card } from "@nextui-org/react";
import exchangeservice from "../../public/exchangeservice.png";
import technical from "../../public/technicalsupport.png";
import mining from "../../public/mininghardware.png";
import automation from "../../public/automation.png";
import electricity from "../../public/electricity.png";
import secure from "../../public/securedata.png";
import Image from "next/image";

export default function Product() {
  return (
    <div className="container mx-auto py-20">
      <Card className="bg-primary text-white p-10">
        <div className="text-center space-y-4 px-10">
          <h3>MEET THE PRODUCT</h3>
          <h2 className="font-bold text-3xl">
            Beautiful, functional and Nearly Ready to Launch
          </h2>
          <p>
            A perfect blend of aesthetics and practicality. Stay tuned for an
            experience that transcends expectations. Beauty meets purpose,
            launching soon! 🌟
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-5">
          <Card className="p-8 text-center space-y-3">
            <Image
              src={exchangeservice}
              alt="Exchange Services"
              className="mx-auto"
            />
            <h2 className="font-bold text-lg">Exchange Services</h2>
            <p>
              A exchange literally is a digital marketplace where you can for
              all intents and purposes convert currency, our platform really
              supports convert to currencies into any wallet!
            </p>
          </Card>
          <Card className="p-8 text-center space-y-3">
            <Image
              src={technical}
              alt="Exchange Services"
              className="mx-auto"
            />
            <h2 className="font-bold text-lg">Technical Support</h2>
            <p>
              Customer service and support is our number one priority! The
              dedicated support staff will support your mining configuration
              requirements from start to finish.
            </p>
          </Card>
          <Card className="p-8 text-center space-y-3">
            <Image src={mining} alt="Exchange Services" className="mx-auto" />
            <h2 className="font-bold text-lg">Mining Hardware & Software</h2>
            <p>
              We use The kind of the absolute Latest software and hardware You
              get the most generally advanced technologies from mining
              factories!
            </p>
          </Card>
          <Card className="p-8 text-center space-y-3">
            <Image
              src={automation}
              alt="Exchange Services"
              className="mx-auto"
            />
            <h2 className="font-bold text-lg">Automation Mining</h2>
            <p>
              The digital trend is introducing a new concept called 'automated
              mining’ to streamline the mining process without human
              intervention. Our platform can effectively maximize the mining
              profit.
            </p>
          </Card>
          <Card className="p-8 text-center space-y-3">
            <Image
              src={electricity}
              alt="Exchange Services"
              className="mx-auto"
            />
            <h2 className="font-bold text-lg">Electricity & Internet</h2>
            <p>
              We specifically got the sort of the lowest price on electricity
              and pretty much kind of Less internet consumption costs by Solar
              Power with multi backup facilities for both power supply and
              internet.
            </p>
          </Card>
          <Card className="p-8 text-center space-y-3">
            <Image src={secure} alt="Exchange Services" className="mx-auto" />
            <h2 className="font-bold text-lg">Secure Data Center</h2>
            <p>
              The particular kind of overwhelming majority of funds actually is
              stored in mining, very kind of really cold wallets! Our platform
              is enhanced with a sort of high-level protection.
            </p>
          </Card>
        </div>
      </Card>
    </div>
  );
}
