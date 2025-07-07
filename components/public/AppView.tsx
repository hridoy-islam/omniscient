import { Cpu, Zap, Activity, HardDrive } from "lucide-react";

export default function AppView() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-4">Hardware</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Maximizing Mining with TI-Miner Top GPU
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            The TI-Miner Top GPU, featuring the Nvidia RTX TI Series, is a
            beacon of mining power. Designed for both seasoned miners and
            novices, it provides an unparalleled mining experience. This section
            delves into the advantages and offerings of the TI-Miner Top GPU,
            showcasing how it can transform your mining ventures.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Advanced GPU Technology
                  </h3>
                  <p className="text-gray-600">
                    The NVIDIA RTX at the heart of the TI-Miner Top GPU delivers
                    exceptional processing power, ensuring efficient and
                    effective mining operations. Its architecture is optimized
                    for the complex calculations involved in cryptocurrency
                    mining, allowing for faster and more profitable mining
                    sessions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Enhanced Energy Efficiency
                  </h3>
                  <p className="text-gray-600">
                    Balancing power with sustainability, the TI-Miner Top GPU is
                    engineered for energy efficiency. This means lower
                    electricity costs and a smaller carbon footprint, making
                    your mining operation both eco-friendly and cost-effective.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HardDrive className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Robust Build Quality
                  </h3>
                  <p className="text-gray-600">
                    Durability is key in mining hardware, and the TI-Miner Top
                    GPU is built to last. With high-quality components and a
                    sturdy construction, it's designed to withstand the rigors
                    of continuous mining operations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Plug-and-Play Setup
                  </h3>
                  <p className="text-gray-600">
                    Ease of use is a priority. The TI-Miner Top GPU comes with a
                    user-friendly setup process, making it easy for anyone to
                    start mining quickly, regardless of their technical
                    expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/Group3467.png"
              alt="TI-Miner Top GPU Hardware"
              className="w-full h-auto rounded-2xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
