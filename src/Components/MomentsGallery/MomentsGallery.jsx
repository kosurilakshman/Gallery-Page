import React from 'react';
import './MomentsGallery.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';

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
      <button>Explore Our Gallery</button>
    </div>
  </div>
</section>


      <section className="carousel-section">
       <div className="header-img-wrapper">
           <img src={image1} alt="service-heading" className="header-img" />
        </div>
        <div className="carousel-images">
        <img src="src/assets/img1.png" alt="Moment 1" class="hero-img-1" />
        <img src="src/assets/img2.png" alt="Moment 2" class="hero-img-2" />
        <img src="src/assets/img3.png" alt="Moment 3" class="hero-img-3" />

        </div>
      </section>

      <section className="gallery-grid-section">
       <div className="header-img-wrapper">
           <img src={image1} alt="service-heading" className="header-img" />
        </div>
        <div className="gallery-grid">
           <img src="src/assets/Gallery/gallery1.png" alt="Gallery 1" className="gallery-img img1" />
           <img src="src/assets/Gallery/gallery2.png" alt="Gallery 2" className="gallery-img img2" />
           <img src="src/assets/Gallery/gallery3.png" alt="Gallery 3" className="gallery-img img3" />
           <img src="src/assets/Gallery/gallery4.png" alt="Gallery 4" className="gallery-img img4" />
           <img src="src/assets/Gallery/gallery5.png" alt="Gallery 5" className="gallery-img img5" />
           <img src="src/assets/Gallery/gallery6.png" alt="Gallery 6" className="gallery-img img6" />
           <img src="src/assets/Gallery/gallery7.png" alt="Gallery 7" className="gallery-img img7" />
           <img src="src/assets/Gallery/gallery8.png" alt="Gallery 8" className="gallery-img img8" />
           <img src="src/assets/Gallery/gallery9.png" alt="Gallery 9" className="gallery-img img9" />
           <img src="src/assets/Gallery/gallery10.png" alt="Gallery 10" className="gallery-img img10" />
           <img src="src/assets/Gallery/gallery11.png" alt="Gallery 11" className="gallery-img img11" />
        </div>
      </section>


      <section className="description-section">
      <div className="header-img-wrapper">
           <img src={image1} alt="service-heading" className="header-img" />
      </div>
  <div className="description-section-content">
    <img src="src/assets/img-highlight.png" alt="Highlight" />
    <p>
      The Sri Rukmini Satyabhama Gopika Sahitha Sri Krishna Mandiram. Motivated by timeless heritage and the call for spiritual balance, this temple of the future will be a beacon of faith and a haven for hearts from all over the world. Your gift, a seed of kindness, will bring life to this holy home, its peaceful presence adorning the landscape, touching innumerable hearts for generations to come.
    </p>
  </div>
</section>

      <section className="footer-gallery">
      <div className="header-img-wrapper">
           <img src={image2} alt="service-heading" className="header-img" />
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
