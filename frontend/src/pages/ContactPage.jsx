import React from 'react';
import { Contact } from '../components/Contact';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { companyInfo } from '../mockData';

const ContactPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions? Our expert team is ready to help you find the perfect compressed air solution.
          </p>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-600" size={32} />
              <div>
                <p className="text-sm text-gray-500">Call Us</p>
                <p className="font-semibold text-gray-900">{companyInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-600" size={32} />
              <div>
                <p className="text-sm text-gray-500">Email Us</p>
                <p className="font-semibold text-gray-900">{companyInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-600" size={32} />
              <div>
                <p className="text-sm text-gray-500">Visit Us</p>
                <p className="font-semibold text-gray-900">Global HQ, UK</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="text-blue-600" size={32} />
              <div>
                <p className="text-sm text-gray-500">Response Time</p>
                <p className="font-semibold text-gray-900">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <Contact />
    </div>
  );
};

export default ContactPage;
