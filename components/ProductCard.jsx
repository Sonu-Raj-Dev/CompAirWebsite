import Link from 'next/link';
import { useState } from 'react';

// Product story mapping - transforms technical specs into relatable stories
const getProductStory = (productId) => {
  const stories = {
    'L45': {
      story: "Perfect for the ambitious small business owner",
      application: "Small workshops, dental clinics, auto repair shops",
      benefit: "Reliable power that grows with your dreams",
      icon: "🏪",
      bgColor: "from-blue-500 to-blue-600"
    },
    'L55': {
      story: "The dependable workhorse for growing businesses",
      application: "Medium-scale manufacturing, packaging units",
      benefit: "Consistent performance when stakes are high",
      icon: "🏭",
      bgColor: "from-blue-600 to-blue-700"
    },
    'L75': {
      story: "Powers the production lines that never sleep",
      application: "Food processing, textile manufacturing",
      benefit: "24/7 reliability for continuous operations",
      icon: "⚙️",
      bgColor: "from-indigo-500 to-indigo-600"
    },
    'L90': {
      story: "Smart technology that adapts to your needs",
      application: "Variable demand environments, smart factories",
      benefit: "Intelligent power that saves energy and money",
      icon: "🧠",
      bgColor: "from-indigo-600 to-indigo-700"
    },
    'L110': {
      story: "Premium performance for premium operations",
      application: "High-end manufacturing, precision industries",
      benefit: "Excellence that matches your standards",
      icon: "💎",
      bgColor: "from-purple-500 to-purple-600"
    },
    'L132': {
      story: "Industrial powerhouse for massive operations",
      application: "Heavy manufacturing, large-scale production",
      benefit: "Unstoppable power for unstoppable ambitions",
      icon: "🚀",
      bgColor: "from-purple-600 to-purple-700"
    }
  };
  
  return stories[productId] || stories['L45'];
};

export default function ProductCard({p}){
const [imageError, setImageError] = useState(false);
const story = getProductStory(p.id);

const getAccentColor = (family) => {
  if (family.includes('L45') || family.includes('L55')) return 'blue';
  if (family.includes('L75') || family.includes('L90')) return 'indigo';
  if (family.includes('L110') || family.includes('L132')) return 'purple';
  return 'gray';
};

const accentColor = getAccentColor(p.family);

return (
<div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full transform hover:-translate-y-2">
{/* Product Image Header with Story */}
<div className={`relative h-56 bg-gradient-to-br ${story.bgColor} overflow-hidden`}>
  {/* Product Image */}
  {p.image && !imageError ? (
    <>
      <img 
        src={p.image}
        alt={p.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
        onError={() => setImageError(true)}
      />
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
    </>
  ) : (
    /* Fallback gradient background */
    <div className="absolute inset-0 bg-black/10"></div>
  )}
  
  {/* Story Badge */}
  <div className="absolute top-4 left-4">
    <span className="inline-block px-3 py-1 bg-white/90 text-gray-800 text-sm font-semibold rounded-full backdrop-blur-sm">
      {story.icon} {p.id} Series
    </span>
  </div>
  
  {/* Power Badge */}
  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
    <div className="text-gray-900 font-bold text-lg">{p.specs.driveMotor_kW}</div>
    <div className="text-gray-600 text-xs">kW Power</div>
  </div>
  
  {/* Story Content Overlay */}
  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
    <h4 className="text-xl font-bold mb-2 leading-tight">
      {story.story}
    </h4>
    <p className="text-white/90 text-sm leading-relaxed">
      {story.application}
    </p>
  </div>
  
  {/* Floating Animation Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100"
        style={{
          left: `${20 + (i * 25)}%`,
          top: `${30 + (i % 2) * 30}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: '2s'
        }}
      />
    ))}
  </div>
</div>

{/* Content */}
<div className="p-6 flex-1 flex flex-col">
<h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-${accentColor}-600 transition-colors">
{p.title}
</h4>

{/* Story Benefit */}
<div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 mb-4">
<div className="flex items-start space-x-3">
<div className="text-2xl">{story.icon}</div>
<div>
<div className="font-semibold text-gray-900 mb-1">Perfect For:</div>
<p className="text-gray-700 text-sm leading-relaxed">{story.benefit}</p>
</div>
</div>
</div>

{/* Quick Specs - Simplified */}
<div className="grid grid-cols-2 gap-3 mb-4">
<div className="text-center p-3 bg-white border border-gray-200 rounded-lg">
<div className={`text-lg font-bold text-${accentColor}-600`}>{p.specs.driveMotor_kW}kW</div>
<div className="text-xs text-gray-500">Power Output</div>
</div>
<div className="text-center p-3 bg-white border border-gray-200 rounded-lg">
<div className={`text-lg font-bold text-${accentColor}-600`}>{p.specs.noise_dBA}dB</div>
<div className="text-xs text-gray-500">Quiet Operation</div>
</div>
</div>

{/* Key Benefits instead of Features */}
{p.features && (
<div className="mb-6 flex-1">
<h5 className="font-semibold text-gray-800 mb-3">Why Choose This:</h5>
<div className="space-y-2">
{p.features.slice(0, 2).map((feature, index) => (
<div key={index} className="flex items-start text-sm text-gray-700">
<div className="text-green-500 mr-2 mt-0.5">✓</div>
<span>{feature.replace('Advanced', 'Smart').replace('High', 'Superior')}</span>
</div>
))}
</div>
</div>
)}

{/* Call to Action */}
<div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
<Link href={`/products/${p.slug}`} className={`inline-flex items-center text-${accentColor}-600 font-semibold hover:text-${accentColor}-700 transition-colors group/link`}>
See Full Story 
<svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
</svg>
</Link>
<a 
href={p.pdf} 
className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-1"
>
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
</svg>
<span>Specs</span>
</a>
</div>
</div>
</div>
)
}