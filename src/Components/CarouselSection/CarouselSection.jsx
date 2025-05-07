import React from 'react';
import './CarouselSection.css';
import image1 from '../../assets/image1.png';
import img1 from '../../assets/img1.webp';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.webp';

const CarouselSection = () => (
  <section className="carousel-section">
    <div className="header-img-wrapper">
      <img src={image1} alt="service-heading" className="header-img" loading="lazy" />
    </div>
    <div className="carousel-images">
      <img src={img1} alt="Moment 1" className="hero-img-1" loading="lazy" />
      <img src={img2} alt="Moment 2" className="hero-img-2" loading="lazy" />
      <img src={img3} alt="Moment 3" className="hero-img-3" loading="lazy" />
    </div>
  </section>
);

export default CarouselSection;
