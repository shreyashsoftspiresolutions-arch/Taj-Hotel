import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./Dashboard.css";

import {
  FaHotel,
  FaBed,
  FaUsers,
  FaCalendarCheck,
  FaDollarSign,
  FaUtensils,
  FaPlus,
} from "react-icons/fa";

import Analytics from "../components/Analytics";
import RecentBookings from "../components/RecentBookings";
import QuickActions from "../components/QuickActions";
import AdminProfile from "../components/AdminProfile";
import Notifications from "../components/Notifications";
import CalendarCard from "../components/CalendarCard";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [stats, setStats] = useState({
    hotels: 0,
    rooms: 0,
    users: 0,
    bookings: 0,
    revenue: 0,
    foods: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/dashboard");
        setStats({
          hotels: 1, // Hardcoded to 1 since there is no hotels count returned by the API yet, or you can add it
          rooms: response.data.rooms || 0,
          users: response.data.users || 0,
          bookings: response.data.bookings || 0,
          revenue: response.data.revenue || 0,
          foods: response.data.foods || 0,
        });
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    };
    fetchStats();
  }, []);

  const statCards = [
    { key: "hotels", label: "Total Hotels", value: stats.hotels, icon: <FaHotel />, cls: "hotel" },
    { key: "rooms", label: "Luxury Rooms", value: stats.rooms, icon: <FaBed />, cls: "room" },
    { key: "users", label: "Customers", value: stats.users, icon: <FaUsers />, cls: "customer" },
    { key: "bookings", label: "Bookings", value: stats.bookings, icon: <FaCalendarCheck />, cls: "booking" },
    { key: "revenue", label: "Total Revenue", value: `$${stats.revenue}`, icon: <FaDollarSign />, cls: "revenue" },
    { key: "foods", label: "Food Items", value: stats.foods, icon: <FaUtensils />, cls: "food" },
  ];

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Topbar title="Luxury Taj Palace" subtitle="Welcome back — here's what's happening today" />

        {/* Welcome Header */}
        <div className="page-header">
          <div>
            <h1>Executive Overview</h1>
            <p>
              Monitor your hotel's performance at a glance.
            </p>
          </div>
          <button className="header-btn">
            <FaPlus />
            New Booking
          </button>
        </div>

        {/* Dashboard Cards */}
        <div className="stats-grid">
          {statCards.map((card) => (
            <div className={`stat-card ${card.cls}`} key={card.key}>
              <div className="stat-icon">{card.icon}</div>
              <div className="stat-meta">
                <p>{card.label}</p>
                <h2>{card.value}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <Analytics />

        {/* Recent Bookings + Quick Actions */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "25px",
            marginTop: "30px",
          }}
        >
          <RecentBookings />

          <QuickActions />
        </div>

        {/* Profile + Notifications + Calendar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px",
            marginTop: "30px",
            marginBottom: "40px",
          }}
        >
          <AdminProfile />

          <Notifications />

          <CalendarCard />
        </div>

      </div>
    </div>
  );
}
