import Link from 'next/link'
import ProductCard from '../components/ProductCard'
import AirFlowVisualizer from '../components/AirFlowVisualizer'
import CompressorHeroAnimation from '../components/CompressorHeroAnimation'
import IndustrialVisualSection from '../components/IndustrialVisualSection'
import InteractivePressureDemo from '../components/InteractivePressureDemo'
import CompressorConfigurator from '../components/CompressorConfigurator'
import CompAirLogo from '../components/CompAirLogo'
import { products } from '../data/products'


function Hero(){
return (
<section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 md:py-32 overflow-hidden">
{/* Background Video */}
<div className="absolute inset-0 z-0">
<video
  className="w-full h-full object-cover opacity-20"
  autoPlay
  muted
  loop
  playsInline
  poster="/images/hero-poster.jpg"
>
  <source src="/videos/compair-operations.mp4" type="video/mp4" />
  <source src="/videos/compair-operations.webm" type="video/webm" />
  {/* Fallback for browsers that don't support video */}
</video>
{/* Dark overlay for better text readability */}
<div className="absolute inset-0 bg-black/40"></div>
</div>

{/* Background Pattern (fallback) */}
<div className="absolute inset-0 opacity-10 z-0">
<div className="absolute inset-0" style={{
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
}} />
</div>

{/* Hero Content */}
<div className="container mx-auto px-4 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">
{/* Left Content */}
<div className="text-center lg:text-left">
<div className="mb-6">
<span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
We Keep Factories Breathing
</span>
</div>
<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
The <span className="text-blue-200">Heartbeat</span> of Industry
</h1>
<h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
Where Air Becomes Power, Power Becomes Progress
</h2>
<p className="text-xl mb-8 leading-relaxed text-blue-50">
Every factory has a pulse. Every production line needs to breathe. 
We don't just sell compressors – we deliver the invisible force that keeps 
India's industries alive, 24 hours a day, 365 days a year.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<Link href="/products" className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
  Discover Your Solution
</Link>
<a href="#customer-stories" className="px-8 py-4 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
  See Success Stories
</a>
</div>

{/* Story Stats */}
<div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
<div className="text-center">
<div className="text-2xl font-bold text-white">99.9%</div>
<div className="text-sm text-blue-100">Uptime Promise</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-white">24/7</div>
<div className="text-sm text-blue-100">Never Stops Working</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-white">5000+</div>
<div className="text-sm text-blue-100">Dreams Powered</div>
</div>
</div>
</div>

{/* Right Content - Dynamic Compressor Animation */}
<div className="relative">
<CompressorHeroAnimation />
</div>
</div>
</div>
</section>
)
}

function CompanyShowcase(){
return (
<section id="company-video" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
<div className="container mx-auto px-4">
{/* Section Header */}
<div className="text-center max-w-3xl mx-auto mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
Industrial Precision in Motion
</h2>
<p className="text-xl text-gray-600 mb-8">
Experience the raw power, intricate engineering, and synchronized precision 
that defines every CompAir compressor. This isn't just machinery – it's industrial art.
</p>
</div>

{/* Interactive Industrial Visual */}
<div className="mb-16">
<IndustrialVisualSection />
</div>

{/* Real Factory Insights */}
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
{/* Visual Metrics */}
<div className="space-y-6">
<div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
<h3 className="text-2xl font-bold mb-6">Engineering Excellence</h3>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-gray-300">Precision Tolerance</span>
<span className="text-green-400 font-bold">±0.001mm</span>
</div>
<div className="w-full bg-gray-700 rounded-full h-2">
<div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full w-[98%] animate-pulse"></div>
</div>

<div className="flex justify-between items-center">
<span className="text-gray-300">Material Strength</span>
<span className="text-blue-400 font-bold">Industrial Grade</span>
</div>
<div className="w-full bg-gray-700 rounded-full h-2">
<div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full w-[95%] animate-pulse"></div>
</div>

<div className="flex justify-between items-center">
<span className="text-gray-300">Performance Consistency</span>
<span className="text-purple-400 font-bold">99.9% Uptime</span>
</div>
<div className="w-full bg-gray-700 rounded-full h-2">
<div className="bg-gradient-to-r from-purple-400 to-purple-500 h-2 rounded-full w-[99%] animate-pulse"></div>
</div>
</div>
</div>

{/* Industrial Features */}
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
<div className="text-2xl mb-3">🔧</div>
<h4 className="font-bold text-gray-900 mb-2">Macro Precision</h4>
<p className="text-gray-600 text-sm">Every bolt, every seal engineered for perfection</p>
</div>
<div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
<div className="text-2xl mb-3">⚡</div>
<h4 className="font-bold text-gray-900 mb-2">Motion Mastery</h4>
<p className="text-gray-600 text-sm">Synchronized power that never stops flowing</p>
</div>
<div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow">
<div className="text-2xl mb-3">🎯</div>
<h4 className="font-bold text-gray-900 mb-2">Factory Symphony</h4>
<p className="text-gray-600 text-sm">Multiple units working in perfect harmony</p>
</div>
<div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
<div className="text-2xl mb-3">📊</div>
<h4 className="font-bold text-gray-900 mb-2">Real-time Data</h4>
<p className="text-gray-600 text-sm">Industrial IoT monitoring every heartbeat</p>
</div>
</div>
</div>

{/* Content */}
<div className="space-y-8">
{/* Factory Reality */}
<div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-2xl font-bold text-gray-900 mb-4">
Where Engineering Meets Reality
</h3>
<p className="text-gray-700 mb-6 leading-relaxed">
Step into our world where every surface tells a story of precision. 
From the micro-threaded bolts that hold immense pressure to the 
seamless flow of compressed air powering entire production lines.
</p>
<div className="space-y-4">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
</svg>
</div>
<div>
<h4 className="font-semibold text-gray-900">Instant Power Delivery</h4>
<p className="text-gray-600 text-sm">From zero to full pressure in seconds, not minutes</p>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
</svg>
</div>
<div>
<h4 className="font-semibold text-gray-900">Visual Quality Control</h4>
<p className="text-gray-600 text-sm">See the precision in every component, feel the quality in every operation</p>
</div>
</div>
</div>
</div>
{/* Animated Industrial Pattern */}
<div className="absolute top-0 right-0 w-32 h-32 opacity-20">
<div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
</div>
</div>

{/* Performance Theater */}
<div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-2xl font-bold mb-4">Performance Theater</h3>
<p className="text-gray-300 mb-6">
Watch the mesmerizing dance of industrial precision. Every rotation, 
every pressure pulse, every energy transfer choreographed to perfection.
</p>
<div className="grid grid-cols-3 gap-6 text-center">
<div>
<div className="text-3xl font-bold text-blue-400 mb-2">0.001s</div>
<div className="text-sm text-gray-400">Response Time</div>
</div>
<div>
<div className="text-3xl font-bold text-green-400 mb-2">360°</div>
<div className="text-sm text-gray-400">Precision Control</div>
</div>
<div>
<div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
<div className="text-sm text-gray-400">Continuous Flow</div>
</div>
</div>
</div>
{/* Ambient Lighting */}
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
</div>
</div>
</div>

{/* Statistics Section with Visual Impact */}
<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
<div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">25+</div>
<div className="text-gray-700 font-medium">Years of Industrial Mastery</div>
</div>
<div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
<div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">5000+</div>
<div className="text-gray-700 font-medium">Factories Powered</div>
</div>
<div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
<div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">99.9%</div>
<div className="text-gray-700 font-medium">Visual Perfection</div>
</div>
<div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
<div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">24/7</div>
<div className="text-gray-700 font-medium">Industrial Heartbeat</div>
</div>
</div>
</div>
</section>
)
}

function CustomerStories(){
return (
<section id="customer-stories" className="py-16 md:py-24 bg-white">
<div className="container mx-auto px-4">
{/* Section Header */}
<div className="text-center max-w-4xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
Real Stories, Real Results
</h2>
<p className="text-xl text-gray-600">
Behind every CompAir compressor is a story of transformation. 
From small workshops to massive manufacturing plants, see how we turn challenges into success stories.
</p>
</div>

{/* Customer Stories Grid */}
<div className="grid lg:grid-cols-3 gap-8 mb-16">
{/* Story 1: Food Processing */}
<div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
<div className="relative z-10">
<div className="flex items-center mb-6">
<div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mr-4">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-1.343 2-3 2z"/>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-1.343 2-3 2z"/>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-1.343 2-3 2z"/>
</svg>
</div>
<div>
<h3 className="text-xl font-bold text-gray-900">24/7 Food Processing</h3>
<p className="text-orange-600 font-medium">Sunrise Foods Ltd.</p>
</div>
</div>
<blockquote className="text-gray-700 mb-6 italic">
"Our packaging line never stops. When our old compressor failed at midnight, 
we lost ₹2 lakh in spoiled products. CompAir's L90 hasn't missed a beat in 3 years. 
It's not just a machine – it's our lifeline."
</blockquote>
<div className="flex items-center justify-between">
<div className="text-sm text-gray-600">Mumbai, Maharashtra</div>
<div className="text-orange-600 font-semibold">L90 V4</div>
</div>
{/* Animated Background */}
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full opacity-30 transform translate-x-16 -translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>
</div>
</div>

{/* Story 2: Textile Manufacturing */}
<div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
<div className="relative z-10">
<div className="flex items-center mb-6">
<div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
</svg>
</div>
<div>
<h3 className="text-xl font-bold text-gray-900">Precision Textile Weaving</h3>
<p className="text-blue-600 font-medium">Maheshwari Fabrics</p>
</div>
</div>
<blockquote className="text-gray-700 mb-6 italic">
"Every thread matters in our business. The CompAir L110's consistent pressure 
keeps our looms running perfectly. We've increased production by 30% with 
zero quality issues since installation."
</blockquote>
<div className="flex items-center justify-between">
<div className="text-sm text-gray-600">Rajasthan</div>
<div className="text-blue-600 font-semibold">L110 V4</div>
</div>
{/* Animated Background */}
<div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200 rounded-full opacity-30 transform -translate-x-8 translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>
</div>
</div>

{/* Story 3: Automobile Assembly */}
<div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
<div className="relative z-10">
<div className="flex items-center mb-6">
<div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
</svg>
</div>
<div>
<h3 className="text-xl font-bold text-gray-900">Automotive Excellence</h3>
<p className="text-green-600 font-medium">Precision Auto Parts</p>
</div>
</div>
<blockquote className="text-gray-700 mb-6 italic">
"Our pneumatic tools need instant, reliable power. The L132's variable speed 
technology adapts to our changing demands. It's like having a smart partner 
on the production floor."
</blockquote>
<div className="flex items-center justify-between">
<div className="text-sm text-gray-600">Chennai, Tamil Nadu</div>
<div className="text-green-600 font-semibold">L132 V4</div>
</div>
{/* Animated Background */}
<div className="absolute top-1/2 right-0 w-20 h-20 bg-green-200 rounded-full opacity-30 transform translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
</div>
</div>
</div>

{/* Visual Impact Section */}
<div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-2xl md:text-3xl font-bold mb-6">
The Numbers Tell Our Story
</h3>
<p className="text-gray-300 text-lg mb-8">
Every installation creates a ripple effect of efficiency, reliability, and growth. 
These aren't just statistics – they're the measured impact of dreams realized.
</p>
<div className="grid grid-cols-2 gap-6">
<div className="text-center">
<div className="text-3xl font-bold text-blue-400 mb-2">₹50CR+</div>
<div className="text-sm text-gray-400">Saved in Downtime Costs</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-green-400 mb-2">40%</div>
<div className="text-sm text-gray-400">Average Energy Savings</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
<div className="text-sm text-gray-400">Customer Satisfaction</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-purple-400 mb-2">5000+</div>
<div className="text-sm text-gray-400">Success Stories</div>
</div>
</div>
</div>
<div className="text-center">
<div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
<div className="aspect-square bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden">
{/* Animated Progress Circle */}
<svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
<circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-600"/>
<circle 
cx="50" 
cy="50" 
r="45" 
stroke="currentColor" 
strokeWidth="2" 
fill="none" 
className="text-blue-400"
strokeDasharray="283"
strokeDashoffset="28"
strokeLinecap="round"
/>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<div className="text-2xl font-bold">90%</div>
<div className="text-xs text-gray-300">Repeat Customers</div>
</div>
</div>
</div>
<p className="text-gray-300">
When customers trust us with their second, third, and fourth installations, 
we know we're doing more than selling compressors – we're building partnerships.
</p>
</div>
</div>
</div>
</div>
</div>
</section>
)
}

function VisualExplanations(){
return (
<section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
<div className="container mx-auto px-4">
{/* Section Header */}
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
How CompAir Creates Magic
</h2>
<p className="text-xl text-gray-600">
No boring technical jargon. Watch how our compressors transform simple air into 
the powerful force that drives your business forward.
</p>
</div>

{/* Visual Explanations Grid */}
<div className="space-y-12">
{/* Air Flow Explanation */}
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-2xl font-bold text-gray-900 mb-4">
🌪️ Turning Air Into Power
</h3>
<p className="text-lg text-gray-700 mb-6">
Watch how we capture everyday air and transform it into the pressurized power 
that runs your tools, machines, and production lines. It's like having 
a controlled tornado in a box!
</p>
<div className="grid grid-cols-3 gap-4 text-sm">
<div className="text-center">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
<span className="text-blue-600 font-bold">1</span>
</div>
<div className="text-gray-600">Air Intake</div>
</div>
<div className="text-center">
<div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-2">
<span className="text-blue-700 font-bold">2</span>
</div>
<div className="text-gray-600">Compression</div>
</div>
<div className="text-center">
<div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-2">
<span className="text-blue-800 font-bold">3</span>
</div>
<div className="text-gray-600">Pressurized Output</div>
</div>
</div>
</div>
<div>
<AirFlowVisualizer type="airflow" />
</div>
</div>

{/* Energy Efficiency Explanation */}
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="order-2 lg:order-1">
<AirFlowVisualizer type="energy" />
</div>
<div className="order-1 lg:order-2">
<h3 className="text-2xl font-bold text-gray-900 mb-4">
⚡ Smart Energy That Pays You Back
</h3>
<p className="text-lg text-gray-700 mb-6">
Our variable speed technology is like having a smart car engine that only uses 
the fuel you need. No waste, no excess, just intelligent power that cuts your 
electricity bills by up to 40%.
</p>
<div className="bg-green-50 border border-green-200 rounded-lg p-4">
<div className="flex items-center">
<div className="text-green-600 mr-3">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-1.343 2-3 2z"/>
</svg>
</div>
<div>
<div className="font-semibold text-green-800">Typical Savings</div>
<div className="text-sm text-green-700">₹2-5 lakhs annually on electricity costs</div>
</div>
</div>
</div>
</div>
</div>

{/* Pressure Consistency Explanation */}
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-2xl font-bold text-gray-900 mb-4">
🎯 Precision That Never Wavers
</h3>
<p className="text-lg text-gray-700 mb-6">
Imagine a heartbeat that never skips, never varies, never fails. That's our 
pressure control. Your tools get exactly the power they need, when they need it, 
every single time.
</p>
<div className="space-y-3">
<div className="flex items-center">
<div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
<span className="text-gray-700">Consistent tool performance</span>
</div>
<div className="flex items-center">
<div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
<span className="text-gray-700">No pressure drops during peak demand</span>
</div>
<div className="flex items-center">
<div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
<span className="text-gray-700">Automated quality control systems</span>
</div>
</div>
</div>
<div>
<AirFlowVisualizer type="pressure" />
</div>
</div>
</div>

{/* Benefits Summary */}
<div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white mt-16">
<div className="text-center max-w-4xl mx-auto">
<h3 className="text-2xl md:text-3xl font-bold mb-6">
The Result? Your Business Transforms
</h3>
<p className="text-xl text-blue-100 mb-8">
When air flows perfectly, pressure stays constant, and energy gets optimized, 
something magical happens – your entire operation becomes more efficient, profitable, and reliable.
</p>
<div className="grid md:grid-cols-4 gap-6">
<div className="text-center">
<div className="text-3xl mb-2">📈</div>
<div className="font-semibold">Increased Production</div>
<div className="text-blue-200 text-sm">Up to 30% improvement</div>
</div>
<div className="text-center">
<div className="text-3xl mb-2">💰</div>
<div className="font-semibold">Lower Operating Costs</div>
<div className="text-blue-200 text-sm">40% energy savings</div>
</div>
<div className="text-center">
<div className="text-3xl mb-2">🔧</div>
<div className="font-semibold">Reduced Maintenance</div>
<div className="text-blue-200 text-sm">Fewer breakdowns</div>
</div>
<div className="text-center">
<div className="text-3xl mb-2">😌</div>
<div className="font-semibold">Peace of Mind</div>
<div className="text-blue-200 text-sm">24/7 reliability</div>
</div>
</div>
</div>
</div>
</div>
</section>
)
}

function AboutSection(){
return (
<section className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50">
<div className="container mx-auto px-4">
{/* Visual About Header */}
<div className="text-center max-w-4xl mx-auto mb-16">
<div className="relative">
<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
Beyond <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Engineering</span>
</h2>
{/* Animated Background Text */}
<div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
<div className="text-8xl font-bold text-gray-300 animate-pulse">PRECISION</div>
</div>
</div>
<p className="text-xl text-gray-600 leading-relaxed">
We don't just manufacture compressors. We engineer the invisible force that powers dreams, 
builds futures, and transforms raw ambition into industrial reality.
</p>
</div>

{/* Visual Story Grid */}
<div className="grid lg:grid-cols-3 gap-8 mb-16">
{/* Heritage Visual */}
<div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden">
<div className="relative z-10">
<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 relative">
<span className="text-2xl font-bold text-white">25</span>
{/* Pulsing rings */}
<div className="absolute inset-0 bg-orange-400 rounded-2xl animate-ping opacity-30"></div>
</div>
<h3 className="text-2xl font-bold text-gray-900 mb-4">Industrial Heritage</h3>
<p className="text-gray-600 leading-relaxed mb-6">
Quarter-century of turning factory floors into symphonies of productivity. 
Every bolt, every seal carries the wisdom of thousands of installations.
</p>
<div className="space-y-3">
<div className="flex items-center">
<div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
<span className="text-gray-700 text-sm">Legacy of Excellence</span>
</div>
<div className="flex items-center">
<div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse" style={{animationDelay: '0.2s'}}></div>
<span className="text-gray-700 text-sm">Proven Track Record</span>
</div>
</div>
</div>
{/* Animated Background Pattern */}
<div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
<div className="w-full h-full bg-gradient-to-tl from-orange-300 to-red-300 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
</div>
</div>

{/* Innovation Visual */}
<div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden">
<div className="relative z-10">
<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 relative">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
</svg>
{/* Electric effect */}
<div className="absolute inset-0 bg-blue-400 rounded-2xl animate-pulse opacity-40"></div>
</div>
<h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation Engine</h3>
<p className="text-gray-600 leading-relaxed mb-6">
Where traditional engineering meets tomorrow's possibilities. 
Every compressor is a leap forward, every installation a step into the future.
</p>
<div className="space-y-3">
<div className="flex items-center">
<div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-bounce"></div>
<span className="text-gray-700 text-sm">Future-Ready Technology</span>
</div>
<div className="flex items-center">
<div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-bounce" style={{animationDelay: '0.3s'}}></div>
<span className="text-gray-700 text-sm">Continuous Innovation</span>
</div>
</div>
</div>
{/* Animated Background Pattern */}
<div className="absolute top-0 left-0 w-20 h-20 opacity-10">
<div className="w-full h-full bg-gradient-to-br from-blue-300 to-purple-300 rounded-full animate-ping"></div>
</div>
</div>

{/* Partnership Visual */}
<div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden">
<div className="relative z-10">
<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 relative">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
</svg>
{/* Community pulse */}
<div className="absolute inset-0 bg-green-400 rounded-2xl animate-pulse opacity-30"></div>
</div>
<h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership Philosophy</h3>
<p className="text-gray-600 leading-relaxed mb-6">
We don't sell equipment; we build relationships. 
Every client becomes part of our extended family of industrial innovators.
</p>
<div className="space-y-3">
<div className="flex items-center">
<div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
<span className="text-gray-700 text-sm">Lifetime Partnership</span>
</div>
<div className="flex items-center">
<div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse" style={{animationDelay: '0.4s'}}></div>
<span className="text-gray-700 text-sm">Shared Success</span>
</div>
</div>
</div>
{/* Animated Background Pattern */}
<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 opacity-10">
<div className="w-full h-full bg-gradient-to-tr from-green-300 to-emerald-300 rounded-full animate-bounce"></div>
</div>
</div>
</div>

{/* Vision Statement with Motion Graphics */}
<div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
{/* Animated Industrial Background */}
<div className="absolute inset-0 opacity-20">
<svg width="100%" height="100%" viewBox="0 0 800 400">
{/* Moving gears */}
{[1, 2, 3].map(i => (
<g key={i} className="animate-spin" style={{transformOrigin: `${100 + i * 200}px 200px`, animationDuration: `${10 + i * 5}s`}}>
<circle cx={100 + i * 200} cy="200" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
{[...Array(8)].map((_, j) => (
<line 
key={j}
x1={100 + i * 200} 
y1="200" 
x2={100 + i * 200 + Math.cos(j * Math.PI / 4) * 25} 
y2={200 + Math.sin(j * Math.PI / 4) * 25} 
stroke="currentColor" 
strokeWidth="1"
/>
))}
</g>
))}

{/* Flowing lines */}
<path 
d="M 0 100 Q 200 50 400 100 T 800 100" 
fill="none" 
stroke="currentColor" 
strokeWidth="1" 
className="animate-pulse"
/>
<path 
d="M 0 300 Q 200 250 400 300 T 800 300" 
fill="none" 
stroke="currentColor" 
strokeWidth="1" 
className="animate-pulse" 
style={{animationDelay: '0.5s'}}
/>
</svg>
</div>

<div className="relative z-10 text-center max-w-4xl mx-auto">
<h3 className="text-3xl md:text-4xl font-bold mb-8">
Powering India's Industrial Revolution
</h3>
<p className="text-xl text-gray-300 mb-8 leading-relaxed">
From the bustling textile mills of Gujarat to the automotive giants of Chennai, 
from the food processing hubs of Punjab to the pharmaceutical centers of Hyderabad – 
CompAir compressors are the silent heroes powering India's growth story.
</p>

{/* Animated Impact Metrics */}
<div className="grid md:grid-cols-4 gap-6">
{[
{ metric: "5000+", label: "Industries Transformed", icon: "🏭", delay: "0s" },
{ metric: "₹500CR+", label: "Production Value Enabled", icon: "💰", delay: "0.2s" },
{ metric: "25", label: "States Covered", icon: "🗺️", delay: "0.4s" },
{ metric: "99.9%", label: "Customer Retention", icon: "🤝", delay: "0.6s" }
].map((item, i) => (
<div 
key={i} 
className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-500"
style={{animationDelay: item.delay}}
>
<div className="text-3xl mb-3">{item.icon}</div>
<div className="text-2xl font-bold mb-2">{item.metric}</div>
<div className="text-sm text-gray-300">{item.label}</div>
</div>
))}
</div>
</div>
</div>
</div>
</section>
)
}

function InteractiveDemosSection(){
return (
<section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
<div className="container mx-auto px-4">
{/* Section Header */}
<div className="text-center mb-16">
<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
<span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
Interactive Experience
</div>
<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
Experience the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Power</span> Yourself
</h2>
<p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
Don't just read about efficiency - play with real settings and see instant results. 
Discover how small adjustments can lead to massive savings.
</p>
</div>

{/* Interactive Demo */}
<div className="mb-20">
<InteractivePressureDemo />
</div>

{/* Configurator Section */}
<div className="text-center mb-12">
<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Build Your Perfect Setup
</h3>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
Tell us about your needs and get a custom compressor recommendation with precise cost calculations
</p>
</div>

<div className="mb-16">
<CompressorConfigurator />
</div>

{/* Trust Indicators */}
<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
<div className="grid md:grid-cols-4 gap-8 text-center">
<div className="space-y-3">
<div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
<svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</div>
<div className="text-2xl font-bold text-green-600">98%</div>
<div className="text-sm text-gray-600 font-medium">Accuracy Rate</div>
</div>

<div className="space-y-3">
<div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
<svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</div>
<div className="text-2xl font-bold text-blue-600">5 mins</div>
<div className="text-sm text-gray-600 font-medium">Quick Quote</div>
</div>

<div className="space-y-3">
<div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
<svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
</svg>
</div>
<div className="text-2xl font-bold text-purple-600">₹2L+</div>
<div className="text-sm text-gray-600 font-medium">Avg. Savings</div>
</div>

<div className="space-y-3">
<div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto">
<svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
</div>
<div className="text-2xl font-bold text-orange-600">5000+</div>
<div className="text-sm text-gray-600 font-medium">Happy Customers</div>
</div>
</div>

{/* Call-to-Action */}
<div className="text-center mt-12">
<div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer group">
<span>Ready to Get Started?</span>
<svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg>
</div>
<p className="text-gray-600 text-sm mt-3">
Free consultation • No obligation • Expert advice
</p>
</div>
</div>
</div>
</section>
)
}

function ProductFamilies(){
return (
<section className="py-16">
<div className="container mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold mb-6">L45-L132 V4 Series Compressors</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
  Fixed & Variable Speed Rotary Screw Compressors designed for reliable operation 
  with pressure range 5-13 bar, delivering exceptional performance and efficiency.
</p>
</div>

<div className="grid lg:grid-cols-3 gap-8 mb-16">
{/* L45-L75 Series */}
<div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
<div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-600 overflow-hidden">
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-white text-center">
<div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
<span className="text-2xl font-bold">L45</span>
</div>
<span className="text-sm font-medium opacity-90">Compact Series</span>
</div>
</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-bold mb-4 text-gray-900">L45-L75 Series</h3>
<p className="text-gray-600 mb-6 leading-relaxed">Compact and efficient compressors ideal for small to medium industrial applications.</p>
<div className="space-y-3 mb-6">
<div className="flex items-center text-sm text-gray-700">
<div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
<span>Pressure: 5-13 bar</span>
</div>
<div className="flex items-center text-sm text-gray-700">
<div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
<span>Energy efficient design</span>
</div>
<div className="flex items-center text-sm text-gray-700">
<div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
<span>Low maintenance</span>
</div>
<div className="flex items-center text-sm text-gray-700">
<div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
<span>Compact footprint</span>
</div>
</div>
<Link href="/products" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
  View Models 
  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</Link>
</div>
</div>

{/* L90-L110 Series */}
<div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
<div className="relative h-48 bg-gradient-to-br from-indigo-500 to-indigo-600 overflow-hidden">
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-white text-center">
<div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
<span className="text-2xl font-bold">L90</span>
</div>
<span className="text-sm font-medium opacity-90">Medium Series</span>
</div>
</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-bold mb-4 text-gray-900">L90-L110 Series</h3>
<p className="text-gray-600 mb-6 leading-relaxed">Medium capacity compressors for demanding industrial environments.</p>
<div className="space-y-3 mb-6">
<div className="flex items-center text-sm text-gray-700">
<div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
<span>Variable speed technology</span>
</div>
<div className="flex items-center text-sm text-gray-700">
<div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
<span>Advanced control systems</span>
</div>
<div className="flex items-center text-sm text-gray-700">
<div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
<span>High efficiency motors</span>
</div>
<div className="flex items-center text-sm text-gray-700">
<div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
<span>Robust construction</span>
</div>
</div>
<Link href="/products" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group">
  View Models 
  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</Link>
</div>
</div>

{/* L132 Series */}
<div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
<div className="relative h-48 bg-gradient-to-br from-purple-500 to-purple-600 overflow-hidden">
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-white text-center">
<div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
<span className="text-2xl font-bold">L132</span>
</div>
<span className="text-sm font-medium opacity-90">High Capacity</span>
</div>
</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-bold mb-4 text-gray-900">L132 Series</h3>
<p className="text-gray-600 mb-6 leading-relaxed">High-capacity compressors for large-scale industrial operations.</p>
<div className="space-y-3 mb-6">
<div className="flex items-center text-sm text-gray-700">
<div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
<span>Maximum efficiency</span>
</div>
<div className="flex items-center text-sm text-gray-700">
<div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
<span>Industry 4.0 ready</span>
</div>
<div className="flex items-center text-sm text-gray-700">
<div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
<span>Remote monitoring</span>
</div>
<div className="flex items-center text-sm text-gray-700">
<div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
<span>Extended warranty</span>
</div>
</div>
<Link href="/products" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group">
  View Models 
  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</Link>
</div>
</div>
</div>

{/* Call to Action Banner */}
<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center">
<h3 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Compressor?</h3>
<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
Get personalized recommendations from our experts and find the ideal compressed air solution for your business.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
  Get Expert Consultation
</Link>
<Link href="/products" className="px-8 py-4 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
  Browse All Products
</Link>
</div>
</div>
</div>
</section>
)
}

function ContactSection(){
return (
<section id="contact" className="py-16 bg-blue-900 text-white">
<div className="container mx-auto px-4">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
<p className="text-xl mb-12">
  Ready to discuss your compressed air requirements? Our experts are here to help.
</p>
<div className="grid md:grid-cols-3 gap-8 mb-12">
  <div className="text-center">
    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl">📞</span>
    </div>
    <h3 className="font-semibold mb-2">Call Us</h3>
    <p className="text-blue-100">+91-XXXX-XXXXXX</p>
  </div>
  <div className="text-center">
    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl">✉️</span>
    </div>
    <h3 className="font-semibold mb-2">Email Us</h3>
    <p className="text-blue-100">info@compair.in</p>
  </div>
  <div className="text-center">
    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl">💬</span>
    </div>
    <h3 className="font-semibold mb-2">WhatsApp</h3>
    <p className="text-blue-100">Quick Support</p>
  </div>
</div>
<div className="flex flex-col sm:flex-row justify-center gap-4">
  <Link href="/contact" className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
    Get Quotation
  </Link>
  <Link href="/about" className="px-8 py-4 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
    Learn More
  </Link>
</div>
</div>
</div>
</section>
)
}

export default function Home(){
return (
<div>
<Hero />
<CompanyShowcase />
<CustomerStories />
<VisualExplanations />
<AboutSection />
<InteractiveDemosSection />
<ProductFamilies />

<section className="py-20 bg-white">
<div className="container mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold mb-6 text-gray-900">Featured Products</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
Discover our most popular compressor models, trusted by industries across India for their reliability, efficiency, and performance.
</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 mb-12">
{products.slice(0,3).map(p=> <ProductCard key={p.id} p={p} />)}
</div>
<div className="text-center">
<Link href="/products" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group">
  View All Products
  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</Link>
</div>
</div>
</section>

<ContactSection />

{/* Certifications and Partners Section */}
<section className="py-16 bg-gray-50">
<div className="container mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold mb-4">Certifications & Partners</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
  Trusted by industry leaders and certified by international standards
</p>
</div>

{/* Certifications Row */}
<div className="mb-12">
<h3 className="text-xl font-semibold text-center mb-8 text-gray-800">Our Certifications</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center group">
<div className="text-center">
<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-colors">
<span className="text-green-600 font-bold text-lg">ISO</span>
</div>
<p className="text-sm font-medium text-gray-700">ISO 9001:2015</p>
<p className="text-xs text-gray-500">Quality Management</p>
</div>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center group">
<div className="text-center">
<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
<span className="text-blue-600 font-bold text-lg">CE</span>
</div>
<p className="text-sm font-medium text-gray-700">CE Certified</p>
<p className="text-xs text-gray-500">European Conformity</p>
</div>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center group">
<div className="text-center">
<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-200 transition-colors">
<span className="text-orange-600 font-bold text-sm">BIS</span>
</div>
<p className="text-sm font-medium text-gray-700">BIS Approved</p>
<p className="text-xs text-gray-500">Bureau of Indian Standards</p>
</div>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center group">
<div className="text-center">
<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-200 transition-colors">
<span className="text-red-600 font-bold text-sm">MSME</span>
</div>
<p className="text-sm font-medium text-gray-700">MSME Registered</p>
<p className="text-xs text-gray-500">Government Recognized</p>
</div>
</div>
</div>
</div>

{/* Partners Row */}
<div>
<h3 className="text-xl font-semibold text-center mb-8 text-gray-800">Our Partners</h3>
<div className="grid grid-cols-2 md:grid-cols-5 gap-6">
{/* Partner placeholders with company names */}
{['Atlas Copco', 'Ingersoll Rand', 'Kaeser', 'Sullair', 'Quincy'].map((partner, index) => (
<div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group hover:scale-105">
<div className="text-center">
<div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-100 transition-colors">
<span className="text-gray-600 group-hover:text-blue-600 font-bold text-xs">{partner.charAt(0)}</span>
</div>
<p className="text-sm font-medium text-gray-700">{partner}</p>
</div>
</div>
))}
</div>
</div>
</div>
</section>
</div>
)
}