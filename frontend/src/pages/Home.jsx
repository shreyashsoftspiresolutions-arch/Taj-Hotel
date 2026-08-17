import { Link } from "react-router-dom";
import {
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaCrown,
  FaAward,
  FaUsers,
  FaBed,
  FaCheck,
  FaTrophy,
  FaMedal,
  FaGem,
  FaLandmark,
  FaUtensils,
  FaSpa,
  FaSwimmingPool,
  FaGlassCheers,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";
import "./Home.css";

import room1 from "../assets/images/room1.jpg";
import room2 from "../assets/images/room2.jpg";
import room3 from "../assets/images/room3.jpg";
import hotel from "../assets/images/hotel.jpg";
import food1 from "../assets/images/food1.jpg";
import food3 from "../assets/images/food3.jpg";

const featuredRooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: "$250",
    image: room1,
    desc: "Elegant interiors with breathtaking city views and modern amenities.",
  },
  {
    id: 2,
    name: "Executive Suite",
    price: "$450",
    image: room2,
    desc: "Spacious luxury with a private lounge and premium services.",
  },
  {
    id: 3,
    name: "Royal Suite",
    price: "$750",
    image: room3,
    desc: "World-class luxury with elegant décor and personalized hospitality.",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Business Traveler",
    text: "An absolutely magnificent experience. The attention to detail, the warmth of the staff, and the sheer elegance of the rooms made my stay unforgettable.",
    rating: 5,
  },
  {
    name: "James Anderson",
    role: "Tourist, UK",
    text: "Taj Palace redefines luxury. From the moment we arrived, everything was perfect — the food, the spa, the rooms. Truly world-class hospitality.",
    rating: 5,
  },
  {
    name: "Meera Patel",
    role: "Wedding Guest",
    text: "We hosted our wedding here and it was magical. The team went above and beyond to make every moment special. Highly recommended!",
    rating: 5,
  },
];

const stats = [
  { icon: <FaCrown />, number: "75+", label: "Years of Legacy" },
  { icon: <FaBed />, number: "350+", label: "Luxury Rooms" },
  { icon: <FaAward />, number: "50+", label: "Awards Won" },
  { icon: <FaUsers />, number: "1M+", label: "Happy Guests" },
];

const highlights = [
  "350+ lavish rooms and suites with panoramic views",
  "Nine award-winning restaurants and bars",
  "Holistic spa, hammam rituals & wellness therapies",
  "Iconic ballrooms and premier event venues",
  "Dedicated airport transfers & 24/7 concierge",
];

const experiences = [
  {
    icon: <FaUtensils />,
    title: "Gourmet Fine Dining",
    desc: "Savor cuisine crafted by award-winning chefs, from authentic Indian flavors to world-class international gastronomy.",
    image: food1,
    link: "/food",
  },
  {
    icon: <FaSpa />,
    title: "Royal Spa Retreat",
    desc: "Unwind in our tranquil sanctuary with bespoke therapies, hammam rituals, and holistic restorative treatments.",
    image: room1,
    link: "/about",
  },
  {
    icon: <FaSwimmingPool />,
    title: "Rooftop Infinity Pool",
    desc: "Swim above the Mumbai skyline and recharge at our 24/7 state-of-the-art fitness and wellness studio.",
    image: hotel,
    link: "/rooms",
  },
  {
    icon: <FaGlassCheers />,
    title: "Celebrations & Events",
    desc: "Host unforgettable weddings, galas, and conferences in our iconic venues designed for pure grandeur.",
    image: food3,
    link: "/contact",
  },
];

const awards = [
  { icon: <FaTrophy />, title: "Forbes Travel Guide", sub: "Five-Star Award" },
  { icon: <FaMedal />, title: "AAA Diamond", sub: "Five-Diamond Rating" },
  { icon: <FaStar />, title: "TripAdvisor", sub: "Travelers' Choice 2025" },
  { icon: <FaAward />, title: "World Travel Awards", sub: "Leading City Hotel" },
  { icon: <FaGem />, title: "Michelin Guide", sub: "Recommended Restaurants" },
  { icon: <FaLandmark />, title: "Heritage Icon", sub: "Enduring Mumbai Landmark" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* ---- Welcome / Legacy ---- */}
      <section className="welcome-section">
        <div className="welcome-container">

          <div className="welcome-image anim-fade-left">
            <img src={hotel} alt="Taj Palace Hotel" />
            <div className="welcome-badge">
              <FaCrown />
              <div className="welcome-badge-text">
                <h3>Est. 1951</h3>
                <span>Seven Decades of Legacy</span>
              </div>
            </div>
          </div>

          <div className="welcome-content anim-fade-right">
            <div className="section-accent" style={{ margin: "0 0 20px" }}></div>
            <span className="welcome-kicker">Welcome to Taj Palace Hotel</span>
            <h2>A Timeless Icon of Luxury & Hospitality</h2>
            <p className="welcome-lead">
              Since 1951, Taj Palace has stood as Mumbai&apos;s crown jewel — a place where
              heritage meets modern opulence, and every detail is crafted with devotion.
            </p>
            <p>
              From handcrafted suites with sweeping skyline views to world-renowned
              dining and legendary service, we have been the address of choice for
              royalty, dignitaries, and discerning travelers from around the globe.
            </p>

            <ul className="welcome-list">
              {highlights.map((item, i) => (
                <li key={i}><FaCheck /> {item}</li>
              ))}
            </ul>

            <div className="welcome-actions">
              <Link to="/about" className="btn">Discover Our Story</Link>
              <Link to="/rooms" className="btn btn-outline">Explore Rooms</Link>
            </div>
          </div>

        </div>
      </section>

      {/* ---- Services ---- */}
      <ServiceCard />

      {/* ---- Featured Rooms ---- */}
      <section className="featured-rooms">
        <div className="featured-container">

          <div className="section-accent"></div>
          <h2 className="section-title">Featured Rooms & Suites</h2>
          <p className="section-subtitle">
            Discover our most coveted accommodations, each designed for the
            ultimate in luxury and comfort
          </p>

          <div className="featured-grid">
            {featuredRooms.map((room, index) => (
              <div
                className="featured-card anim-fade-up"
                key={room.id}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="featured-img-wrap">
                  <img src={room.image} alt={room.name} />
                  <div className="featured-price">{room.price}<span>/night</span></div>
                </div>
                <div className="featured-info">
                  <h3>{room.name}</h3>
                  <p>{room.desc}</p>
                  <Link to={`/room/${room.id}`} className="featured-link">
                    View Details <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="featured-cta">
            <Link to="/rooms" className="btn">
              Explore All Rooms
            </Link>
          </div>

        </div>
      </section>

      {/* ---- Signature Experiences ---- */}
      <section className="experiences-section">
        <div className="experiences-container">

          <div className="section-accent"></div>
          <h2 className="section-title">Signature Experiences</h2>
          <p className="section-subtitle">
            Curated moments that transform a simple stay into an extraordinary journey
          </p>

          <div className="experiences-grid">
            {experiences.map((exp, index) => (
              <Link
                to={exp.link}
                className="experience-card anim-fade-up"
                key={index}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="experience-img-wrap">
                  <img src={exp.image} alt={exp.title} />
                  <div className="experience-icon">
                    {exp.icon}
                  </div>
                </div>
                <div className="experience-info">
                  <h3>{exp.title}</h3>
                  <p>{exp.desc}</p>
                  <span className="experience-link">Discover More <FaArrowRight /></span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ---- Stats Section ---- */}
      <section className="stats-section">
        <div className="stats-overlay">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-item anim-fade-up" key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Testimonials ---- */}
      <section className="testimonials-section">
        <div className="testimonials-container">

          <div className="section-accent"></div>
          <h2 className="section-title">What Our Guests Say</h2>
          <p className="section-subtitle">
            Real stories from guests who experienced the magic of Taj Palace Hotel
          </p>

          <div className="testimonials-grid">
            {testimonials.map((item, index) => (
              <div
                className="testimonial-card anim-fade-up"
                key={index}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{item.text}</p>
                <div className="testimonial-stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="testimonial-author">
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---- Awards & Recognition ---- */}
      <section className="awards-section">
        <div className="awards-container">

          <span className="awards-kicker">Awards & Recognition</span>
          <h2 className="awards-title">A Record of Excellence</h2>

          <div className="awards-grid">
            {awards.map((item, index) => (
              <div
                className="award-item anim-fade-up"
                key={index}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="award-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <span>{item.sub}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---- CTA Banner ---- */}
      <section className="cta-section">
        <div className="cta-overlay">
          <div className="cta-content anim-fade-up">
            <h2>Ready for an Unforgettable Experience?</h2>
            <p>
              Book your stay today and discover why Taj Palace Hotel has been
              the choice of royalty, celebrities, and discerning travelers for over 75 years.
            </p>
            <div className="cta-buttons">
              <Link to="/rooms" className="btn">Book Your Stay</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}