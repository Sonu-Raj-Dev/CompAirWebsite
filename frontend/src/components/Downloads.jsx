import React from 'react';
import { FileText, Download, FileCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { downloads } from '../mockData';
import { toast } from 'sonner';

export const Downloads = () => {
  const handleDownload = (download) => {
    // In frontend-only version, just open the URL
    window.open(download.url, '_blank');
    toast.success(`Downloading ${download.title}`);
  };

  return (
    <section id="downloads" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <FileCheck className="text-blue-600" size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Technical Documentation
          </h2>
          <p className="text-xl text-gray-600">
            Download comprehensive product catalogs, technical specifications, and corporate information
          </p>
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloads.map((download) => (
            <Card
              key={download.id}
              className="border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-700 border-blue-200 mb-3"
                    >
                      {download.type}
                    </Badge>
                    <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                      {download.title}
                    </CardTitle>
                  </div>
                  <FileText className="text-blue-600 flex-shrink-0 ml-2" size={32} />
                </div>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {download.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* File Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 py-4 border-t">
                  <span>{download.fileSize}</span>
                  <span>{download.pages}</span>
                </div>

                {/* Download Button */}
                <Button
                  onClick={() => handleDownload(download)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-lg transition-all"
                >
                  <Download className="mr-2" size={18} />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
          <p className="text-gray-700">
            <strong>Need additional documentation?</strong> Contact our team for custom technical specifications, 
            installation guides, or application-specific information.
          </p>
        </div>
      </div>
    </section>
  );
};
