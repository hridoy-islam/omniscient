import { User, Settings, Headphones, Play } from "lucide-react";

export default function Product() {
  const steps = [
    {
      icon: User,
      title: "Create Your Account",
      description:
        "Initiate your journey by registering an account with us. This first step is your gateway to the mining world.",
    },
    {
      icon: Settings,
      title: "Select Your Ideal Mining Configuration",
      description:
        "Customize your mining experience by selecting the setup that aligns perfectly with your personal or professional mining goals. Whether it's a home-based rig, a dedicated office setup, or a sophisticated virtual operation, choose the option that best fits your mining strategy and environment. Your choice here lays the foundation for your mining efficiency and success.",
    },
    {
      icon: Headphones,
      title: "Enjoy 24 Months of Continuous Technical Support",
      description:
        "Benefit from our dedicated 24/7 technical support. We ensure your mining experience is smooth and uninterrupted.",
    },
    {
      icon: Play,
      title: "Start Receiving Cryptocurrency",
      description:
        "Witness the fruits of your mining venture as you begin to receive cryptocurrency, marking the start of your successful mining journey.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/Group3465.png"
              alt="Mining Journey Steps"
              className="w-full h-auto rounded-2xl "
            />
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-blue-600 font-semibold mb-4">Hardware</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Begin Your Mining Journey in Three Easy Steps
              </h2>
              <p className="text-xl text-gray-600">
                Embark on a path to exceptional mining success with just three
                straightforward steps. Dive into the world of seamless mining
                today, where simplicity harmoniously blends with efficiency.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
