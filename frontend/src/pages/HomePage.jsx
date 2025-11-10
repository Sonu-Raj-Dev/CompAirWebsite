import React from 'react';
import { Hero } from '../components/Hero';
import { ProductCategories } from '../components/ProductCategories';
import { ManufacturingSection } from '../components/ManufacturingSection';
import { VideoSection } from '../components/VideoSection';
import { Stats } from '../components/Stats';
import { CTA } from '../components/CTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <ProductCategories />
      <ManufacturingSection />
      <VideoSection />
      <CTA />
    </>
  );
};

export default HomePage;
