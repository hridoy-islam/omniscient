"use client";

export default function Mining() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-4">About MINING farm</p>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Mining Giants Unleashed with the Biggest Mining Farm
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Unleash the power of progress with the world's largest mining farm.
            Elevate your mining experience with unparalleled scale and
            efficiency. Welcome to the future of mining – welcome to Mining
            Giants.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="p-8">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  Algopips
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                  0.581285 BTC | Cross ⓘ
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  0.351101 BTC | Live ⓘ
                </div>
                <button className="border border-red-300 text-red-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-50 transition-colors">
                  🔓 Log Out
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-sm text-gray-600 mb-2">Rigs Mining</p>
                <p className="text-3xl font-bold text-green-600 mb-1">13</p>
                <p className="text-sm text-gray-500">Running Rigs</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-sm text-gray-600 mb-2">Next Payout</p>
                <p className="text-3xl font-bold text-blue-600 mb-1">01h 7m</p>
                <p className="text-sm text-gray-500">Remaining</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-sm text-gray-600 mb-2">
                  Current Profitability
                </p>
                <p className="text-3xl font-bold text-purple-600 mb-1">
                  0.00005637
                </p>
                <p className="text-sm text-gray-500">$1.567</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-sm text-gray-600 mb-2">
                  Unpaid Mining Balance
                </p>
                <p className="text-3xl font-bold text-orange-600 mb-1">
                  0.00000657
                </p>
                <p className="text-sm text-gray-500">$0.061</p>
              </div>
            </div>

            {/* Mining Rig Details */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Rig 00001 • <span className="text-green-600">Mining</span>
                  </h3>
                  <p className="text-gray-600">Nvidia GeForce RTX 3090</p>
                </div>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors">
                  ⏸️ Pause Mining
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-teal-600 text-xl">⚡</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Efficiency</p>
                  <p className="text-xl font-bold text-gray-900">
                    1.944 <span className="text-sm text-gray-500">MH/J</span>
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 text-xl">🌡️</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Temperature</p>
                  <p className="text-xl font-bold text-gray-900">19° C</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-teal-500 h-2 rounded-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 text-xl">🔥</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Fan</p>
                  <p className="text-xl font-bold text-gray-900">90%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-teal-500 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 text-xl">⚙️</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Load</p>
                  <p className="text-xl font-bold text-gray-900">92%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-teal-500 h-2 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Actual RIG Proficiency
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      0.00016473 BTC/24h
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">Power</p>
                    <p className="text-lg font-semibold text-gray-900">190 W</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Rig */}
            <div className="mt-6 bg-gray-50 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Rig 00002 • <span className="text-green-600">Mining</span>
                  </h3>
                  <p className="text-gray-600">Nvidia GeForce RTX 3090</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                  ▶️ Start Mining
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
