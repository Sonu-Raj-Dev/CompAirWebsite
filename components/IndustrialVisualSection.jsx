import { useState, useEffect } from 'react';

export default function IndustrialVisualSection() {
  const [activeView, setActiveView] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveView(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const industrialViews = [
    {
      title: "Factory Floor Power",
      description: "Where precision meets production",
      scene: "factory",
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Macro Engineering",
      description: "Every bolt, every detail matters",
      scene: "macro",
      color: "from-gray-600 to-gray-800"
    },
    {
      title: "Motion & Energy",
      description: "Continuous flow, endless possibilities",
      scene: "motion",
      color: "from-purple-600 to-purple-800"
    },
    {
      title: "Industrial Symphony",
      description: "Harmony of machines working in perfect sync",
      scene: "symphony",
      color: "from-orange-600 to-orange-800"
    }
  ];

  const FactoryFloorSVG = () => (
    <svg width="100%" height="100%" viewBox="0 0 400 300" className="absolute inset-0">
      {/* Factory Background */}
      <defs>
        <linearGradient id="factoryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.9"/>
        </linearGradient>
        <pattern id="metalPattern" patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill="#374151" opacity="0.3"/>
          <rect x="10" y="10" width="10" height="10" fill="#4B5563" opacity="0.5"/>
        </pattern>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#factoryGrad)"/>
      <rect width="100%" height="100%" fill="url(#metalPattern)"/>
      
      {/* Industrial Structures */}
      <g opacity={activeView === 0 ? "1" : "0.3"} className="transition-opacity duration-1000">
        {/* Main Compressor Unit */}
        <rect x="50" y="120" width="80" height="60" fill="#6B7280" stroke="#9CA3AF" strokeWidth="2" rx="5"/>
        <rect x="60" y="130" width="60" height="40" fill="#374151" rx="3"/>
        
        {/* Pipes */}
        {[0, 1, 2].map(i => (
          <g key={i} className={`${activeView === 0 ? 'animate-pulse' : ''}`} style={{animationDelay: `${i * 0.5}s`}}>
            <rect x={150 + i * 30} y={140 + i * 5} width="40" height="8" fill="#9CA3AF" rx="4"/>
            <circle cx={170 + i * 30} cy={144 + i * 5} r="3" fill="#3B82F6" className="animate-ping"/>
          </g>
        ))}
        
        {/* Assembly Line */}
        <rect x="250" y="100" width="120" height="100" fill="#4B5563" stroke="#6B7280" strokeWidth="1" rx="8"/>
        <rect x="260" y="110" width="100" height="80" fill="#374151" rx="5"/>
        
        {/* Moving Parts */}
        {[0, 1, 2, 3].map(i => (
          <rect 
            key={i}
            x={270 + i * 20} 
            y="150" 
            width="15" 
            height="10" 
            fill="#10B981" 
            rx="2"
            className={`${activeView === 0 ? 'animate-bounce' : ''}`}
            style={{animationDelay: `${i * 0.3}s`}}
          />
        ))}
      </g>
      
      {/* Pressure Gauges */}
      {[0, 1, 2].map(i => (
        <g key={i} opacity={activeView === 0 ? "1" : "0.5"}>
          <circle cx={80 + i * 100} cy="50" r="15" fill="#1F2937" stroke="#6B7280" strokeWidth="2"/>
          <circle cx={80 + i * 100} cy="50" r="10" fill="#374151"/>
          <line 
            x1={80 + i * 100} 
            y1="50" 
            x2={80 + i * 100 + Math.cos(activeView * 0.5 + i) * 8} 
            y2={50 + Math.sin(activeView * 0.5 + i) * 8} 
            stroke="#3B82F6" 
            strokeWidth="2"
            className="transition-all duration-500"
          />
        </g>
      ))}
    </svg>
  );

  const MacroDetailsSVG = () => (
    <svg width="100%" height="100%" viewBox="0 0 400 300" className="absolute inset-0">
      <defs>
        <radialGradient id="metalShine" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F3F4F6"/>
          <stop offset="50%" stopColor="#9CA3AF"/>
          <stop offset="100%" stopColor="#374151"/>
        </radialGradient>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#factoryGrad)"/>
      
      {/* Macro Bolt Details */}
      <g opacity={activeView === 1 ? "1" : "0.3"} className="transition-opacity duration-1000">
        {/* Large Bolt Head */}
        <polygon 
          points="150,80 180,90 200,120 180,150 150,160 120,150 100,120 120,90" 
          fill="url(#metalShine)" 
          stroke="#6B7280" 
          strokeWidth="2"
          className={`${activeView === 1 ? 'animate-pulse' : ''}`}
        />
        <circle cx="150" cy="120" r="12" fill="#374151"/>
        <path d="M 145 115 L 155 125 M 155 115 L 145 125" stroke="#9CA3AF" strokeWidth="2"/>
        
        {/* Thread Details */}
        {[0, 1, 2, 3, 4].map(i => (
          <ellipse 
            key={i}
            cx="250" 
            cy={100 + i * 10} 
            rx="40" 
            ry="3" 
            fill="none" 
            stroke="#9CA3AF" 
            strokeWidth="1"
            opacity={activeView === 1 ? 0.8 : 0.3}
          />
        ))}
        
        {/* Precision Measurement Lines */}
        {[0, 1, 2].map(i => (
          <g key={i} className={`${activeView === 1 ? 'animate-pulse' : ''}`} style={{animationDelay: `${i * 0.2}s`}}>
            <line x1={50 + i * 30} y1="200" x2={80 + i * 30} y2="200" stroke="#F59E0B" strokeWidth="1"/>
            <line x1={50 + i * 30} y1="195" x2={50 + i * 30} y2="205" stroke="#F59E0B" strokeWidth="1"/>
            <line x1={80 + i * 30} y1="195" x2={80 + i * 30} y2="205" stroke="#F59E0B" strokeWidth="1"/>
            <text x={65 + i * 30} y="215" fill="#F59E0B" fontSize="8" textAnchor="middle">±0.1mm</text>
          </g>
        ))}
      </g>
    </svg>
  );

  const MotionFlowSVG = () => (
    <svg width="100%" height="100%" viewBox="0 0 400 300" className="absolute inset-0">
      <rect width="100%" height="100%" fill="url(#factoryGrad)"/>
      
      {/* Flowing Energy Streams */}
      <g opacity={activeView === 2 ? "1" : "0.3"} className="transition-opacity duration-1000">
        {/* Main Energy Conduit */}
        <path 
          d="M 50 150 Q 150 100 250 150 Q 350 200 380 150" 
          fill="none" 
          stroke="url(#energyGradient)" 
          strokeWidth="6"
          className={`${activeView === 2 ? 'animate-pulse' : ''}`}
        />
        
        {/* Flow Particles */}
        {[...Array(8)].map((_, i) => (
          <circle 
            key={i}
            r="3" 
            fill="#3B82F6"
            className={`${activeView === 2 ? 'animate-ping' : ''}`}
            style={{
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <animateMotion 
              dur="3s" 
              repeatCount="indefinite"
              begin={activeView === 2 ? `${i * 0.3}s` : "indefinite"}
            >
              <path d="M 50 150 Q 150 100 250 150 Q 350 200 380 150"/>
            </animateMotion>
          </circle>
        ))}
        
        {/* Rotating Turbines */}
        {[100, 200, 300].map((x, i) => (
          <g key={i} transform-origin={`${x} 150`}>
            <circle cx={x} cy="150" r="20" fill="#374151" stroke="#6B7280" strokeWidth="2"/>
            {[0, 1, 2, 3].map(blade => (
              <line 
                key={blade}
                x1={x} 
                y1="150" 
                x2={x + Math.cos(blade * Math.PI / 2) * 15} 
                y2={150 + Math.sin(blade * Math.PI / 2) * 15} 
                stroke="#10B981" 
                strokeWidth="2"
                className={`${activeView === 2 ? 'animate-spin' : ''}`}
                style={{transformOrigin: `${x}px 150px`}}
              />
            ))}
          </g>
        ))}
      </g>
      
      <defs>
        <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6"/>
          <stop offset="50%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#10B981"/>
        </linearGradient>
      </defs>
    </svg>
  );

  const IndustrialSymphonySVG = () => (
    <svg width="100%" height="100%" viewBox="0 0 400 300" className="absolute inset-0">
      <rect width="100%" height="100%" fill="url(#factoryGrad)"/>
      
      {/* Synchronized Industrial Orchestra */}
      <g opacity={activeView === 3 ? "1" : "0.3"} className="transition-opacity duration-1000">
        {/* Multiple Compressor Units in Harmony */}
        {[0, 1, 2].map(i => (
          <g key={i} className={`${activeView === 3 ? 'animate-bounce' : ''}`} style={{animationDelay: `${i * 0.5}s`}}>
            <rect 
              x={50 + i * 100} 
              y={120 + Math.sin(i) * 20} 
              width="60" 
              height="40" 
              fill="#6B7280" 
              stroke="#9CA3AF" 
              strokeWidth="2" 
              rx="5"
            />
            <circle 
              cx={80 + i * 100} 
              cy={140 + Math.sin(i) * 20} 
              r="8" 
              fill="#3B82F6"
              className={`${activeView === 3 ? 'animate-pulse' : ''}`}
              style={{animationDelay: `${i * 0.3}s`}}
            />
          </g>
        ))}
        
        {/* Synchronized Wave Pattern */}
        <path 
          d={`M 0 250 ${[...Array(20)].map((_, i) => 
            `L ${i * 20} ${250 + Math.sin(i * 0.5 + (activeView === 3 ? Date.now() * 0.001 : 0)) * 20}`
          ).join(' ')}`}
          fill="none" 
          stroke="#10B981" 
          strokeWidth="3"
          opacity="0.7"
        />
        
        {/* Pressure Synchronization Indicators */}
        {[80, 180, 280].map((x, i) => (
          <g key={i}>
            <rect 
              x={x - 10} 
              y="60" 
              width="20" 
              height={activeView === 3 ? `${40 + Math.sin(Date.now() * 0.003 + i) * 10}` : "30"} 
              fill="#F59E0B" 
              rx="2"
              className="transition-all duration-300"
            />
            <text x={x} y="50" fill="#F59E0B" fontSize="10" textAnchor="middle">
              {activeView === 3 ? `${13 + Math.sin(i) * 0.1}` : "13"} bar
            </text>
          </g>
        ))}
      </g>
    </svg>
  );

  const renderScene = () => {
    switch (activeView) {
      case 0: return <FactoryFloorSVG />;
      case 1: return <MacroDetailsSVG />;
      case 2: return <MotionFlowSVG />;
      case 3: return <IndustrialSymphonySVG />;
      default: return <FactoryFloorSVG />;
    }
  };

  return (
    <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl">
      {/* Main Visual Area */}
      <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-blue-900">
        {renderScene()}
        
        {/* Overlay Information */}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white">
            <h3 className="text-xl font-bold mb-2">{industrialViews[activeView].title}</h3>
            <p className="text-sm opacity-90 mb-3">{industrialViews[activeView].description}</p>
            
            {/* Scene Navigation */}
            <div className="flex space-x-2">
              {industrialViews.map((view, i) => (
                <button
                  key={i}
                  onClick={() => setActiveView(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === activeView 
                      ? `bg-gradient-to-r ${view.color} scale-125` 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Industrial Ambiance Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-white rounded-full ${
                activeView === i % 4 ? 'animate-ping' : 'animate-pulse'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.2,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}