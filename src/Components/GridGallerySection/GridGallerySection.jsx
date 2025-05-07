import React from 'react';
import './GridGallerySection.css';
import image1 from '../../assets/image1.png';
import gallery1 from '../../assets/Gallery/gallery1.webp';
import gallery2 from '../../assets/Gallery/gallery2.webp';
import gallery3 from '../../assets/Gallery/gallery3.webp';
import gallery4 from '../../assets/Gallery/gallery4.webp';
import gallery5 from '../../assets/Gallery/gallery5.webp';
import gallery6 from '../../assets/Gallery/gallery6.webp';
import gallery7 from '../../assets/Gallery/gallery7.webp';
import gallery8 from '../../assets/Gallery/gallery8.webp';
import gallery9 from '../../assets/Gallery/gallery9.webp';
import gallery10 from '../../assets/Gallery/gallery10.webp';
import gallery11 from '../../assets/Gallery/gallery11.webp';




const MomentsGallery = () => {
  return (
  <section className="gallery-grid-section">
       <div className="header-img-wrapper">
           <img src={image1} alt="service-heading" className="header-img" loading="lazy" />
        </div>
        <div className="gallery-grid">
           <img src={gallery1} alt="Gallery 1" className="gallery-img img1" loading="lazy"/>
           <img src={gallery2} alt="Gallery 2" className="gallery-img img2" loading="lazy"/>
           <img src= {gallery3}alt="Gallery 3" className="gallery-img img3" loading="lazy"/>
           <img src={gallery4} alt="Gallery 4" className="gallery-img img4" loading="lazy"/>
           <img src= {gallery5} alt="Gallery 5" className="gallery-img img5" loading="lazy"/>
           <img src= {gallery6}alt="Gallery 6" className="gallery-img img6" loading="lazy"/>
           <img src= {gallery7}alt="Gallery 7" className="gallery-img img7" loading="lazy"/>
           <img src= {gallery8}alt="Gallery 8" className="gallery-img img8" loading="lazy"/>
           <img src= {gallery9}alt="Gallery 9" className="gallery-img img9" loading="lazy"/>
           <img src={gallery10}alt="Gallery 10" className="gallery-img img10" loading="lazy"/>
           <img src={gallery11} alt="Gallery 11" className="gallery-img img11" loading="lazy"/>
        </div>
      </section>
  )
}

export default MomentsGallery;