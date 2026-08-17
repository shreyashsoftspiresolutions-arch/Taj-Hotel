import {
  FaCrown,
  FaHandshake,
  FaGem,
  FaHeart,
  FaAward,
  FaBed,
  FaUsers,
  FaStar,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hotel from "../assets/images/hotel.jpg";
import "./About.css";

const values = [
  {
    icon: <FaCrown />,
    title: "Timeless Luxury",
    desc: "Every detail is crafted to deliver an experience of unmatched opulence and sophistication.",
  },
  {
    icon: <FaHandshake />,
    title: "Exceptional Service",
    desc: "Our dedicated team anticipates your every need, ensuring personalized care around the clock.",
  },
  {
    icon: <FaGem />,
    title: "Rich Heritage",
    desc: "Built on decades of tradition, we honor our legacy while embracing modern elegance.",
  },
  {
    icon: <FaHeart />,
    title: "Guest-First Philosophy",
    desc: "Your comfort and happiness are at the heart of everything we do — always and forever.",
  },
];

const stats = [
  { icon: <FaStar />, number: "75+", label: "Years of Legacy" },
  { icon: <FaBed />, number: "350+", label: "Luxury Rooms" },
  { icon: <FaAward />, number: "50+", label: "Awards Won" },
  { icon: <FaUsers />, number: "1M+", label: "Happy Guests" },
];

export default function About() {
  return (
    <>
      <Navbar />

      {/* ---- Hero Banner ---- */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <div className="section-accent"></div>
          <h1 className="anim-fade-up">About Taj Palace</h1>
          <p className="anim-fade-up anim-delay-2">
            A legacy of luxury, a tradition of excellence
          </p>
        </div>
      </section>

      {/* ---- Our Story ---- */}
      <section className="about-story">
        <div className="story-container">

          <div className="story-image anim-fade-left">
            <img src={hotel} alt="Taj Palace Hotel" />
            <div className="story-badge">
              <h3>Est.</h3>
              <h2>1951</h2>
            </div>
          </div>

          <div className="story-content anim-fade-right">
            <div className="section-accent" style={{ margin: "0 0 20px" }}></div>
            <h2>Our Story</h2>
            <p>
              For over seven decades, Taj Palace Hotel has stood as a beacon of
              luxury and hospitality in the heart of Mumbai. What began as a
              vision to create India&apos;s finest hotel has blossomed into an
              iconic landmark that welcomes guests from every corner of the globe.
            </p>
            <p>
              Our commitment to excellence is reflected in every detail — from
              the handcrafted furnishings in our suites to the carefully curated
              menus in our award-winning restaurants. We believe that true luxury
              lies not just in opulent surroundings, but in the warmth of genuine
              hospitality and the creation of memories that last a lifetime.
            </p>
            <p>
              Today, Taj Palace continues to set the standard for luxury
              hospitality, blending timeless elegance with modern sophistication
              to deliver experiences that exceed every expectation.
            </p>
          </div>

        </div>
      </section>

      {/* ---- Our Values ---- */}
      <section className="about-values">
        <div className="values-container">

          <div className="section-accent"></div>
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide every interaction and shape every experience at Taj Palace
          </p>

          <div className="values-grid">
            {values.map((item, index) => (
              <div
                className="value-card anim-fade-up"
                key={index}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="value-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---- Stats Counter ---- */}
      <section className="about-stats">
        <div className="about-stats-overlay">
          <div className="about-stats-grid">
            {stats.map((stat, index) => (
              <div className="about-stat-item anim-fade-up" key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="about-stat-icon">{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Team Teaser ---- */}
      <section className="about-team-teaser">
        <div className="team-teaser-content anim-fade-up">
          <div className="section-accent"></div>
          <h2>Led by Visionaries, Powered by Passion</h2>
          <p>
            Our leadership team brings together decades of experience in luxury
            hospitality, culinary arts, and guest services. Together, they
            uphold the founding vision of Taj Palace — to create a home away
            from home for every guest who walks through our doors.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}