import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./Dashboard.css";

export default function FoodAdmin() {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");

  const [food_name, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const [editId, setEditId] = useState(null);

  const fetchFoods = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/food");
      setFoods(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const handleSubmit = async () => {
    if (!food_name || !price) {
      alert("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("food_name", food_name);
    formData.append("price", price);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/food/${editId}`, formData);
      } else {
        await axios.post("http://localhost:5000/api/food", formData);
      }

      fetchFoods();
      setEditId(null);
      setFoodName("");
      setPrice("");
      setImageFile(null);
    } catch (err) {
      console.error(err);
      alert("Error saving food item");
    }
  };

  const editFood = (food) => {
    setEditId(food.id);
    setFoodName(food.food_name || "");
    setPrice(food.price || "");
    setImageFile(null);
  };

  const deleteFood = async (id) => {
    if (!window.confirm("Are you sure you want to delete this food item?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/food/${id}`);
      fetchFoods();
    } catch (err) {
      console.error(err);
      alert("Error deleting food item");
    }
  };

  const filteredFoods = foods.filter(
    (food) =>
      food.food_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Topbar title="Food Management" subtitle="Curate your restaurant menu" />

        <div className="table-section">
          <h2>Menu Items</h2>
          <p className="page-subtitle">
            Add signature dishes, set pricing and keep your culinary menu up to date.
          </p>

          <div className="form-grid">
            <input
              placeholder="Food Name (e.g. Butter Chicken)"
              value={food_name}
              onChange={(e) => setFoodName(e.target.value)}
            />
            <input
              placeholder="Price (e.g. $15)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
            className="file_upload"
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
            />

            <button onClick={handleSubmit}>
              {editId ? "Update Food" : "Add Food"}
            </button>
          </div>

          <br />
          <input
            type="text"
            placeholder="Search Food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <br /><br />

          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Food Name</th>
                <th>Price</th>
                <th width="180">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredFoods.map((food) => (
                <tr key={food.id}>
                  <td>
                    {food.image ? (
                      <img src={`http://localhost:5000/uploads/${food.image}`} alt={food.food_name} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }} />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td>{food.food_name}</td>
                  <td>{food.price}</td>

                  <td>
                    <button className="edit-btn" onClick={() => editFood(food)}>Edit</button>
                    <button className="delete-btn" onClick={() => deleteFood(food.id)}>Delete</button>
                  </td>
                </tr>
              ))}

              {filteredFoods.length === 0 && (
                <tr>
                  <td colSpan="4" align="center">No Food Items Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}