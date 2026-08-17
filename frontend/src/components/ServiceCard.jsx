import {
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
  FaSpa,
  FaDumbbell,
  FaConciergeBell,
} from "react-icons/fa";
import "./ServiceCard.css";

const services = [
  {
    icon: <FaWifi />,
    title: "Free WiFi",
    desc: "Stay connected with complimentary high-speed wireless internet throughout the hotel.",
  },
  {
    icon: <FaSwimmingPool />,
    title: "Infinity Pool",
    desc: "Relax in our stunning rooftop infinity pool with panoramic city views.",
  },
  {
    icon: <FaSpa />,
    title: "Luxury Spa",
    desc: "Rejuvenate with world-class spa treatments and holistic wellness therapies.",
  },
  {
    icon: <FaUtensils />,
    title: "Fine Dining",
    desc: "Savor gourmet cuisine crafted by award-winning chefs from around the world.",
  },
  {
    icon: <FaDumbbell />,
    title: "Fitness Center",
    desc: "State-of-the-art gym equipment with personal trainers available 24/7.",
  },
  {
    icon: <FaConciergeBell />,
    title: "24/7 Concierge",
    desc: "Personalized assistance for every need — from travel arrangements to special requests.",
  },
];

export default function ServiceCard() {
  return (
    <section className="services-section">
      <div className="services-container">

        <div className="section-accent"></div>
        <h2 className="services-title">Our Premium Services</h2>
        <p className="services-subtitle">
          Experience world-class amenities designed to make your stay truly unforgettable
        </p>

        <div className="service-grid">
          {services.map((item, index) => (
            <div
              className="service-card anim-fade-up"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}