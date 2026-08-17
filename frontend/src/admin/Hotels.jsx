import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./Dashboard.css";

export default function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const [editId, setEditId] = useState(null);

  const fetchHotels = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/hotels");
      setHotels(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const handleSubmit = async () => {
    if (!name || !location || !price || !rating) {
      alert("Please fill all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("price", price);
    formData.append("rating", rating);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/hotels/${editId}`, formData);
      } else {
        await axios.post("http://localhost:5000/api/hotels", formData);
      }

      fetchHotels();
      setEditId(null);
      setName("");
      setLocation("");
      setPrice("");
      setRating("");
      setImageFile(null);
    } catch (err) {
      console.error(err);
      alert("Error saving hotel");
    }
  };

  const editHotel = (hotel) => {
    setEditId(hotel.id);
    setName(hotel.name || "");
    setLocation(hotel.location || "");
    setPrice(hotel.price || "");
    setRating(hotel.rating || "");
    setImageFile(null);
  };

  const deleteHotel = async (id) => {
    if (!window.confirm("Are you sure you want to delete this hotel?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/hotels/${id}`);
      fetchHotels();
    } catch (err) {
      console.error(err);
      alert("Error deleting hotel");
    }
  };

  const filteredHotels = hotels.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(search.toLowerCase()) ||
      hotel.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Topbar title="Hotel Management" subtitle="Add, edit and manage your hotel properties" />

        <div className="table-section">
          <h2>All Hotels</h2>
          <p className="page-subtitle">
            Manage your hotel portfolio — add new properties, update details and pricing.
          </p>

          <div className="form-grid">
            <input
              type="text"
              placeholder="Hotel Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <input
              type="number"
              placeholder="Price per Night"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              type="number"
              placeholder="Rating (1-5)"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />

            <input 
            className="file_upload"
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
<br />
            <button onClick={handleSubmit}>
              {editId ? "Update Hotel" : "Add Hotel"}
            </button>
          </div>

          <br />

          <input
            type="text"
            placeholder="Search Hotel..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <br />
          <br />

          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Hotel Name</th>
                <th>Location</th>
                <th>Price</th>
                <th>Rating</th>
                <th width="180">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredHotels.length === 0 ? (
                <tr>
                  <td colSpan="6" align="center">No Hotels Found</td>
                </tr>
              ) : (
                filteredHotels.map((hotel) => (
                  <tr key={hotel.id}>
                    <td>
                      {hotel.image ? (
                        <img src={`http://localhost:5000/uploads/${hotel.image}`} alt={hotel.name} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }} />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td>{hotel.name}</td>
                    <td>{hotel.location}</td>
                    <td>${hotel.price}</td>
                    <td>⭐ {hotel.rating}</td>

                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => editHotel(hotel)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => deleteHotel(hotel.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}