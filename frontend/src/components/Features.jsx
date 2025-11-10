import React from 'react';
import { Zap, Shield, Wifi, TrendingDown, Maximize2, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { features } from '../mockData';

const iconMap = {
  Zap,
  Shield,
  Wifi,
  TrendingDown,
  Maximize2,
  Globe
};

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Choose CompAir?
          </h2>
          <p className="text-xl text-gray-600">
            Industry-leading features and innovations that set our compressors apart
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white group"
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-6 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300">
                    <Icon className="text-blue-600 group-hover:text-white transition-colors" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
