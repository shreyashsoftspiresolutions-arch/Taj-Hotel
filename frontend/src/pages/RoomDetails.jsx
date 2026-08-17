import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./RoomDetails.css";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200",
    price: "$250 / Night",
    size: "450 sq.ft",
    guests: "2 Guests",
    bed: "King Size Bed",
    wifi: "Free High-Speed WiFi",
    breakfast: "Complimentary Breakfast",
    description:
      "Experience luxury and comfort in our Deluxe Room with elegant interiors, modern amenities, and breathtaking city views.",
  },
  {
    id: 2,
    name: "Executive Suite",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
    price: "$450 / Night",
    size: "650 sq.ft",
    guests: "4 Guests",
    bed: "King Size Bed",
    wifi: "Free High-Speed WiFi",
    breakfast: "Complimentary Breakfast",
    description:
      "Enjoy spacious interiors, a private lounge, and premium services in our Executive Suite.",
  },
  {
    id: 3,
    name: "Royal Suite",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
    price: "$750 / Night",
    size: "900 sq.ft",
    guests: "4 Guests",
    bed: "King Size Bed",
    wifi: "Free High-Speed WiFi",
    breakfast: "Luxury Breakfast Included",
    description:
      "The Royal Suite offers world-class luxury, elegant décor, and personalized hospitality.",
  },
  {
    id: 4,
    name: "Presidential Suite",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
    price: "$1200 / Night",
    size: "1500 sq.ft",
    guests: "6 Guests",
    bed: "Luxury King Bed",
    wifi: "Unlimited Premium WiFi",
    breakfast: "Royal Breakfast",
    description:
      "The most luxurious suite in our hotel featuring a private lounge, jacuzzi, and exclusive VIP services.",
  },
];

export default function RoomDetails() {
  const { id } = useParams();

  const room = rooms.find((item) => item.id === Number(id));

  if (!room) {
    return (
      <>
        <Navbar />

        <div
          style={{
            padding: "120px 20px",
            textAlign: "center",
          }}
        >
          <h1>Room Not Found</h1>

          <Link to="/rooms">
            Back to Rooms
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="room-details">

        <div className="room-image">

          <img
            src={room.image}
            alt={room.name}
          />

        </div>

        <div className="room-info">

          <h1>{room.name}</h1>

          <div className="stars">
            ★★★★★
          </div>

          <h2>{room.price}</h2>

          <p>{room.description}</p>

          <div className="info-grid">

            <div className="info-card">
              <h3>Room Size</h3>
              <p>{room.size}</p>
            </div>

            <div className="info-card">
              <h3>Guests</h3>
              <p>{room.guests}</p>
            </div>

            <div className="info-card">
              <h3>Bed</h3>
              <p>{room.bed}</p>
            </div>

            <div className="info-card">
              <h3>Internet</h3>
              <p>{room.wifi}</p>
            </div>

            <div className="info-card">
              <h3>Breakfast</h3>
              <p>{room.breakfast}</p>
            </div>

          </div>

          <div className="buttons">

            <button className="book-btn">
              Book This Room
            </button>

            <Link
              to="/rooms"
              className="back-btn"
            >
              Back to Rooms
            </Link>

          </div>

        </div>

      </section>

      <section className="room-features">

        <h2>Luxury Amenities</h2>

        <div className="feature-grid">

          <div className="feature-card">🏊 Swimming Pool</div>

          <div className="feature-card">🍽 Fine Dining</div>

          <div className="feature-card">💆 Luxury Spa</div>

          <div className="feature-card">🏋 Fitness Center</div>

          <div className="feature-card">🚗 Free Parking</div>

          <div className="feature-card">📶 High-Speed WiFi</div>

        </div>

      </section>

      <Footer />
    </>
  );
}