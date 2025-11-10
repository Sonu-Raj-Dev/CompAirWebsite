import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../mockData';

export const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const highlights = [
    `${companyInfo.countries} Countries`,
    `${companyInfo.employees} Employees`,
    `${companyInfo.customers} Customers`
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2">
            <CheckCircle2 className="text-blue-400" size={20} />
            <span className="text-blue-300 font-medium">Over 300 Years of Engineering Excellence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {companyInfo.heroTitle}
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            {companyInfo.tagline}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Leading global provider of compressed air solutions, delivering cutting-edge rotary screw compressors and air treatment systems to industries worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              onClick={() => scrollToSection('products')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg group"
            >
              Explore Products
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="border-2 border-blue-400 text-white hover:bg-blue-400/10 px-8 py-6 text-lg backdrop-blur-sm"
            >
              Request Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <p className="text-2xl font-bold text-white">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-blue-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
