import React from 'react';
import './MomentsGallery.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import img1 from '../../assets/img1.webp'
import img2 from '../../assets/img2.webp'
import img3 from '../../assets/img3.webp'
import img from '../../assets/img-highlight.webp';
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
    <div className="moments-container">
      <section className="intro-section">
  <div className="intro-content">
  <h2>Moments of Divinity</h2>
    <div className="intro-text">
      <p>
        This is a collection of pictures from Gayatri Teertham Sri Ramakrishna Shanti Ashramam.
        You'll see the peaceful beauty of our temples, the caring work we do (sevas), and the joyful celebration events
        that show what's important to us as a community.
      </p>
      <div class="button-container">
        <button class="primary-btn">Explore Our Gallery</button>
     </div>
    </div>
  </div>
</section>


      <section className="carousel-section">
       <div className="header-img-wrapper">
           <img src={image1} alt="service-heading" className="header-img" loading="lazy"/>
        </div>
        <div className="carousel-images">
        <img src={img1} alt="Moment 1" class="hero-img-1" loading="lazy"/>
        <img src={img2} alt="Moment 2" class="hero-img-2" loading="lazy"/>
        <img src={img3} alt="Moment 3" class="hero-img-3" loading="lazy"/>

        </div>
      </section>

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


      <section className="description-section">
      <div className="header-img-wrapper">
           <img src={image1} alt="service-heading" className="header-img" loading="lazy"/>
      </div>
  <div className="description-section-content">
    <img src={img} alt="Highlight" className='image'loading="lazy"/>
    <p>
      The Sri Rukmini Satyabhama Gopika Sahitha Sri Krishna Mandiram. Motivated by timeless heritage and the call for spiritual balance, this temple of the future will be a beacon of faith and a haven for hearts from all over the world. Your gift, a seed of kindness, will bring life to this holy home, its peaceful presence adorning the landscape, touching innumerable hearts for generations to come.
    </p>
  </div>
</section>

      <section className="footer-gallery">
      <div className="header-img-wrapper">
           <img src={image2} alt="service-heading" className="header-img"loading="lazy" />
        </div>
        <div className="gallery-years">
          {['2022', '2023', '2024', '2025'].map(year => (
            <div className="year-tab" key={year}>
              <i className="fa fa-folder" /> Gallery of {year}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MomentsGallery;
