import React from 'react';
import image2 from '../../assets/image2.png';
import './Gallery.css';


const FooterGallery = () => (
  <section className="footer-gallery">
    <div className="header-img-wrapper">
      <img src={image2} alt="service-heading" className="header-img" loading="lazy" />
    </div>
    <div className="gallery-years">
      {['2022', '2023', '2024', '2025'].map(year => (
        <div className="year-tab" key={year}>
          <i className="fa fa-folder" /> Gallery of {year}
        </div>
      ))}
    </div>
  </section>
);

export default FooterGallery;
