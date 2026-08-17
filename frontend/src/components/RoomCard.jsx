import "./RoomCard.css";

export default function RoomCard({ image, title, price }) {
  return (
    <div className="room-card">
      <img src={image} alt={title} />

      <div className="room-content">
        <h3>{title}</h3>

        <p>Luxury Room with premium facilities.</p>

        <h2>${price} / Night</h2>

        <button>Book Now</button>
      </div>
    </div>
  );
}