import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./Dashboard.css";

export default function RoomsAdmin() {
  const [rooms, setRooms] = useState([]);
  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [guests, setGuests] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const [editId, setEditId] = useState(null);

  const fetchRooms = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/rooms");
      setRooms(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleSubmit = async () => {
    if (!name || !price || !rating || !guests) {
      alert("Please fill all required fields");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("rating", rating);
    formData.append("guests", guests);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/rooms/${editId}`, formData);
      } else {
        await axios.post("http://localhost:5000/api/rooms", formData);
      }

      fetchRooms();
      setEditId(null);
      setName("");
      setPrice("");
      setRating("");
      setGuests("");
      setImageFile(null);
    } catch (err) {
      console.error(err);
      alert("Error saving room");
    }
  };

  const editRoom = (room) => {
    setEditId(room.id);
    setName(room.name || "");
    setPrice(room.price || "");
    setRating(room.rating || "");
    setGuests(room.guests || "");
    setImageFile(null);
  };

  const deleteRoom = async (id) => {
    if (!window.confirm("Are you sure you want to delete this room?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/rooms/${id}`);
      fetchRooms();
    } catch (err) {
      console.error(err);
      alert("Error deleting room");
    }
  };

  const filteredRooms = rooms.filter(
    (room) =>
      room.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Topbar title="Room Management" subtitle="Manage rooms, pricing and guest capacity" />

        <div className="table-section">
          <h2>All Rooms</h2>
          <p className="page-subtitle">
            Curate your room inventory — set pricing, ratings and guest capacity for every suite.
          </p>

          <div className="form-grid">
            <input
              placeholder="Room Name (e.g. Deluxe Suite)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Price (e.g. $250 / Night)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              placeholder="Rating (e.g. ★★★★★)"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <input
              placeholder="Guests (e.g. 2 Guests)"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />

            <input
            className="file_upload"
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
            />

            <button onClick={handleSubmit}>
              {editId ? "Update Room" : "Add Room"}
            </button>
          </div>

          <br />
          <input
            type="text"
            placeholder="Search Room..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <br /><br />

          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Guests</th>
                <th width="180">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredRooms.map((room) => (
                <tr key={room.id}>
                  <td>
                    {room.image ? (
                      <img src={`http://localhost:5000/uploads/${room.image}`} alt={room.name} style={{ width: "60px", height: "40px", objectFit: "cover", borderRadius: "5px" }} />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td>{room.name}</td>
                  <td>{room.price}</td>
                  <td>{room.rating}</td>
                  <td>{room.guests}</td>

                  <td>
                    <button className="edit-btn" onClick={() => editRoom(room)}>Edit</button>
                    <button className="delete-btn" onClick={() => deleteRoom(room.id)}>Delete</button>
                  </td>
                </tr>
              ))}

              {filteredRooms.length === 0 && (
                <tr>
                  <td colSpan="6" align="center">No Rooms Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}