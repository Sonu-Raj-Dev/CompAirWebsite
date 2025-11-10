import React from 'react';
import { Building2, Globe2, Users, Award, History, Target } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo, timeline, compairNetwork, brandsAndBusinesses } from '../mockData';

const AboutPage = () => {
  const stats = [
    { icon: Globe2, label: 'Global Presence', value: companyInfo.countries, description: 'Countries worldwide' },
    { icon: Users, label: 'Team Size', value: companyInfo.employees, description: 'Dedicated professionals' },
    { icon: Award, label: 'Customers', value: companyInfo.customers, description: 'Trusted worldwide' },
    { icon: Building2, label: 'Experience', value: `${companyInfo.experience} Years`, description: 'Engineering excellence' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About CompAir</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {companyInfo.description}
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <History className="inline-block text-blue-600 mb-4" size={48} />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From steam engines to smart compressors, our history of innovation spans centuries
            </p>
          </div>

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
                  <div className="absolute left-0 sm:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform sm:-translate-x-1/2 z-10 ring-4 ring-white"></div>

                  <div
                    className={`ml-8 sm:ml-0 sm:w-5/12 ${
                      index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'
                    }`}
                  >
                    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
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
      </section>

      {/* Brands & Businesses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Businesses and Brands</h2>
            <p className="text-xl text-gray-600">
              A comprehensive portfolio of industry-leading brands delivering compressed air excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandsAndBusinesses.map((brand, index) => (
              <Card key={index} className="border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                  <p className="text-sm text-gray-600">{brand.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <Target className="inline-block mb-4" size={48} />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                To provide the world's most reliable and efficient compressed air solutions, 
                empowering industries to achieve their production goals while minimizing environmental impact 
                through innovation, quality, and exceptional service.
              </p>
            </div>
            <div className="text-center md:text-left">
              <Award className="inline-block mb-4" size={48} />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                To be the global leader in compressed air technology, recognized for sustainable innovation, 
                digital transformation, and customer-centric solutions that drive industrial productivity 
                and energy efficiency worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">CompAir Global Network</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            With a presence in over 50 countries, we deliver local service with global expertise
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">{compairNetwork.manufacturing}</h3>
              <p className="text-gray-700 font-semibold">Manufacturing Locations</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">{compairNetwork.distributionCenters}</h3>
              <p className="text-gray-700 font-semibold">Distribution Centers</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">{compairNetwork.orderManagement}</h3>
              <p className="text-gray-700 font-semibold">Order Management Centers</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">{compairNetwork.countries}</h3>
              <p className="text-gray-700 font-semibold">Countries Served</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
