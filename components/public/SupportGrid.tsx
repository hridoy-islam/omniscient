import { Card } from "@nextui-org/react";

export default function SupportGrid() {
  return (
    <div className="bg-white py-10">
      <Card className="bg-primary container mx-auto p-10 grid grid-cols-3 gap-4 text-center">
        <Card className="px-5 py-10 space-y-4">
          <h2 className="font-semibold text-xl">Connection Issues?</h2>
          <p>
            Ensure a stable internet connection and verify network settings for
            uninterrupted mining.
          </p>
        </Card>
        <Card className="px-5 py-10 space-y-4">
          <h2 className="font-semibold text-xl">Low Hashrate?</h2>
          <p>
            Adjust mining configurations to optimize hashrates, considering
            hardware capabilities and current market conditions.
          </p>
        </Card>
        <Card className="px-5 py-10 space-y-4">
          <h2 className="font-semibold text-xl">Software Compatibility?</h2>
          <p>
            Stay up-to-date with the latest mining software versions to ensure
            compatibility with evolving blockchain protocols.
          </p>
        </Card>
        <Card className="px-5 py-10 space-y-4">
          <h2 className="font-semibold text-xl">Temperature Concerns?</h2>
          <p>
            Implement effective cooling solutions to manage hardware
            temperatures, preventing overheating and potential performance
            issues.
          </p>
        </Card>
        <Card className="px-5 py-10 space-y-4">
          <h2 className="font-semibold text-xl">Payment Delays?</h2>
          <p>
            Ensure accurate wallet details are provided to avoid payment delays.
            Double-check and update wallet addresses as needed.
          </p>
        </Card>
        <Card className="px-5 py-10 space-y-4">
          <h2 className="font-semibold text-xl">Security Concerns?</h2>
          <p>
            Enhance account security by enabling 2FA, adding an extra layer of
            protection against unauthorized access.
          </p>
        </Card>
        <Card className="px-5 py-10 space-y-4">
          <h2 className="font-semibold text-xl">Hardware Malfunctions?</h2>
          <p>
            Conduct routine hardware checks and maintenance to identify and
            address potential malfunctions before they impact mining operations.
          </p>
        </Card>
        <Card className="px-5 py-10 space-y-4">
          <h2 className="font-semibold text-xl">Unexpected Downtime?</h2>
          <p>
            Employ automated monitoring tools to detect potential issues early,
            reducing downtime and ensuring continuous mining operations.
          </p>
        </Card>
      </Card>
    </div>
  );
}
