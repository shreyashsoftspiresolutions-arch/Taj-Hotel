import "./Hero.css";
import hero from "../assets/images/hero.jpg";

export default function Hero() {

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${hero})`
      }}
    >
      <div className="hero-overlay">

        <div className="hero-content">

          <div className="hero-accent-line"></div>

          <h1 className="hero-title anim-fade-up">
            Experience Luxury
            <span className="hero-title-highlight"> Like Never Before</span>
          </h1>

          <p className="hero-desc anim-fade-up anim-delay-2">
            Discover elegance, comfort, and unforgettable hospitality at Taj Palace Hotel — 
            where every moment becomes an extraordinary memory.
          </p>

          <div className="booking-box anim-fade-up anim-delay-4">

            <div className="booking-field">
              <label>Check In</label>
              <input type="date" />
            </div>

            <div className="booking-field">
              <label>Check Out</label>
              <input type="date" />
            </div>

            <div className="booking-field">
              <label>Guests</label>
              <select>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>
            </div>

            <button className="booking-btn">
              Book Now
            </button>

          </div>

        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>

      </div>
    </section>
  );
}