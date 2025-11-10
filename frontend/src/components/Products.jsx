import React, { useState } from 'react';
import { Zap, Gauge, Wind, Volume2, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { products } from '../mockData';

export const Products = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Fixed Speed', 'Regulated Speed'];

  const filteredProducts = filter === 'All'
    ? products
    : products.filter(product => product.category === filter);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            L-Series Rotary Screw Compressors
          </h2>
          <p className="text-xl text-gray-600">
            Premium efficiency, German engineering, and industry-leading warranty. 
            Discover our range of fixed and regulated speed compressors.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? 'default' : 'outline'}
              className={filter === category
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'border-gray-300 text-gray-700 hover:bg-blue-50'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {product.name}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className={product.category === 'Regulated Speed'
                      ? 'bg-green-100 text-green-700 border-green-200'
                      : 'bg-blue-100 text-blue-700 border-blue-200'
                    }
                  >
                    {product.category}
                  </Badge>
                </div>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Specifications */}
                <div className="grid grid-cols-2 gap-4 py-4 border-t border-b">
                  <div className="flex items-center space-x-2">
                    <Zap className="text-blue-600" size={20} />
                    <div>
                      <p className="text-xs text-gray-500">Power</p>
                      <p className="text-sm font-semibold text-gray-900">{product.power}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Gauge className="text-blue-600" size={20} />
                    <div>
                      <p className="text-xs text-gray-500">Pressure</p>
                      <p className="text-sm font-semibold text-gray-900">{product.pressure}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wind className="text-blue-600" size={20} />
                    <div>
                      <p className="text-xs text-gray-500">Flow</p>
                      <p className="text-sm font-semibold text-gray-900">{product.flow}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Volume2 className="text-blue-600" size={20} />
                    <div>
                      <p className="text-xs text-gray-500">Noise</p>
                      <p className="text-sm font-semibold text-gray-900">{product.noise}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700">Key Features:</p>
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle2 className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4 group-hover:shadow-lg transition-all"
                >
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Choosing the Right Compressor?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our expert team can help you select the perfect compressor for your specific application and air demand requirements.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
          >
            Contact Our Experts
          </Button>
        </div>
      </div>
    </section>
  );
};
