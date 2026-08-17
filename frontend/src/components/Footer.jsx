import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <footer className="footer">

      {/* Gold Top Border */}
      <div className="footer-gold-border"></div>

      <div className="footer-container">

        <div className="footer-box">
          <h2>Taj Palace Hotel</h2>

          <p>
            Experience timeless luxury, world-class hospitality,
            elegant rooms, premium dining, and unforgettable
            memories with Taj Palace Hotel.
          </p>

          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/rooms">Luxury Rooms</a></li>
            <li><a href="/food">Restaurant</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Our Services</h3>

          <ul>
            <li>Luxury Rooms</li>
            <li>Spa & Wellness</li>
            <li>Infinity Swimming Pool</li>
            <li>Fine Dining</li>
            <li>Airport Pickup</li>
            <li>Conference Hall</li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Contact</h3>

          <p><FaMapMarkerAlt /> Mumbai, Maharashtra, India</p>

          <p><FaPhoneAlt /> +91 9876543210</p>

          <p><FaEnvelope /> info@tajpalacehotel.com</p>

          {/* Newsletter */}
          <div className="newsletter">
            <h4>Newsletter</h4>
            <form className="newsletter-form" onSubmit={handleNewsletter}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe">
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Taj Palace Hotel. All Rights Reserved.
      </div>

    </footer>
  );
}