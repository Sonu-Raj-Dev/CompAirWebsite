import React from 'react';
import { companyInfo } from '../mockData';

export const Stats = () => {
  const highlights = [
    { value: companyInfo.countries, label: 'Countries' },
    { value: companyInfo.employees, label: 'Employees' },
    { value: companyInfo.customers, label: 'Customers' }
  ];

  return (
    <section className="py-16 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-4xl font-bold text-blue-600 mb-2">{highlight.value}</h3>
              <p className="text-gray-700 font-semibold">{highlight.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
