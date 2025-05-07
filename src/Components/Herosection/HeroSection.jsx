import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
  <section className="intro-section">
    <div className="intro-content">
      <h2>Moments of Divinity</h2>
      <div className="intro-text">
        <p>
        This is a collection of pictures from Gayatri Teertham Sri Ramakrishna Shanti Ashramam.
        You'll see the peaceful beauty of our temples, the caring work we do (sevas), and the joyful celebration events
        that show what's important to us as a community.
        </p>
        <div className="button-container">
          <button className="primary-btn">Explore Our Gallery</button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
