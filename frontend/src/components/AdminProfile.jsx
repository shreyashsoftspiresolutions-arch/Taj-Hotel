import { useState, useEffect } from "react";
import axios from "axios";
import { FaUserShield, FaEnvelope, FaPhone } from "react-icons/fa";
import "./AdminProfile.css";

export default function AdminProfile() {
  const [adminData, setAdminData] = useState({
    name: "Loading...",
    email: "loading...",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAdminData(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setAdminData({ name: "Hotel Administrator", email: "Error loading profile" });
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="admin-profile-card">
      <img
        src="https://i.pravatar.cc/200?img=12"
        alt="Admin"
      />

      <h2>{adminData.name || "Hotel Administrator"}</h2>

      <span className="profile-role">General Manager</span>

      <p>Luxury Taj Palace Hotel</p>

      <div className="profile-info">
        <p><FaEnvelope /> {adminData.email}</p>
        <p><FaPhone /> +91 9876543210</p>
        <p><FaUserShield /> Super Admin</p>
      </div>
    </div>
  );
}
