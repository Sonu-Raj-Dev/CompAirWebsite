import React from 'react';

export default function CompAirLogo({ className = "h-8", isDark = false }) {
  return (
    <div className={`${className} flex items-center`}>
      <svg 
        viewBox="0 0 400 120" 
        className="h-full w-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="logoGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="rgba(0,0,0,0.3)" />
          </filter>
        </defs>
        
        {/* CompAir Logo Symbol - Abstract Industrial/Arrow Design */}
        <g transform="translate(10,20)">
          {/* Main Arrow/Industrial Symbol */}
          <path 
            d="M0,40 L20,20 L40,40 L35,45 L25,35 L25,60 L15,60 L15,35 L5,45 Z" 
            fill={isDark ? "url(#logoGradientLight)" : "url(#logoGradient)"}
            filter="url(#shadow)"
          />
          {/* Side bars representing compressed air flow */}
          <rect x="45" y="30" width="8" height="20" fill={isDark ? "#93c5fd" : "#1e40af"} opacity="0.8" />
          <rect x="57" y="25" width="8" height="30" fill={isDark ? "#93c5fd" : "#1e40af"} opacity="0.6" />
          <rect x="69" y="20" width="8" height="40" fill={isDark ? "#93c5fd" : "#1e40af"} opacity="0.4" />
        </g>

        {/* CompAir Text */}
        <g transform="translate(95,25)">
          <text 
            x="0" 
            y="40" 
            fontFamily="Arial, sans-serif" 
            fontSize="36" 
            fontWeight="bold" 
            fill={isDark ? "#f8fafc" : "#1e293b"}
            filter="url(#shadow)"
          >
            Comp
          </text>
          <text 
            x="120" 
            y="40" 
            fontFamily="Arial, sans-serif" 
            fontSize="36" 
            fontWeight="bold" 
            fill={isDark ? "#60a5fa" : "#2563eb"}
            filter="url(#shadow)"
          >
            Air
          </text>
          {/* Subtitle */}
          <text 
            x="0" 
            y="65" 
            fontFamily="Arial, sans-serif" 
            fontSize="12" 
            fontWeight="normal" 
            fill={isDark ? "#94a3b8" : "#64748b"}
            letterSpacing="1.5px"
          >
            COMPRESSED AIR SOLUTIONS
          </text>
        </g>

        {/* Decorative air flow lines */}
        <g opacity="0.3">
          <path 
            d="M320,30 Q340,35 360,30 Q380,25 400,30" 
            stroke={isDark ? "#60a5fa" : "#3b82f6"} 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
          />
          <path 
            d="M320,50 Q340,55 360,50 Q380,45 400,50" 
            stroke={isDark ? "#60a5fa" : "#3b82f6"} 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
          <path 
            d="M320,70 Q340,75 360,70 Q380,65 400,70" 
            stroke={isDark ? "#60a5fa" : "#3b82f6"} 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </g>
      </svg>
    </div>
  );
}