import React, { useState, useEffect } from 'react';

export default function InteractivePressureDemo() {
  const [pressure, setPressure] = useState(8); // 5-13 bar range
  const [flowRate, setFlowRate] = useState(60); // 30-120 percentage
  const [efficiency, setEfficiency] = useState(85);
  const [energyCost, setEnergyCost] = useState(2500);
  const [airOutput, setAirOutput] = useState(450);

  // Calculate real-time values based on pressure and flow settings
  useEffect(() => {
    // Efficiency calculation (sweet spot around 8-10 bar)
    const optimalPressure = 9;
    const pressureDiff = Math.abs(pressure - optimalPressure);
    const baseEfficiency = 95 - (pressureDiff * 3);
    
    // Flow rate affects efficiency (optimal around 70-80%)
    const flowEfficiencyFactor = flowRate > 80 ? (100 - flowRate) * 0.5 : 1;
    const calculatedEfficiency = Math.max(60, Math.min(98, baseEfficiency * (flowRate / 100) * flowEfficiencyFactor));
    
    // Energy cost (higher pressure = more energy, but more efficient in sweet spot)
    const baseCost = 3000;
    const pressureCostFactor = Math.pow(pressure / 8, 1.2);
    const efficiencyFactor = calculatedEfficiency / 100;
    const calculatedEnergyCost = baseCost * pressureCostFactor * (flowRate / 100) / efficiencyFactor;
    
    // Air output (higher pressure and flow = more output, but efficiency matters)
    const baseOutput = 400;
    const outputCalculation = baseOutput * (pressure / 8) * (flowRate / 100) * (calculatedEfficiency / 100);
    
    setEfficiency(Math.round(calculatedEfficiency * 10) / 10);
    setEnergyCost(Math.round(calculatedEnergyCost));
    setAirOutput(Math.round(outputCalculation));
  }, [pressure, flowRate]);

  const getEfficiencyColor = (eff) => {
    if (eff >= 90) return 'text-green-600';
    if (eff >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getEfficiencyBgColor = (eff) => {
    if (eff >= 90) return 'bg-green-500';
    if (eff >= 80) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Interactive Compressor Demo
        </h3>
        <p className="text-gray-600">
          Adjust pressure and flow settings to see real-time efficiency and cost impacts
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          {/* Pressure Control */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <label className="text-lg font-semibold text-gray-900">
                Operating Pressure
              </label>
              <div className="bg-blue-100 px-3 py-1 rounded-lg">
                <span className="text-blue-800 font-bold">{pressure} bar</span>
              </div>
            </div>
            <input
              type="range"
              min="5"
              max="13"
              step="0.5"
              value={pressure}
              onChange={(e) => setPressure(parseFloat(e.target.value))}
              className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer slider-thumb"
              style={{
                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((pressure - 5) / (13 - 5)) * 100}%, #e5e7eb ${((pressure - 5) / (13 - 5)) * 100}%, #e5e7eb 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>5 bar (Low)</span>
              <span className="text-green-600 font-medium">8-10 bar (Optimal)</span>
              <span>13 bar (High)</span>
            </div>
          </div>

          {/* Flow Rate Control */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <label className="text-lg font-semibold text-gray-900">
                Flow Rate Demand
              </label>
              <div className="bg-purple-100 px-3 py-1 rounded-lg">
                <span className="text-purple-800 font-bold">{flowRate}%</span>
              </div>
            </div>
            <input
              type="range"
              min="30"
              max="120"
              step="5"
              value={flowRate}
              onChange={(e) => setFlowRate(parseInt(e.target.value))}
              className="w-full h-3 bg-purple-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${((flowRate - 30) / (120 - 30)) * 100}%, #e5e7eb ${((flowRate - 30) / (120 - 30)) * 100}%, #e5e7eb 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>30% (Light Load)</span>
              <span className="text-green-600 font-medium">70-80% (Efficient)</span>
              <span>120% (Peak Load)</span>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Quick Presets</h4>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => { setPressure(7); setFlowRate(60); }}
                className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-3 rounded-lg transition-colors text-sm font-medium"
              >
                🏭 Light Industry
              </button>
              <button 
                onClick={() => { setPressure(9); setFlowRate(75); }}
                className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-3 rounded-lg transition-colors text-sm font-medium"
              >
                ⚙️ Optimal Setup
              </button>
              <button 
                onClick={() => { setPressure(11); setFlowRate(90); }}
                className="bg-orange-100 hover:bg-orange-200 text-orange-800 px-4 py-3 rounded-lg transition-colors text-sm font-medium"
              >
                🚗 Automotive
              </button>
              <button 
                onClick={() => { setPressure(12); setFlowRate(110); }}
                className="bg-red-100 hover:bg-red-200 text-red-800 px-4 py-3 rounded-lg transition-colors text-sm font-medium"
              >
                🏗️ Heavy Industry
              </button>
            </div>
          </div>
        </div>

        {/* Live Results */}
        <div className="space-y-6">
          {/* Efficiency Gauge */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              System Efficiency
            </h4>
            <div className="relative w-32 h-32 mx-auto mb-4">
              {/* Gauge Background */}
              <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
              {/* Efficiency Arc */}
              <div 
                className={`absolute inset-0 rounded-full border-8 border-t-transparent border-l-transparent ${getEfficiencyBgColor(efficiency)}`}
                style={{
                  transform: `rotate(${(efficiency - 50) * 3.6}deg)`,
                  transition: 'transform 0.5s ease-out'
                }}
              ></div>
              {/* Center Display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${getEfficiencyColor(efficiency)}`}>
                    {efficiency}%
                  </div>
                  <div className="text-xs text-gray-600">Efficiency</div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {airOutput}
                </div>
                <div className="text-sm text-blue-800">L/min Air Output</div>
                <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (airOutput / 600) * 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  ₹{energyCost.toLocaleString()}
                </div>
                <div className="text-sm text-green-800">Monthly Energy Cost</div>
                <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, ((5000 - energyCost) / 5000) * 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Savings Indicator */}
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-6 text-white">
            <div className="text-center">
              <div className="text-lg font-semibold mb-2">Potential Annual Savings</div>
              <div className="text-3xl font-bold mb-2">
                ₹{Math.max(0, Math.round((3500 - energyCost) * 12)).toLocaleString()}
              </div>
              <div className="text-green-100 text-sm">
                vs. inefficient setup at {Math.round(efficiency)}% efficiency
              </div>
            </div>
          </div>

          {/* Performance Tips */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <h5 className="font-semibold text-yellow-800 mb-2">💡 Performance Tip</h5>
            <p className="text-yellow-700 text-sm">
              {efficiency >= 90 
                ? "Excellent! You're in the optimal efficiency zone."
                : efficiency >= 80 
                ? "Good setup! Fine-tune pressure for peak efficiency."
                : "Consider adjusting settings for better efficiency and savings."}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #fff;
          cursor: pointer;
          border: 3px solid #3b82f6;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        
        input[type="range"]::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #fff;
          cursor: pointer;
          border: 3px solid #3b82f6;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}