import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaStar,
  FaBed,
  FaUsers,
  FaExpand,
  FaTimes,
  FaCheck,
  FaWifi,
  FaCoffee,
  FaSwimmingPool,
  FaShieldAlt,
  FaArrowRight,
  FaSearch,
  FaCrown,
  FaChevronLeft,
  FaChevronRight,
  FaEye,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Rooms.css";

const fallbackRooms = [
  {
    id: 1,
    name: "Deluxe Ocean View Room",
    category: "deluxe",
    rating: "4.9",
    price: "$250 / Night",
    guests: "2 Guests",
    size: "450 sq.ft",
    view: "Ocean View",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200"
    ],
    description: "Experience luxury and comfort in our Deluxe Room featuring a king-size bed, marble bathroom, panoramic ocean balcony, and 24/7 butler service.",
    amenities: ["Free High-Speed WiFi", "King Size Bed", "Ocean Balcony", "Complimentary Breakfast", "Mini Bar"]
  },
  {
    id: 2,
    name: "Executive Skyline Suite",
    category: "suite",
    rating: "4.95",
    price: "$450 / Night",
    guests: "4 Guests",
    size: "650 sq.ft",
    view: "City Skyline",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200"
    ],
    description: "Spacious luxury featuring a separate living room, plush king bedroom, private dining nook, and executive lounge access.",
    amenities: ["Executive Lounge Access", "Jacuzzi Tub", "55-inch Smart TV", "Butler Service", "Airport Shuttle"]
  },
  {
    id: 3,
    name: "Royal Heritage Suite",
    category: "suite",
    rating: "5.0",
    price: "$750 / Night",
    guests: "4 Guests",
    size: "900 sq.ft",
    view: "Palace Gardens",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200"
    ],
    description: "The Royal Suite combines traditional heritage grandeur with modern luxury, including handcrafted teak furnishings and private terrace.",
    amenities: ["Private Terrace", "Personal Chef Service", "Chauffeur Service", "Spa Access", "Wine Cellar Access"]
  },
  {
    id: 4,
    name: "Presidential Grand Suite",
    category: "penthouse",
    rating: "5.0",
    price: "$1,200 / Night",
    guests: "6 Guests",
    size: "1,500 sq.ft",
    view: "Panoramic Harbor",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200"
    ],
    description: "Our flagship suite offering uncompromised privacy, direct elevator entrance, full private bar, dining room for 8, and heated plunge pool.",
    amenities: ["Private Plunge Pool", "Private Elevator", "Dining Table for 8", "Dedicated Butler", "Helipad Access"]
  },
  {
    id: 5,
    name: "Garden Sanctuary Villa",
    category: "villa",
    rating: "4.92",
    price: "$850 / Night",
    guests: "4 Guests",
    size: "1,100 sq.ft",
    view: "Tropical Gardens",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200"
    ],
    description: "Nestled in private tropical gardens, this secluded villa features an outdoor shower, private sun lounge deck, and tranquil koi pond views.",
    amenities: ["Private Garden & Deck", "Outdoor Rain Shower", "Daily High Tea", "Sub-Zero Bar", "Private Cabana"]
  },
  {
    id: 6,
    name: "Luxury Twin Bay Room",
    category: "deluxe",
    rating: "4.88",
    price: "$280 / Night",
    guests: "2 Guests",
    size: "480 sq.ft",
    view: "Sea & City View",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200"
    ],
    description: "Ideal for business travel or friends sharing, featuring twin queen beds, workstation, and complimentary premium coffee bar.",
    amenities: ["Twin Queen Beds", "Ergonomic Desk", "Nespresso Machine", "High-Speed WiFi", "Marble Bathroom"]
  }
];

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/rooms");
        if (response.data && response.data.length > 0) {
          setRooms(response.data);
        } else {
          setRooms(fallbackRooms);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rooms from API, using fallback data:", error);
        setRooms(fallbackRooms);
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  const resolveImageUrl = (roomItem) => {
    if (!roomItem || !roomItem.image) {
      return "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200";
    }
    if (roomItem.image.startsWith("http://") || roomItem.image.startsWith("https://")) {
      return roomItem.image;
    }
    return `http://localhost:5000/uploads/${roomItem.image}`;
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200";
  };

  const filteredRooms = rooms.filter((room) => {
    const matchesCategory =
      activeCategory === "all" ||
      (room.category && room.category.toLowerCase() === activeCategory.toLowerCase()) ||
      (room.name && room.name.toLowerCase().includes(activeCategory.toLowerCase()));
    
    const matchesSearch =
      !searchQuery ||
      room.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.description?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const categories = [
    { key: "all", label: "All Accommodations" },
    { key: "deluxe", label: "Deluxe Rooms" },
    { key: "suite", label: "Executive & Royal Suites" },
    { key: "villa", label: "Private Villas" },
    { key: "penthouse", label: "Penthouses" },
  ];

  const openLightbox = (room) => {
    setSelectedRoom(room);
    setActiveImageIndex(0);
  };

  const getGalleryImages = (room) => {
    if (room.gallery && room.gallery.length > 0) return room.gallery;
    return [resolveImageUrl(room)];
  };

  return (
    <>
      <Navbar />

      {/* Hero Banner Section */}
      <section className="rooms-hero">
        <div className="rooms-overlay">
          <div className="rooms-hero-content">
            <span className="hero-badge">
              <FaCrown /> Taj Hotel World Class Collection
            </span>
            <h1>Luxury Rooms & Suites</h1>
            <p>
              Immerse yourself in timeless splendor, panoramic vistas, and bespoke white-glove hospitality.
            </p>
            <div className="hero-pills">
              <span><FaCheck /> 24/7 Butler Service</span>
              <span><FaCheck /> Ocean & Skyline Views</span>
              <span><FaCheck /> Private Balconies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="rooms-section">
        {/* Section Header */}
        <div className="section-title">
          <h2>Accommodations & Living Spaces</h2>
          <p>
            Each room and suite is designed to serve as a private sanctuary of relaxation and quiet luxury.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="rooms-filter-bar">
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`filter-tab ${activeCategory === cat.key ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="rooms-search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by room name or feature..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Spotlight Hero Room Showcase (Presidential Suite Highlight) */}
        {activeCategory === "all" && (
          <div className="presidential-spotlight">
            <div className="spotlight-badge">
              <FaCrown /> Flagship Showcase
            </div>
            <div className="spotlight-grid">
              <div className="spotlight-image-container" onClick={() => openLightbox(rooms[3] || fallbackRooms[3])}>
                <img
                  src={resolveImageUrl(rooms[3] || fallbackRooms[3])}
                  alt="Presidential Suite Showcase"
                  onError={handleImageError}
                />
                <div className="spotlight-image-overlay">
                  <span className="expand-trigger">
                    <FaExpand /> Expand Photo Gallery
                  </span>
                </div>
                <div className="spotlight-price-pill">
                  {(rooms[3] || fallbackRooms[3]).price || "$1,200 / Night"}
                </div>
              </div>

              <div className="spotlight-details">
                <span className="spotlight-kicker">Signature Royal Living</span>
                <h3>{(rooms[3] || fallbackRooms[3]).name || "Presidential Grand Suite"}</h3>
                <div className="spotlight-meta">
                  <span><FaStar className="star-gold" /> 5.0 Rating</span>
                  <span><FaUsers /> Up to 6 Guests</span>
                  <span><FaBed /> 1,500 sq.ft Suite</span>
                </div>
                <p>
                  {(rooms[3] || fallbackRooms[3]).description ||
                    "Our flagship suite offering uncompromised privacy, direct elevator entrance, full private bar, dining room for 8, and private heated plunge pool."}
                </p>

                <div className="spotlight-features-list">
                  <div className="spotlight-feat"><FaCheck /> Private Elevator Access</div>
                  <div className="spotlight-feat"><FaCheck /> Heated Balcony Plunge Pool</div>
                  <div className="spotlight-feat"><FaCheck /> Dedicated 24/7 Butler</div>
                  <div className="spotlight-feat"><FaCheck /> Airport Limousine Transfer</div>
                </div>

                <div className="spotlight-actions">
                  <button className="book-btn" onClick={() => openLightbox(rooms[3] || fallbackRooms[3])}>
                    <FaEye /> Quick View Suite
                  </button>
                  <Link to={`/room/${(rooms[3] || fallbackRooms[3]).id || 4}`} className="details-btn">
                    Full Suite Details <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rooms Grid */}
        <div className="rooms-grid">
          {filteredRooms.map((room) => {
            const imageUrl = resolveImageUrl(room);
            return (
              <div className="room-card" key={room.id}>
                {/* Image Aspect-Ratio Container */}
                <div className="room-image-wrap" onClick={() => openLightbox(room)}>
                  <img src={imageUrl} alt={room.name} onError={handleImageError} />
                  
                  {/* Floating Top Badges */}
                  <div className="room-image-badges">
                    <span className="badge-view">{room.view || "Luxury Suite"}</span>
                    <span className="badge-rating">
                      <FaStar /> {room.rating || "4.9"}
                    </span>
                  </div>

                  {/* Hover Overlay trigger */}
                  <div className="image-hover-overlay">
                    <button className="quick-view-circle" title="Quick View Photo & Gallery">
                      <FaExpand />
                    </button>
                  </div>

                  {/* Bottom Image Gradient Overlay Info */}
                  <div className="image-bottom-gradient">
                    <span className="capacity-tag"><FaUsers /> {room.guests || "2 Guests"}</span>
                    <span className="size-tag">{room.size || "450 sq.ft"}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="room-content">
                  <div className="room-header-row">
                    <h3>{room.name}</h3>
                  </div>

                  <p className="room-desc">{room.description}</p>

                  <div className="room-amenities-pills">
                    <span><FaWifi /> Free WiFi</span>
                    <span><FaBed /> King Bed</span>
                    <span><FaCoffee /> Breakfast</span>
                  </div>

                  <div className="room-card-footer">
                    <div className="price-container">
                      <span className="price-label">Starts at</span>
                      <h2 className="room-price-val">{room.price}</h2>
                    </div>

                    <div className="room-buttons">
                      <button className="quick-btn" onClick={() => openLightbox(room)}>
                        <FaEye />
                      </button>
                      <Link to={`/room/${room.id}`} className="details-btn">
                        Details
                      </Link>
                      <button className="book-btn">Book</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredRooms.length === 0 && (
          <div className="no-rooms-found">
            <h3>No rooms matched your filter</h3>
            <p>Try switching categories or clearing your search criteria.</p>
            <button className="book-btn" onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}>
              Reset Filters
            </button>
          </div>
        )}

        {/* Special Luxury Offer Banner */}
        <div className="offer-box">
          <span className="offer-kicker">Exclusive Package</span>
          <h2>Royal Weekend Experience</h2>
          <p>
            Book 3 consecutive nights in any suite to receive complimentary limousine airport transfers, 
            daily gourmet breakfast, and a \$200 resort spa credit.
          </p>
          <div className="offer-buttons">
            <button className="book-btn">Claim Package</button>
            <Link to="/contact" className="details-btn">Enquire Concierge</Link>
          </div>
        </div>
      </section>

      {/* Lightbox / Quick View Modal */}
      {selectedRoom && (
        <div className="room-lightbox-overlay" onClick={() => setSelectedRoom(null)}>
          <div className="room-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setSelectedRoom(null)}>
              <FaTimes />
            </button>

            <div className="lightbox-grid">
              {/* Main Image & Gallery Strip */}
              <div className="lightbox-gallery-side">
                <div className="lightbox-main-img-wrap">
                  <img
                    src={getGalleryImages(selectedRoom)[activeImageIndex]}
                    alt={selectedRoom.name}
                    onError={handleImageError}
                  />

                  {getGalleryImages(selectedRoom).length > 1 && (
                    <>
                      <button
                        className="gallery-nav-btn prev"
                        onClick={() =>
                          setActiveImageIndex((prev) =>
                            prev === 0 ? getGalleryImages(selectedRoom).length - 1 : prev - 1
                          )
                        }
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        className="gallery-nav-btn next"
                        onClick={() =>
                          setActiveImageIndex((prev) =>
                            prev === getGalleryImages(selectedRoom).length - 1 ? 0 : prev + 1
                          )
                        }
                      >
                        <FaChevronRight />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {getGalleryImages(selectedRoom).length > 1 && (
                  <div className="lightbox-thumbs-strip">
                    {getGalleryImages(selectedRoom).map((img, idx) => (
                      <div
                        key={idx}
                        className={`thumb-box ${activeImageIndex === idx ? "active" : ""}`}
                        onClick={() => setActiveImageIndex(idx)}
                      >
                        <img src={img} alt="Thumbnail" onError={handleImageError} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Room Details Side */}
              <div className="lightbox-info-side">
                <span className="lightbox-category-tag">{selectedRoom.view || "Luxury Room"}</span>
                <h2>{selectedRoom.name}</h2>
                <div className="lightbox-rating">
                  <FaStar className="star-gold" /> {selectedRoom.rating || "4.9"} (Guest Favorite)
                </div>

                <div className="lightbox-price-tag">{selectedRoom.price}</div>

                <p className="lightbox-desc">{selectedRoom.description}</p>

                <div className="lightbox-specs-grid">
                  <div className="spec-card">
                    <span>Capacity</span>
                    <strong>{selectedRoom.guests || "2 Guests"}</strong>
                  </div>
                  <div className="spec-card">
                    <span>Floor Area</span>
                    <strong>{selectedRoom.size || "450 sq.ft"}</strong>
                  </div>
                  <div className="spec-card">
                    <span>View</span>
                    <strong>{selectedRoom.view || "Ocean View"}</strong>
                  </div>
                </div>

                {selectedRoom.amenities && selectedRoom.amenities.length > 0 && (
                  <div className="lightbox-amenities">
                    <h4>Included Luxury Amenities</h4>
                    <ul>
                      {selectedRoom.amenities.map((item, i) => (
                        <li key={i}><FaCheck className="check-gold" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="lightbox-modal-actions">
                  <button className="book-btn full-width">Book This Room Now</button>
                  <Link
                    to={`/room/${selectedRoom.id}`}
                    className="details-btn full-width"
                    onClick={() => setSelectedRoom(null)}
                  >
                    View Page Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}