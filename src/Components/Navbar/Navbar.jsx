import React from 'react';
import "./Navbar.css";
import image_1 from '../../assets/Navbar/img1.png'
import image_2 from '../../assets/Navbar/img2.png'
import image_3 from '../../assets/Navbar/img3.png'
import image_4 from '../../assets/Navbar/img4.png'
import image_5 from '../../assets/Navbar/img5.png'
import image_6 from '../../assets/Navbar/img6.png'
import image_7 from '../../assets/Navbar/img7.png'
import image_8 from '../../assets/Navbar/img8.png'
import image_9 from '../../assets/Navbar/img9.png'


const navbar = () => {
    return (
        <>
        <nav>
            <div className="navbar-box1">
                <img src={image_1} alt="navbar-image1" loading="lazy" className='navbar-image' />
                <img src={image_2} alt="navbar-image2"loading="lazy"   className='navbar-image'  />
                <img src={image_3} alt="navbar-image3"  loading="lazy"  className='navbar-image'  />
                <img src={image_4} alt="navbar-image4"  loading="lazy"  className='navbar-image'  />
                <img src={image_5} alt="navbar-image5"  loading="lazy"   className='navbar-image' />
                <img src={image_6} alt="navbar-image6" loading="lazy"    className='navbar-image' />
                <img src={image_7} alt="navbar-image7"  loading="lazy"   className='navbar-image' />
                <img src={image_8} alt="navbar-image8" loading="lazy"  className='navbar-image' />
                <img src={image_9} alt="navbar-image9" loading="lazy"  className='navbar-image' />

            </div>
            <div className="navbar-box2">      
            <marquee className="navbar-heading">
  One World, One Religion, One Language, One Currency, One Ruling ← ← ← ←
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  One World, One Religion, One Language, One Currency, One Ruling ← ← ← ←
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  One World, One Religion, One Language, One Currency, One Ruling ← ← ← ←
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  One World, One Religion, One Language, One Currency, One Ruling ← ← ← ←
</marquee>

                
            </div>
            <div className="navbar-box3">
                <a href="" >Home</a>
                <a href="" >Temples</a>
                <a href="" >Our Story</a>
                <a href="" >Sevas</a>
                <a href="" >Blogs</a>
                <a href="" >Gallery</a>
                <a href="" >Donations</a>
 

            </div>
        </nav>
            
        </>
    );
};

export default navbar;