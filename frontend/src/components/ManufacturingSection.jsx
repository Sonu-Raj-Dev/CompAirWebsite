import React from 'react';
import { Factory, Leaf, Award, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { manufacturingFacility } from '../mockData';

export const ManufacturingSection = () => {
  const certifications = [
    { icon: Leaf, label: 'IGBC Green Build', description: 'Certified sustainable facility' },
    { icon: Award, label: 'FM Global Compliant', description: 'International standards' },
    { icon: Zap, label: 'Solar Powered', description: 'Roof-top solar panels' },
    { icon: Factory, label: 'Zero Discharge', description: 'Zero liquid discharge system' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Indian Manufacturing Facility
          </h2>
          <p className="text-xl text-gray-600">
            State-of-the-art manufacturing facility in {manufacturingFacility.location}
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {manufacturingFacility.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={image}
                alt={`Manufacturing facility ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Facility Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">{manufacturingFacility.currentSize}</h3>
              <p className="text-sm font-semibold text-gray-700">Current Size</p>
              <p className="text-xs text-gray-500 mt-1">({manufacturingFacility.currentSizeAcres})</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <h3 className="text-3xl font-bold text-green-600 mb-2">{manufacturingFacility.expandedSize}</h3>
              <p className="text-sm font-semibold text-gray-700">Expanded Size</p>
              <p className="text-xs text-gray-500 mt-1">({manufacturingFacility.expandedSizeAcres})</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">{manufacturingFacility.additionalExpansion}</h3>
              <p className="text-sm font-semibold text-gray-700">New Investment</p>
              <p className="text-xs text-gray-500 mt-1">(15 Acres)</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">{manufacturingFacility.yearShifted}</h3>
              <p className="text-sm font-semibold text-gray-700">Commissioned</p>
              <p className="text-xs text-gray-500 mt-1">Naroda Facility</p>
            </CardContent>
          </Card>
        </div>

        {/* Green Certifications */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Green Certifications & Sustainability</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Icon className="text-green-600" size={32} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{cert.label}</h4>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features List */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Facility Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {manufacturingFacility.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
