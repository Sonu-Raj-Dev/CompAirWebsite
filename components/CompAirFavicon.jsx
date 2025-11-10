import React from 'react';

export default function CompAirFavicon({ size = 32 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 80 80" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="faviconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      
      {/* Background Circle */}
      <circle cx="40" cy="40" r="38" fill="url(#faviconGradient)" stroke="#ffffff" strokeWidth="2"/>
      
      {/* CompAir Logo Symbol - Simplified for favicon */}
      <g transform="translate(20,25)">
        {/* Main Arrow Symbol */}
        <path 
          d="M10,15 L20,5 L30,15 L27,18 L23,14 L23,25 L17,25 L17,14 L13,18 Z" 
          fill="#ffffff"
        />
        {/* Air flow lines */}
        <rect x="32" y="12" width="2" height="6" fill="#ffffff" opacity="0.8" />
        <rect x="36" y="10" width="2" height="10" fill="#ffffff" opacity="0.6" />
        <rect x="40" y="8" width="2" height="14" fill="#ffffff" opacity="0.4" />
      </g>
      
      {/* Simplified "C" and "A" */}
      <text x="40" y="55" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="Arial">CA</text>
    </svg>
  );
}