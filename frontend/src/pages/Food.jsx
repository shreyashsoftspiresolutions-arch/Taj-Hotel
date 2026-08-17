import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaUtensils,
  FaStar,
  FaWineGlassAlt,
  FaClock,
  FaUsers,
  FaSearch,
  FaExpand,
  FaTimes,
  FaCheck,
  FaCalendarAlt,
  FaCrown,
  FaHeart,
  FaGlassCheers,
  FaConciergeBell,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Food.css";

const fallbackFoodItems = [
  {
    id: 1,
    name: "Royal Truffle Filet Mignon",
    food_name: "Royal Truffle Filet Mignon",
    category: "Main Course",
    price: "$68",
    rating: "4.9",
    tag: "Chef's Special",
    dietary: "Gluten-Free",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1000",
    description: "Pan-seared A5 Wagyu beef tenderloin with black truffle reduction, wild mushroom ragù, and dauphinoise potatoes.",
    pairing: "2018 Bordeaux Grand Cru",
    ingredients: ["A5 Wagyu Beef", "Black Winter Truffle", "Wild Mushrooms", "Demiglace", "Yukon Gold Potatoes"]
  },
  {
    id: 2,
    name: "Saffron Imperial Biryani",
    food_name: "Saffron Imperial Biryani",
    category: "Main Course",
    price: "$52",
    rating: "5.0",
    tag: "Signature Dish",
    dietary: "Royal Heritage",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1000",
    description: "Aromatic aged basmati rice layered with tender slow-cooked lamb, Kashmiri saffron, edible gold leaf, and toasted pine nuts.",
    pairing: "Vintage Syrah",
    ingredients: ["Kashmiri Saffron", "Aged Basmati Rice", "Tender Lamb Shank", "Edible 24k Gold Leaf", "Cardamom & Cloves"]
  },
  {
    id: 3,
    name: "Pan-Seared Chilean Sea Bass",
    food_name: "Pan-Seared Chilean Sea Bass",
    category: "Main Course",
    price: "$58",
    rating: "4.92",
    tag: "Fresh Catch",
    dietary: "Pescatarian",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1000",
    description: "Sustainably caught sea bass over lemongrass beurre blanc, baby bok choy, and ginger-infused jasmine rice cake.",
    pairing: "Chablis Premier Cru",
    ingredients: ["Chilean Sea Bass", "Lemongrass", "French Butter", "Baby Bok Choy", "Ginger Jasmine Rice"]
  },
  {
    id: 4,
    name: "Artisanal Burrata & Heirloom Salad",
    food_name: "Artisanal Burrata & Heirloom Salad",
    category: "Starters",
    price: "$28",
    rating: "4.85",
    tag: "Organic",
    dietary: "Vegetarian",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6928e08d?w=1000",
    description: "Fresh Pugliese burrata cheese, heirloom tomatoes, aged balsamic reduction, pine nut pesto, and crisp crostini.",
    pairing: "Pinot Grigio Alto Adige",
    ingredients: ["Fresh Burrata", "Organic Heirloom Tomatoes", "25-Year Aged Balsamic", "Basil Pesto", "Pine Nuts"]
  },
  {
    id: 5,
    name: "24K Gold Crown Chocolate Sphere",
    food_name: "24K Gold Crown Chocolate Sphere",
    category: "Desserts",
    price: "$34",
    rating: "4.98",
    tag: "Grand Dessert",
    dietary: "Vegetarian",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=1000",
    description: "Valrhona dark chocolate shell melted at table with hot salted caramel, hazelnut praline crunch, and Madagascar vanilla bean gelée.",
    pairing: "Taylor Fladgate 20-Year Tawny Port",
    ingredients: ["70% Valrhona Dark Chocolate", "Salted Caramel", "Piedmont Hazelnut", "Edible Gold Leaf"]
  },
  {
    id: 6,
    name: "Taj Royal Smoked Old Fashioned",
    food_name: "Taj Royal Smoked Old Fashioned",
    category: "Beverages",
    price: "$26",
    rating: "4.9",
    tag: "Mixologist Craft",
    dietary: "Signature Cocktail",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1000",
    description: "Single barrel bourbon infused with hickory smoke, organic raw honey, aromatic orange bitters, served over crystal clear ice sphere.",
    pairing: "Complementary Artisanal Nuts",
    ingredients: ["Single Barrel Bourbon", "Hickory Wood Smoke", "Orange Bitters", "Raw Mountain Honey"]
  }
];

const diningVenues = [
  {
    id: "saffron",
    name: "The Saffron Fine Dining",
    cuisine: "Royal Indian Specialty",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
    hours: "12:00 PM – 11:30 PM",
    ambiance: "Regal Elegance & Live Sitár Music",
    capacity: "80 Seats",
    description: "An homage to royal Awadhi and Mughlai culinary heritage. Experience slow-cooked dum recipes served in silver hollowware."
  },
  {
    id: "bistro",
    name: "L'Étoile French Bistro",
    cuisine: "Contemporary European & Pastry",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1200",
    hours: "07:00 AM – 10:30 PM",
    ambiance: "Parisian Chic & Sunlit Atrium",
    capacity: "60 Seats",
    description: "Featuring artisanal French viennoiseries by morning and Michelin-star inspired bistro classics for lunch and dinner."
  },
  {
    id: "rooftop",
    name: "Skyline Rooftop Bar & Lounge",
    cuisine: "Pan-Asian Tapas & Cocktails",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=1200",
    hours: "05:00 PM – 02:00 AM",
    ambiance: "Panoramic Skyline Views & Live DJ",
    capacity: "120 Outdoor Seats",
    description: "Perched high above the city skyline, offering artisanal craft cocktails, sushi, and open-air sunset views."
  },
  {
    id: "tea",
    name: "The Royal Tea Room",
    cuisine: "High Tea & Global Brews",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=1200",
    hours: "02:00 PM – 07:00 PM",
    ambiance: "Crystal Chandeliers & Piano Melodies",
    capacity: "45 Seats",
    description: "Indulge in traditional British high tea service paired with rare first-flush Darjeeling teas and warm scones."
  }
];

const normalizeFoodItem = (item) => {
  if (!item) return fallbackFoodItems[0];
  const name = item.food_name || item.name || "Artisanal Gourmet Specialty";
  const rawPrice = item.price !== undefined && item.price !== null ? String(item.price).trim() : "$28";
  const price = rawPrice.startsWith("$") ? rawPrice : `$${rawPrice}`;
  const category = item.category || "Signature Dish";
  const description =
    item.description ||
    `Pan-crafted ${name} prepared by our master culinary chefs with organic herbs and house-made sauces.`;
  const rating = item.rating || "4.9";
  const tag = item.tag || item.category || "Chef's Choice";
  const dietary = item.dietary || "Fresh & Organic";
  const pairing = item.pairing || "Sommelier Selected Reserve Wine";
  const ingredients =
    item.ingredients && Array.isArray(item.ingredients) && item.ingredients.length > 0
      ? item.ingredients
      : ["Fresh Organic Herbs", "House Spices", "Extra Virgin Olive Oil", "Farm Produce"];

  return {
    ...item,
    name,
    food_name: name,
    price,
    category,
    description,
    rating,
    tag,
    dietary,
    pairing,
    ingredients,
  };
};

export default function Food() {
  const [foodMenu, setFoodMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDish, setSelectedDish] = useState(null);
  const [activeVenue, setActiveVenue] = useState(diningVenues[0]);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/food");
        if (response.data && response.data.length > 0) {
          setFoodMenu(response.data.map(normalizeFoodItem));
        } else {
          setFoodMenu(fallbackFoodItems.map(normalizeFoodItem));
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching food menu, loading fallback culinary menu:", error);
        setFoodMenu(fallbackFoodItems.map(normalizeFoodItem));
        setLoading(false);
      }
    };
    fetchFood();
  }, []);

  const resolveImageUrl = (foodItem) => {
    if (!foodItem || !foodItem.image) {
      return "https://images.unsplash.com/photo-1544025162-d76694265947?w=1000";
    }
    if (foodItem.image.startsWith("http://") || foodItem.image.startsWith("https://")) {
      return foodItem.image;
    }
    return `http://localhost:5000/uploads/${foodItem.image}`;
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://images.unsplash.com/photo-1544025162-d76694265947?w=1000";
  };

  const categories = [
    { key: "all", label: "Full Culinary Menu" },
    { key: "starters", label: "Starters & Appetizers" },
    { key: "main course", label: "Main Course" },
    { key: "chef's specials", label: "Chef's Specials" },
    { key: "desserts", label: "Artisanal Desserts" },
    { key: "beverages", label: "Cocktails & Wines" },
  ];

  const filteredMenu = foodMenu.filter((item) => {
    const matchesCat =
      activeCategory === "all" ||
      (item.category && item.category.toLowerCase().includes(activeCategory.toLowerCase())) ||
      (item.tag && item.tag.toLowerCase().includes(activeCategory.toLowerCase()));

    const matchesSearch =
      !searchQuery ||
      item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  const handleReserveSubmit = (e) => {
    e.preventDefault();
    setReservationSuccess(true);
    setTimeout(() => {
      setReservationSuccess(false);
      setShowReservationModal(false);
    }, 2000);
  };

  const heroDish = normalizeFoodItem(foodMenu[0] || fallbackFoodItems[0]);

  return (
    <>
      <Navbar />

      {/* Hero Culinary Section */}
      <section className="food-hero">
        <div className="food-overlay">
          <div className="food-hero-content">
            <span className="hero-kicker">
              <FaCrown /> Michelin Guide Recommended Fine Dining
            </span>
            <h1>Gourmet Culinary Artistry</h1>
            <p>
              Savor exquisite gastronomic creations crafted with passion, rare global spices, and farm-to-table organic ingredients.
            </p>
            <div className="food-hero-actions">
              <a href="#menu-section" className="order-btn">Explore Menu</a>
              <button className="reserve-table-btn" onClick={() => setShowReservationModal(true)}>
                <FaCalendarAlt /> Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Menu Section */}
      <section className="food-section" id="menu-section">
        <div className="section-title">
          <h2>The Signature Menu</h2>
          <p>
            Curated dishes designed by our Master Chefs to tantalize every palate.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="food-filter-bar">
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

          <div className="food-search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Featured Hero Dish Card */}
        {activeCategory === "all" && (
          <div className="hero-dish-card" onClick={() => setSelectedDish(heroDish)}>
            <div className="hero-dish-img-wrap">
              <img
                src={resolveImageUrl(heroDish)}
                alt={heroDish.name}
                onError={handleImageError}
              />
              <span className="hero-dish-badge">
                <FaCrown /> Chef's Masterpiece
              </span>
              <div className="hero-dish-price">
                {heroDish.price}
              </div>
            </div>

            <div className="hero-dish-content">
              <span className="dish-category">{heroDish.category}</span>
              <h3>{heroDish.name}</h3>
              <div className="dish-rating">
                <FaStar className="star-gold" /> {heroDish.rating} (Guest Choice)
              </div>
              <p>{heroDish.description}</p>

              <div className="dish-meta">
                <span><FaWineGlassAlt /> Recommended Pairing: {heroDish.pairing}</span>
              </div>

              <div className="hero-dish-actions">
                <button className="order-btn">Order This Dish</button>
                <button className="quick-view-btn">
                  <FaExpand /> Dish Details
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Food Dishes Grid */}
        <div className="food-grid">
          {filteredMenu.map((rawItem) => {
            const item = normalizeFoodItem(rawItem);
            const imageUrl = resolveImageUrl(item);
            return (
              <div className="food-card" key={item.id}>
                {/* Image Aspect-Ratio Container */}
                <div className="food-image-wrap" onClick={() => setSelectedDish(item)}>
                  <img src={imageUrl} alt={item.name} onError={handleImageError} />

                  <div className="food-badges">
                    <span className="food-tag">{item.tag}</span>
                    {item.dietary && <span className="dietary-badge">{item.dietary}</span>}
                  </div>

                  <div className="image-hover-overlay">
                    <button className="quick-view-circle">
                      <FaExpand />
                    </button>
                  </div>
                </div>

                <div className="food-content">
                  <div className="food-card-header">
                    <span className="food-category-sub">{item.category}</span>
                    <span className="dish-rating-small"><FaStar /> {item.rating}</span>
                  </div>

                  <h3>{item.name}</h3>

                  <p className="food-desc">{item.description}</p>

                  <div className="food-footer">
                    <div className="food-price-wrap">
                      <span className="price-sub">Price</span>
                      <h2 className="food-price">{item.price}</h2>
                    </div>

                    <div className="food-card-actions">
                      <button className="quick-view-icon-btn" onClick={() => setSelectedDish(item)} title="View Details">
                        <FaExpand />
                      </button>
                      <button className="order-btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredMenu.length === 0 && (
          <div className="no-food-found">
            <h3>No culinary dishes found</h3>
            <p>Try selecting a different menu category or clearing search terms.</p>
            <button className="order-btn" onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}>
              Reset Menu Filter
            </button>
          </div>
        )}
      </section>

      {/* Dining Ambiance & Venues Gallery Section */}
      <section className="dining-venues-section">
        <div className="venues-container">
          <div className="section-title text-white">
            <span className="kicker-gold">Exclusive Hotel Dining Spaces</span>
            <h2>Atmosphere & Culinary Venues</h2>
            <p>
              Four distinctive venues, each offering a unique culinary narrative and ambiance.
            </p>
          </div>

          <div className="venues-selector-tabs">
            {diningVenues.map((venue) => (
              <button
                key={venue.id}
                className={`venue-tab ${activeVenue.id === venue.id ? "active" : ""}`}
                onClick={() => setActiveVenue(venue)}
              >
                {venue.name}
              </button>
            ))}
          </div>

          <div className="venue-display-card">
            <div className="venue-img-wrap">
              <img src={activeVenue.image} alt={activeVenue.name} onError={handleImageError} />
              <div className="venue-badge-pill">
                <FaUtensils /> {activeVenue.cuisine}
              </div>
            </div>

            <div className="venue-info-wrap">
              <span className="venue-kicker">Signature Restaurant</span>
              <h3>{activeVenue.name}</h3>
              <p className="venue-desc">{activeVenue.description}</p>

              <div className="venue-specs">
                <div className="venue-spec">
                  <FaClock />
                  <div>
                    <span>Hours</span>
                    <strong>{activeVenue.hours}</strong>
                  </div>
                </div>
                <div className="venue-spec">
                  <FaUsers />
                  <div>
                    <span>Capacity</span>
                    <strong>{activeVenue.capacity}</strong>
                  </div>
                </div>
                <div className="venue-spec">
                  <FaGlassCheers />
                  <div>
                    <span>Atmosphere</span>
                    <strong>{activeVenue.ambiance}</strong>
                  </div>
                </div>
              </div>

              <button className="order-btn" onClick={() => setShowReservationModal(true)}>
                Book Table at {activeVenue.name}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Master Chef Section */}
      <section className="chef-section">
        <div className="chef-grid">
          <div className="chef-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1000"
              alt="Executive Chef"
              onError={handleImageError}
            />
            <div className="chef-badge">
              <FaCrown /> Chef Jean-Luc & Team
            </div>
          </div>

          <div className="chef-content">
            <span className="chef-kicker">Culinary Leadership</span>
            <h2>Prepared by World-Renowned Master Chefs</h2>

            <p>
              "Cooking is an act of love and memory. At Taj Palace, every ingredient is selected at peak freshness, 
              honoring ancestral techniques while embracing avant-garde gastronomy."
            </p>

            <div className="chef-highlights">
              <div className="chef-feat"><FaCheck /> Michelin 3-Star Culinary Heritage</div>
              <div className="chef-feat"><FaCheck /> 100% Organic Local Organic Sourcing</div>
              <div className="chef-feat"><FaCheck /> Custom Tasting & Wine Pairings</div>
            </div>

            <button className="order-btn" onClick={() => setShowReservationModal(true)}>
              Reserve Chef's Table
            </button>
          </div>
        </div>
      </section>

      {/* Dish Lightbox Modal */}
      {selectedDish && (() => {
        const dish = normalizeFoodItem(selectedDish);
        return (
          <div className="dish-lightbox-overlay" onClick={() => setSelectedDish(null)}>
            <div className="dish-lightbox-modal" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close-btn" onClick={() => setSelectedDish(null)}>
                <FaTimes />
              </button>

              <div className="dish-lightbox-grid">
                <div className="dish-lightbox-img-side">
                  <img src={resolveImageUrl(dish)} alt={dish.name} onError={handleImageError} />
                  <span className="lightbox-tag-overlay">{dish.tag}</span>
                </div>

                <div className="dish-lightbox-info">
                  <span className="lightbox-category">{dish.category}</span>
                  <h2>{dish.name}</h2>

                  <div className="dish-price-large">{dish.price}</div>

                  <p className="dish-full-desc">{dish.description}</p>

                  {dish.ingredients && (
                    <div className="ingredients-box">
                      <h4>Key Ingredients</h4>
                      <div className="ingredients-pills">
                        {dish.ingredients.map((ing, i) => (
                          <span key={i}>{ing}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {dish.pairing && (
                    <div className="pairing-box">
                      <FaWineGlassAlt className="wine-icon" />
                      <div>
                        <span>Master Sommelier Pairing</span>
                        <strong>{dish.pairing}</strong>
                      </div>
                    </div>
                  )}

                  <div className="modal-actions-row">
                    <button className="order-btn full-width">Place Order</button>
                    <button className="reserve-table-btn full-width" onClick={() => { setSelectedDish(null); setShowReservationModal(true); }}>
                      Reserve Table
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Table Reservation Modal */}
      {showReservationModal && (
        <div className="dish-lightbox-overlay" onClick={() => setShowReservationModal(false)}>
          <div className="reservation-modal" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setShowReservationModal(false)}>
              <FaTimes />
            </button>

            <h3>Reserve Your Dining Table</h3>
            <p>Experience grand dining at Taj Palace. Select your date and dining preference.</p>

            {reservationSuccess ? (
              <div className="reservation-success">
                <FaCheck className="success-icon" />
                <h4>Table Reserved Successfully!</h4>
                <p>Our concierge will contact you shortly with your confirmation code.</p>
              </div>
            ) : (
              <form onSubmit={handleReserveSubmit} className="reservation-form">
                <div className="form-group">
                  <label>Select Restaurant Venue</label>
                  <select required defaultValue={activeVenue.name}>
                    {diningVenues.map((v) => (
                      <option key={v.id} value={v.name}>{v.name} ({v.cuisine})</option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Guest Count</label>
                    <select required defaultValue="2 Guests">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>4 Guests</option>
                      <option>6 Guests</option>
                      <option>8+ Guests (VIP Room)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Date</label>
                    <input type="date" required defaultValue={new Date().toISOString().split("T")[0]} />
                  </div>
                </div>

                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your full name" required />
                </div>

                <div className="form-group">
                  <label>Special Requests / Dietary Notes</label>
                  <textarea placeholder="e.g. Anniversary celebration, vegetarian menu..."></textarea>
                </div>

                <button type="submit" className="order-btn full-width">
                  Confirm Table Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
