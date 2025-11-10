import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Link } from 'react-router-dom';
import {
  productCategories,
  t30Models,
  oilLubricatedModels,
  oilFreeModels,
  airTreatmentProducts
} from '../mockData';

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Complete Product Portfolio</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive range of compressed air solutions engineered for reliability, efficiency, and performance
          </p>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Card key={category.id} className="border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Products by Category */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="reciprocating" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              <TabsTrigger value="reciprocating">Reciprocating</TabsTrigger>
              <TabsTrigger value="oil-lubricated">Oil Lubricated</TabsTrigger>
              <TabsTrigger value="oil-free">Oil-Free</TabsTrigger>
              <TabsTrigger value="air-treatment">Air Treatment</TabsTrigger>
            </TabsList>

            {/* Reciprocating T30 Models */}
            <TabsContent value="reciprocating">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">CompAir Small Recip T30 Compressor</h2>
                <p className="text-gray-600 mb-8">
                  Durable cast-iron, two-stage design with automatic start/stop control, 175 PSI maximum operating pressure, and 100% continuous duty for tough applications.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Model</th>
                        <th className="px-4 py-3 text-left">RPM</th>
                        <th className="px-4 py-3 text-left">Pressure</th>
                        <th className="px-4 py-3 text-left">Mounting</th>
                        <th className="px-4 py-3 text-left">HP</th>
                        <th className="px-4 py-3 text-left">CFM</th>
                        <th className="px-4 py-3 text-left">Control</th>
                        <th className="px-4 py-3 text-left">Price (INR)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {t30Models.map((model, index) => (
                        <tr key={index} className="border-b hover:bg-blue-50 transition-colors">
                          <td className="px-4 py-3 font-semibold">{model.model}</td>
                          <td className="px-4 py-3">{model.rpm}</td>
                          <td className="px-4 py-3">{model.pressure}</td>
                          <td className="px-4 py-3">{model.mounting}</td>
                          <td className="px-4 py-3">{model.hp}</td>
                          <td className="px-4 py-3">{model.cfm}</td>
                          <td className="px-4 py-3">
                            <Badge variant="secondary">{model.control}</Badge>
                          </td>
                          <td className="px-4 py-3 font-semibold text-green-600">\u20b9{model.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* Oil Lubricated Models */}
            <TabsContent value="oil-lubricated">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Oil Lubricated Rotary - Portfolio</h2>
                <p className="text-gray-600 mb-8">
                  German engineering with premium efficiency airend, range 3-290 kW in 7-13 barg for fixed & regulated speed. Industry-leading warranty with iConn for models above 45 kW.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {oilLubricatedModels.map((model, index) => (
                    <Card key={index} className="border-2 hover:border-blue-500 hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <Badge className="mb-3 bg-blue-600">{model.series}</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{model.models}</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Capacity:</span>
                            <span className="font-semibold">{model.capacity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Power:</span>
                            <span className="font-semibold">{model.power}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Oil-Free Models */}
            <TabsContent value="oil-free">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Oil-Free Rotary Screw Air Compressor</h2>
                <p className="text-gray-600 mb-8">
                  Stainless steel rotors with UltraCoat™ rotor coating for maximum efficiency. 100% oil-free air with full ISO Class 0 certification for critical applications.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {oilFreeModels.map((model, index) => (
                    <Card key={index} className="border-2 hover:border-green-500 hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <Badge className="mb-3 bg-green-600">{model.speed}</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{model.series}</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Flow:</span>
                            <span className="font-semibold text-sm">{model.flow}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Power:</span>
                            <span className="font-semibold">{model.power}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Air Treatment Products */}
            <TabsContent value="air-treatment">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Air Treatment - Product Portfolio</h2>
                <p className="text-gray-600 mb-8">
                  Complete range of air treatment solutions including filters, dryers, receivers, and piping systems to ensure clean, dry compressed air.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {airTreatmentProducts.map((product, index) => (
                    <Card key={index} className="border-2 hover:border-purple-500 hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{product.category}</h3>
                        {product.type && (
                          <p className="text-sm text-gray-600 mb-2"><strong>Type:</strong> {product.type}</p>
                        )}
                        {product.range && (
                          <p className="text-sm text-gray-600 mb-2"><strong>Range:</strong> {product.range}</p>
                        )}
                        {product.capacity && (
                          <p className="text-sm text-gray-600 mb-2"><strong>Capacity:</strong> {product.capacity}</p>
                        )}
                        {product.pressure && (
                          <p className="text-sm text-gray-600 mb-2"><strong>Pressure:</strong> {product.pressure}</p>
                        )}
                        {product.warranty && (
                          <p className="text-sm text-gray-600 mb-2"><strong>Warranty:</strong> {product.warranty}</p>
                        )}
                        {product.features && (
                          <div className="mt-3 space-y-1">
                            {product.features.map((feature, idx) => (
                              <p key={idx} className="text-xs text-gray-500">\u2022 {feature}</p>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help Choosing the Right Product?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our expert team can help you select the perfect compressor and air treatment solution for your specific application.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold">
              Contact Our Experts
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
