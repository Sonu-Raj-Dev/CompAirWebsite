import React from 'react';
import { Award, Globe, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { companyInfo, timeline } from '../mockData';

export const About = () => {
  const stats = [
    {
      icon: Globe,
      label: 'Global Presence',
      value: companyInfo.countries,
      description: 'Countries worldwide'
    },
    {
      icon: Users,
      label: 'Team Size',
      value: companyInfo.employees,
      description: 'Dedicated professionals'
    },
    {
      icon: Award,
      label: 'Customers',
      value: companyInfo.customers,
      description: 'Trusted worldwide'
    },
    {
      icon: TrendingUp,
      label: 'Founded',
      value: companyInfo.founded,
      description: 'Years of innovation'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About CompAir
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {companyInfo.description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-1">{stat.label}</p>
                  <p className="text-sm text-gray-500">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-300 transform sm:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 sm:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform sm:-translate-x-1/2 z-10 ring-4 ring-white"></div>

                  {/* Content */}
                  <div
                    className={`ml-8 sm:ml-0 sm:w-5/12 ${
                      index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'
                    }`}
                  >
                    <div className="bg-blue-50 rounded-lg p-6 hover:bg-blue-100 transition-colors duration-300">
                      <span className="inline-block text-2xl font-bold text-blue-600 mb-2">
                        {item.year}
                      </span>
                      <p className="text-gray-700 leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-xl leading-relaxed opacity-95">
            To provide the world's most reliable and efficient compressed air solutions, 
            empowering industries to achieve their production goals while minimizing environmental impact 
            through innovation, quality, and exceptional service.
          </p>
        </div>
      </div>
    </section>
  );
};
