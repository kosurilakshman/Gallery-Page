import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './Components/Herosection/HeroSection';
import CarouselSection from './Components/CarouselSection/CarouselSection';
import GridGallerySection from './Components/GridGallerySection/GridGallerySection';
import DescriptionSection from './Components/DescriptionSection/DescriptionSection';
import Gallery from './Components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

const MomentsGallery = () => (
  <div className="moments-container">
    <Navbar/>
    <HeroSection />
    <CarouselSection />
    <GridGallerySection />
    <DescriptionSection />
    <Gallery />
    <Footer/>
  </div>
);

export default MomentsGallery;
