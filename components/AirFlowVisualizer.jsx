import { useState, useEffect } from 'react';

export default function AirFlowVisualizer({ type = "airflow" }) {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (type === "airflow") {
    return (
      <div className="relative w-full h-32 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg overflow-hidden">
        {/* Compressor */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className={`w-4 h-4 bg-blue-600 rounded-full animate-spin ${animationStep > 0 ? 'opacity-100' : 'opacity-60'}`}></div>
          </div>
        </div>

        {/* Air Flow Particles */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-20 right-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 bg-blue-500 rounded-full transition-all duration-1000 ${
                animationStep > i ? 'translate-x-full opacity-100' : 'translate-x-0 opacity-60'
              }`}
              style={{
                left: `${i * 20}%`,
                top: `${Math.sin(i) * 10 + 10}px`,
                transitionDelay: `${i * 200}ms`
              }}
            />
          ))}
        </div>

        {/* Pressure Indicator */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-center">
          <div className={`text-2xl font-bold ${animationStep >= 3 ? 'text-green-600' : 'text-gray-600'}`}>
            {animationStep >= 3 ? '13' : '0'} bar
          </div>
          <div className="text-xs text-gray-600">Pressure</div>
        </div>

        {/* Flow Line */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-20 right-20 h-1 bg-blue-300 rounded">
          <div 
            className={`h-full bg-blue-600 rounded transition-all duration-2000 ${
              animationStep >= 2 ? 'w-full' : 'w-0'
            }`}
          ></div>
        </div>
      </div>
    );
  }

  if (type === "energy") {
    return (
      <div className="relative w-full h-32 bg-gradient-to-r from-green-100 to-green-200 rounded-lg overflow-hidden">
        {/* Energy Input */}
        <div className="absolute left-4 top-4 text-center">
          <div className="text-lg font-bold text-gray-800">Input</div>
          <div className="text-2xl font-bold text-red-600">100kW</div>
        </div>

        {/* CompAir Magic Box */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
          </svg>
          {/* Energy Efficiency Sparkles */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-yellow-400 rounded-full ${
                animationStep === i ? 'animate-ping' : 'opacity-30'
              }`}
              style={{
                top: `${20 + i * 15}%`,
                left: `${20 + i * 15}%`
              }}
            />
          ))}
        </div>

        {/* Energy Output */}
        <div className="absolute right-4 top-4 text-center">
          <div className="text-lg font-bold text-gray-800">Output</div>
          <div className={`text-2xl font-bold transition-colors duration-1000 ${
            animationStep >= 2 ? 'text-green-600' : 'text-gray-600'
          }`}>
            {animationStep >= 2 ? '60' : '100'}kW
          </div>
        </div>

        {/* Savings Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <div className={`text-xl font-bold transition-all duration-1000 ${
            animationStep >= 3 ? 'text-green-600 scale-110' : 'text-gray-600 scale-100'
          }`}>
            {animationStep >= 3 ? '40% Energy Saved!' : 'Processing...'}
          </div>
        </div>

        {/* Energy Flow Lines */}
        <div className="absolute top-8 left-20 right-20">
          <div className={`h-1 bg-red-400 rounded transition-all duration-1000 ${
            animationStep >= 1 ? 'w-1/3' : 'w-full'
          }`}></div>
        </div>
        <div className="absolute top-12 left-2/3 right-20">
          <div className={`h-1 bg-green-400 rounded transition-all duration-1000 ${
            animationStep >= 2 ? 'w-full' : 'w-0'
          }`}></div>
        </div>
      </div>
    );
  }

  if (type === "pressure") {
    return (
      <div className="relative w-full h-32 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg overflow-hidden">
        {/* Pressure Gauge */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div className="relative w-16 h-16">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4" fill="none" className="text-gray-300"/>
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                stroke="currentColor" 
                strokeWidth="4" 
                fill="none" 
                className="text-purple-600"
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * (animationStep * 25) / 100)}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold text-purple-800">{animationStep * 25}%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pressure Applications */}
        <div className="absolute right-8 top-2 space-y-1">
          {['Pneumatic Tools', 'Paint Spraying', 'Automated Systems', 'Quality Control'].map((app, i) => (
            <div 
              key={app}
              className={`text-xs px-2 py-1 rounded transition-all duration-500 ${
                animationStep > i 
                  ? 'bg-purple-600 text-white scale-105' 
                  : 'bg-gray-300 text-gray-600 scale-100'
              }`}
              style={{ transitionDelay: `${i * 300}ms` }}
            >
              {app}
            </div>
          ))}
        </div>

        {/* Consistent Pressure Line */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="text-xs text-gray-600 mb-1">Pressure Consistency</div>
          <div className="h-2 bg-gray-300 rounded">
            <div 
              className={`h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded transition-all duration-2000 ${
                animationStep >= 2 ? 'w-full' : 'w-0'
              }`}
            ></div>
          </div>
          <div className="text-xs text-purple-600 mt-1 font-semibold">
            {animationStep >= 2 ? 'Stable 13 bar ±0.1' : 'Calibrating...'}
          </div>
        </div>
      </div>
    );
  }

  return null;
}