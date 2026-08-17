import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaChevronDown,
  FaPaperPlane,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Our Location",
    detail: "Colaba, Mumbai, Maharashtra, India — 400001",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone Number",
    detail: "+91 9876543210",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Address",
    detail: "info@tajpalacehotel.com",
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    detail: "24/7 — Front Desk Always Open",
  },
];

const faqs = [
  {
    q: "What is the check-in and check-out time?",
    a: "Check-in is at 2:00 PM and check-out is at 12:00 PM. Early check-in and late check-out can be arranged upon request, subject to availability.",
  },
  {
    q: "Do you offer airport pickup service?",
    a: "Yes, we provide complimentary luxury airport transfers for guests staying in our suites. Standard room guests can request pickup for an additional charge.",
  },
  {
    q: "Is there a cancellation policy?",
    a: "Reservations can be cancelled up to 48 hours before check-in for a full refund. Cancellations within 48 hours may incur a one-night charge.",
  },
  {
    q: "Do you have facilities for events and weddings?",
    a: "Absolutely! We have multiple banquet halls and outdoor venues that can accommodate from 50 to 2,000 guests. Our events team will help plan every detail.",
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Navbar />

      {/* ---- Hero Banner ---- */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <div className="section-accent"></div>
          <h1 className="anim-fade-up">Get In Touch</h1>
          <p className="anim-fade-up anim-delay-2">
            We&apos;d love to hear from you. Reach out anytime.
          </p>
        </div>
      </section>

      {/* ---- Contact Info Cards ---- */}
      <section className="contact-info-section">
        <div className="contact-info-grid">
          {contactInfo.map((item, index) => (
            <div
              className="contact-info-card anim-fade-up"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="contact-info-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Form + Map ---- */}
      <section className="contact-main">
        <div className="contact-main-container">

          {/* Form */}
          <div className="contact-form-wrap anim-fade-left">
            <h2>Send Us a Message</h2>
            <p className="form-subtitle">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
              </div>
              <input type="text" placeholder="Subject" required />
              <textarea rows="6" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn">
                <FaPaperPlane style={{ marginRight: "8px" }} />
                Send Message
              </button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="contact-map-wrap anim-fade-right">
            <div className="map-placeholder">
              <iframe
                title="Taj Palace Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.239!2d72.8333!3d18.9220!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzE5LjIiTiA3MsKwNTAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "var(--radius-lg)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* ---- FAQ Section ---- */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="section-accent"></div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Quick answers to common questions about your stay at Taj Palace
          </p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${openFaq === index ? "open" : ""}`}
                key={index}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.q}</span>
                  <FaChevronDown className="faq-chevron" />
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}