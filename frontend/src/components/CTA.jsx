import React from 'react';
import { ArrowRight, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

export const CTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const benefits = [
    'Free Consultation & Air Audit',
    'Customized System Design',
    'Installation & Commissioning',
    '5-Year Extended Warranty',
    '24/7 Global Service Support',
    'Energy Efficiency Analysis'
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your Compressed Air System?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join 100,000+ satisfied customers worldwide who trust CompAir for reliable, 
            efficient compressed air solutions.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
            >
              <CheckCircle2 className="text-green-400 flex-shrink-0" size={20} />
              <span className="text-white font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold group shadow-xl"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold backdrop-blur-sm"
            onClick={scrollToContact}
          >
            Schedule Consultation
          </Button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white">
          <div className="flex items-center space-x-3">
            <Phone className="text-blue-200" size={24} />
            <span className="text-lg">+1-800-COMPAIR</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/30"></div>
          <div className="flex items-center space-x-3">
            <Mail className="text-blue-200" size={24} />
            <span className="text-lg">info@compair.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};
