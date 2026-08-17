import { useState } from "react";
import { FaSave } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./Dashboard.css";

export default function Settings() {
  const [form, setForm] = useState({
    hotelName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings saved successfully!");
  };

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main">

        <Topbar title="Hotel Settings" subtitle="Configure your hotel's core information" />

        <div className="table-section">

          <h2>General Settings</h2>
          <p className="page-subtitle">
            Update your hotel's name and contact details shown to guests.
          </p>

          <form className="settings-form" onSubmit={handleSubmit}>

            <label htmlFor="hotelName">Hotel Name</label>
            <input
              id="hotelName"
              type="text"
              name="hotelName"
              placeholder="Luxury Taj Palace"
              value={form.hotelName}
              onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="info@tajhotel.com"
              value={form.email}
              onChange={handleChange}
            />

            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="text"
              name="phone"
              placeholder="+1 234 567 890"
              value={form.phone}
              onChange={handleChange}
            />

            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              name="address"
              placeholder="Colaba, Mumbai, India"
              value={form.address}
              onChange={handleChange}
            />

            <button type="submit" className="header-btn">
              <FaSave />
              Save Settings
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}
