import { useState, useEffect } from 'react';

export default function CompressorHeroAnimation() {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 8);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      {/* Industrial Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="industrial" patternUnits="userSpaceOnUse" width="40" height="40">
              <rect width="40" height="40" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="20" cy="20" r="3" fill="#ffffff" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#industrial)"/>
        </svg>
      </div>

      {/* Main Compressor Unit */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="relative">
          {/* Compressor Body */}
          <div className="w-32 h-24 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg shadow-2xl relative">
            {/* Industrial Details */}
            <div className="absolute top-2 left-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full"></div>
            <div className="absolute bottom-2 left-2 right-2 h-1 bg-blue-400 rounded opacity-80"></div>
            
            {/* Rotating Compressor Blades */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12">
              <div className={`w-full h-full relative transition-transform duration-500 ${animationPhase % 2 === 0 ? 'rotate-45' : 'rotate-90'}`}>
                {/* Blade Assembly */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-6 bg-gradient-to-t from-blue-300 to-blue-500 origin-bottom"
                    style={{
                      transform: `rotate(${i * 60}deg) translateY(-50%)`,
                      left: '50%',
                      top: '50%',
                      transformOrigin: '50% 100%'
                    }}
                  />
                ))}
                {/* Center Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Motor */}
          <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg shadow-xl">
            <div className="absolute inset-2 bg-gray-700 rounded"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>

          {/* Air Tank */}
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-12 h-20 bg-gradient-to-b from-gray-200 to-gray-400 rounded-full shadow-xl">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gray-500 rounded"></div>
          </div>
        </div>
      </div>

      {/* Energy Flow Animation */}
      <div className="absolute left-40 top-1/2 transform -translate-y-1/2 right-8 h-1 z-10">
        {/* Main Energy Flow Line */}
        <div className="relative h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 rounded-full"></div>
          
          {/* Flowing Energy Particles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white rounded-full shadow-lg transition-all duration-1000 ${
                animationPhase > i / 2 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                left: `${(i * 8.33)}%`,
                top: `${Math.sin(i * 0.8) * 8}px`,
                transform: `scale(${1 + Math.sin(animationPhase + i) * 0.3})`,
                filter: 'blur(0.5px)',
                animationDelay: `${i * 100}ms`
              }}
            />
          ))}
        </div>
      </div>

      {/* Industry Applications - Morphing Destinations */}
      <div className="absolute right-8 top-8 bottom-8 w-32 space-y-4 z-20">
        {[
          { icon: "🏭", label: "Manufacturing", color: "from-orange-400 to-red-500", active: animationPhase >= 2 && animationPhase < 4 },
          { icon: "🍕", label: "Food Processing", color: "from-green-400 to-green-600", active: animationPhase >= 4 && animationPhase < 6 },
          { icon: "🚗", label: "Automotive", color: "from-blue-400 to-blue-600", active: animationPhase >= 6 && animationPhase < 8 },
          { icon: "🏥", label: "Healthcare", color: "from-purple-400 to-purple-600", active: animationPhase >= 0 && animationPhase < 2 }
        ].map((industry, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl transition-all duration-500 ${
              industry.active 
                ? `bg-gradient-to-br ${industry.color} text-white scale-110 shadow-2xl` 
                : 'bg-white/20 text-white/60 scale-95'
            }`}
          >
            <div className="text-2xl mb-1">{industry.icon}</div>
            <div className="text-xs font-semibold">{industry.label}</div>
            
            {/* Energy Reception Animation */}
            {industry.active && (
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                {[...Array(3)].map((_, j) => (
                  <div
                    key={j}
                    className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                    style={{
                      left: `${j * -8}px`,
                      animationDelay: `${j * 200}ms`
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Power Metrics Display */}
      <div className="absolute bottom-4 left-8 right-8 z-20">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className={`text-lg font-bold transition-colors duration-500 ${animationPhase >= 2 ? 'text-green-400' : 'text-gray-400'}`}>
                {animationPhase >= 2 ? '13' : '0'} bar
              </div>
              <div className="text-xs opacity-75">Pressure</div>
            </div>
            <div>
              <div className={`text-lg font-bold transition-colors duration-500 ${animationPhase >= 3 ? 'text-blue-400' : 'text-gray-400'}`}>
                {animationPhase >= 3 ? '24.7' : '0'} m³/min
              </div>
              <div className="text-xs opacity-75">Air Flow</div>
            </div>
            <div>
              <div className={`text-lg font-bold transition-colors duration-500 ${animationPhase >= 4 ? 'text-purple-400' : 'text-gray-400'}`}>
                {animationPhase >= 4 ? '132' : '0'} kW
              </div>
              <div className="text-xs opacity-75">Power</div>
            </div>
            <div>
              <div className={`text-lg font-bold transition-colors duration-500 ${animationPhase >= 5 ? 'text-yellow-400' : 'text-gray-400'}`}>
                {animationPhase >= 5 ? '40%' : '0%'} Savings
              </div>
              <div className="text-xs opacity-75">Energy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Lighting Effects */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-32 h-32 rounded-full transition-opacity duration-1000 ${
              animationPhase === i ? 'opacity-20' : 'opacity-5'
            }`}
            style={{
              background: `radial-gradient(circle, ${['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'][i]} 0%, transparent 70%)`,
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              transform: `scale(${1 + Math.sin(animationPhase + i) * 0.2})`
            }}
          />
        ))}
      </div>
    </div>
  );
}