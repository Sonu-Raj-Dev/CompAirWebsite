import React from 'react';
import { Play, Film } from 'lucide-react';

export const VideoSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Film className="inline-block mb-4" size={48} />
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            See CompAir in Action
          </h2>
          <p className="text-xl text-blue-100">
            Watch how our manufacturing facility and products deliver excellence
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Overview Video */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 h-80 flex flex-col items-center justify-center cursor-pointer hover:from-blue-700 hover:to-blue-900 transition-all duration-300">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Play className="text-white ml-2" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Company Overview</h3>
              <p className="text-blue-100 text-center">
                Discover CompAir's heritage, innovation, and commitment to excellence
              </p>
            </div>
            <div className="mt-4 text-center text-sm text-blue-200">
              Video placeholder - Upload your company video
            </div>
          </div>

          {/* Manufacturing Facility Video */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 h-80 flex flex-col items-center justify-center cursor-pointer hover:from-green-700 hover:to-green-900 transition-all duration-300">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Play className="text-white ml-2" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Manufacturing Excellence</h3>
              <p className="text-green-100 text-center">
                Tour our state-of-the-art facility in Naroda, Gujarat
              </p>
            </div>
            <div className="mt-4 text-center text-sm text-blue-200">
              Video placeholder - Upload your manufacturing facility video
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
          <p className="text-blue-100">
            <strong>Note:</strong> Replace these placeholders with your actual YouTube/Vimeo video embeds or uploaded videos.
            You can embed videos using iframe tags in this section.
          </p>
        </div>
      </div>
    </section>
  );
};
