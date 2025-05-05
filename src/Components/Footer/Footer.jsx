import React from "react";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import "./Footer.css";
 
const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer-box">
          <div className="footer-box-1">
            <div className="footer-box1-col">
              <h2 className="footer-heading">Company Links</h2>
              <a href="">Home</a>
              <a href="">About us</a>
              <a href="">Events</a>
              <a href="">Services</a>
              <a href="">Contact us</a>
            </div>
            <div className="footer-box1-col">
              <h2 className="footer-heading">Ashramam</h2>
              <a href="">Ashramam Services</a>
              <a href="">Volunteer / Join us</a>
              <a href="">Donation Page</a>
              <a href="">Faq's</a>
            </div>
            <div className="footer-box1-col">
              <h2 className="footer-heading">Resources</h2>
              <a href="">Blog/Articles</a>
              <a href="">Daily Mantras</a>
              <a href="">Spiritual Quotes</a>
            </div>
            <div className="footer-box-col">
              <h2>Social Media</h2>
              <div className="social-icons">
                <a
                  href="https://wa.me/your-number"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://youtube.com/yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
 
          <div className="footer-box-2">
            <div className="footer-box2-col">
              <div className="footer-box2-col">
                <div className="footer-contact-item">
                  <TbPhoneCall className="footer-icon" />
                  <div>
                    <h3 className="footer-contact-heading">Address</h3>
                    <p className="footer-contact-para">
                      On the banks of the holy Krishna River, Pondugula Village,
                      <br />
                      Amaravathi (M), Palnadu (D), AP - 522436
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-box2-col">
              <div className="footer-contact-item">
                <TbPhoneCall className="footer-icon" />
                <div>
                  <h3 className="footer-contact-heading">Contact</h3>
                  <p className="footer-contact-para">+91-98858 69017</p>
                </div>
              </div>
 
              <div className="footer-contact-item">
                <MdOutlineMailOutline className="footer-icon" />
                <div>
                  <h3 className="footer-contact-heading">Email</h3>
                  <p className="footer-contact-para">gouthamirk59@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        {/* Divider and Copyright */}
        <hr className="footer-divider" />
        <p className="footer-copy">
          © 2025 Viswamatha Gayatri Charitable Trust. All Rights Reserved.
        </p>
      </section>
    </>
  );
};
 
export default Footer;