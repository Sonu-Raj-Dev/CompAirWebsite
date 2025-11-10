import React, { useState, useEffect } from 'react';

export default function CompressorConfigurator() {
  const [config, setConfig] = useState({
    industry: 'manufacturing',
    workingHours: 8,
    airDemand: 500,
    pressureRequirement: 8,
    motorType: 'fixed',
    powerEfficiency: 'standard'
  });

  const [results, setResults] = useState({
    recommendedModel: '',
    estimatedOutput: 0,
    dailyEnergyCost: 0,
    monthlyEnergyCost: 0,
    annualSavings: 0,
    paybackPeriod: 0,
    co2Reduction: 0
  });

  const industryProfiles = {
    manufacturing: { name: '🏭 Manufacturing', multiplier: 1.2, description: 'Heavy-duty continuous operation' },
    automotive: { name: '🚗 Automotive', multiplier: 1.4, description: 'High-pressure precision tools' },
    textiles: { name: '🧵 Textiles', multiplier: 0.9, description: 'Moderate pressure, consistent flow' },
    food: { name: '🍕 Food Processing', multiplier: 1.1, description: 'Clean air, variable demand' },
    pharma: { name: '💊 Pharmaceutical', multiplier: 1.3, description: 'Ultra-clean, precise control' },
    construction: { name: '🏗️ Construction', multiplier: 1.6, description: 'High-power intermittent use' }
  };

  const compressorModels = [
    { name: 'L45 V4', power: '45kW', capacity: '240-290 L/min', price: 850000, efficiency: 92 },
    { name: 'L55 V4', power: '55kW', capacity: '295-355 L/min', price: 1020000, efficiency: 93 },
    { name: 'L75 V4', power: '75kW', capacity: '400-480 L/min', price: 1350000, efficiency: 94 },
    { name: 'L90 V4', power: '90kW', capacity: '480-580 L/min', price: 1620000, efficiency: 95 },
    { name: 'L110 V4', power: '110kW', capacity: '590-710 L/min', price: 1980000, efficiency: 95 },
    { name: 'L132 V4', power: '132kW', capacity: '710-850 L/min', price: 2350000, efficiency: 96 }
  ];

  useEffect(() => {
    calculateResults();
  }, [config]);

  const calculateResults = () => {
    const industry = industryProfiles[config.industry];
    const adjustedDemand = config.airDemand * industry.multiplier;
    
    // Find recommended model based on air demand and pressure
    const recommendedModel = compressorModels.find(model => {
      const maxCapacity = parseInt(model.capacity.split('-')[1]);
      return maxCapacity >= adjustedDemand;
    }) || compressorModels[compressorModels.length - 1];

    // Calculate energy costs
    const powerKW = parseInt(recommendedModel.power.replace('kW', ''));
    const efficiencyFactor = config.motorType === 'variable' ? 0.8 : 1;
    const powerEfficiencyFactor = config.powerEfficiency === 'premium' ? 0.85 : 1;
    
    const actualPowerConsumption = powerKW * efficiencyFactor * powerEfficiencyFactor;
    const electricityRate = 6.5; // Rs per kWh (industrial rate in India)
    
    const dailyEnergyCost = actualPowerConsumption * config.workingHours * electricityRate;
    const monthlyEnergyCost = dailyEnergyCost * 26; // Working days
    
    // Calculate savings vs standard compressor
    const standardEfficiency = 75;
    const ourEfficiency = recommendedModel.efficiency;
    const savingsPercentage = (ourEfficiency - standardEfficiency) / standardEfficiency;
    const annualSavings = monthlyEnergyCost * 12 * savingsPercentage;
    
    // Payback period calculation
    const premiumCost = config.motorType === 'variable' ? recommendedModel.price * 0.15 : 0;
    const efficiencyCost = config.powerEfficiency === 'premium' ? recommendedModel.price * 0.1 : 0;
    const totalPremium = premiumCost + efficiencyCost;
    const paybackPeriod = totalPremium / (annualSavings + monthlyEnergyCost * 0.1);
    
    // CO2 reduction
    const co2Factor = 0.82; // kg CO2 per kWh in India
    const energySavedAnnually = actualPowerConsumption * config.workingHours * 312 * savingsPercentage;
    const co2Reduction = energySavedAnnually * co2Factor / 1000; // in tonnes

    setResults({
      recommendedModel: recommendedModel.name,
      estimatedOutput: Math.round(adjustedDemand),
      dailyEnergyCost: Math.round(dailyEnergyCost),
      monthlyEnergyCost: Math.round(monthlyEnergyCost),
      annualSavings: Math.round(annualSavings),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      co2Reduction: Math.round(co2Reduction * 10) / 10
    });
  };

  const handleConfigChange = (field, value) => {
    setConfig(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">🔧 Build Your Perfect Compressor</h3>
        <p className="text-blue-100">Configure your ideal setup and get instant cost estimates</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 p-8">
        {/* Configuration Panel */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-gray-900 border-b pb-2">Configuration</h4>
          
          {/* Industry Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">Industry Type</label>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(industryProfiles).map(([key, industry]) => (
                <button
                  key={key}
                  onClick={() => handleConfigChange('industry', key)}
                  className={`p-3 rounded-xl border-2 transition-all text-left ${
                    config.industry === key 
                      ? 'border-blue-500 bg-blue-50 text-blue-900' 
                      : 'border-gray-200 bg-gray-50 hover:border-blue-300'
                  }`}
                >
                  <div className="font-medium text-sm">{industry.name}</div>
                  <div className="text-xs text-gray-600 mt-1">{industry.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Daily Working Hours: <span className="text-blue-600">{config.workingHours}h</span>
            </label>
            <input
              type="range"
              min="4"
              max="24"
              value={config.workingHours}
              onChange={(e) => handleConfigChange('workingHours', parseInt(e.target.value))}
              className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>4h (Part-time)</span>
              <span>8h (Standard)</span>
              <span>24h (Continuous)</span>
            </div>
          </div>

          {/* Air Demand */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Air Demand: <span className="text-purple-600">{config.airDemand} L/min</span>
            </label>
            <input
              type="range"
              min="200"
              max="1000"
              step="50"
              value={config.airDemand}
              onChange={(e) => handleConfigChange('airDemand', parseInt(e.target.value))}
              className="w-full h-3 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>200 L/min (Light)</span>
              <span>600 L/min (Medium)</span>
              <span>1000+ L/min (Heavy)</span>
            </div>
          </div>

          {/* Pressure Requirement */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Pressure: <span className="text-green-600">{config.pressureRequirement} bar</span>
            </label>
            <input
              type="range"
              min="5"
              max="13"
              step="0.5"
              value={config.pressureRequirement}
              onChange={(e) => handleConfigChange('pressureRequirement', parseFloat(e.target.value))}
              className="w-full h-3 bg-green-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>5 bar</span>
              <span>9 bar (Optimal)</span>
              <span>13 bar</span>
            </div>
          </div>

          {/* Motor Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">Motor Type</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleConfigChange('motorType', 'fixed')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  config.motorType === 'fixed' 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="font-medium">⚡ Fixed Speed</div>
                <div className="text-xs text-gray-600 mt-1">Lower initial cost</div>
              </button>
              <button
                onClick={() => handleConfigChange('motorType', 'variable')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  config.motorType === 'variable' 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="font-medium">🎛️ Variable Speed</div>
                <div className="text-xs text-gray-600 mt-1">20% energy savings</div>
              </button>
            </div>
          </div>

          {/* Power Efficiency */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">Power Efficiency</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleConfigChange('powerEfficiency', 'standard')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  config.powerEfficiency === 'standard' 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <div className="font-medium">📊 Standard</div>
                <div className="text-xs text-gray-600 mt-1">Good efficiency</div>
              </button>
              <button
                onClick={() => handleConfigChange('powerEfficiency', 'premium')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  config.powerEfficiency === 'premium' 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <div className="font-medium">⭐ Premium</div>
                <div className="text-xs text-gray-600 mt-1">15% more efficient</div>
              </button>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-gray-900 border-b pb-2">Your Custom Solution</h4>
          
          {/* Recommended Model */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <h5 className="text-xl font-bold text-blue-900 mb-2">
                CompAir {results.recommendedModel}
              </h5>
              <p className="text-blue-700 text-sm mb-4">Perfect match for your requirements</p>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-gray-900">{results.estimatedOutput} L/min</div>
                <div className="text-sm text-gray-600">Estimated Output</div>
              </div>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
              <div className="text-orange-600 text-2xl font-bold">₹{results.dailyEnergyCost}</div>
              <div className="text-orange-800 text-sm font-medium">Daily Energy Cost</div>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-200">
              <div className="text-red-600 text-2xl font-bold">₹{results.monthlyEnergyCost.toLocaleString()}</div>
              <div className="text-red-800 text-sm font-medium">Monthly Cost</div>
            </div>
          </div>

          {/* Savings Highlight */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
            <div className="text-center">
              <div className="text-lg font-semibold mb-2">💰 Annual Savings</div>
              <div className="text-4xl font-bold mb-2">₹{results.annualSavings.toLocaleString()}</div>
              <div className="text-green-100 text-sm">
                vs. standard compressor technology
              </div>
            </div>
          </div>

          {/* Additional Metrics */}
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <span className="text-gray-700 font-medium">⏱️ Payback Period</span>
              <span className="text-gray-900 font-bold">{results.paybackPeriod} years</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
              <span className="text-green-700 font-medium">🌱 CO₂ Reduction</span>
              <span className="text-green-900 font-bold">{results.co2Reduction} tonnes/year</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-center">
            <button className="w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              🎯 Get Detailed Quote for {results.recommendedModel}
            </button>
            <p className="text-blue-100 text-sm mt-3">
              Free consultation • Custom installation • 5-year warranty
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}