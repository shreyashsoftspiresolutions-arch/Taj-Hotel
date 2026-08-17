import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaHotel,
  FaBed,
  FaCalendarCheck,
  FaUsers,
  FaUtensils,
  FaCog,
  FaSignOutAlt,
  FaCrown,
} from "react-icons/fa";

import "./Dashboard.css";

const navItems = [
  { to: "/admin", icon: <FaTachometerAlt />, label: "Dashboard" },
  { to: "/admin/hotels", icon: <FaHotel />, label: "Hotels" },
  { to: "/admin/rooms", icon: <FaBed />, label: "Rooms" },
  { to: "/admin/bookings", icon: <FaCalendarCheck />, label: "Bookings" },
  { to: "/admin/customers", icon: <FaUsers />, label: "Customers" },
  { to: "/admin/food", icon: <FaUtensils />, label: "Food Menu" },
  { to: "/admin/settings", icon: <FaCog />, label: "Settings" },
];

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/admin") return location.pathname === "/admin";
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-brand">
        <div className="sidebar-brand-icon">
          <FaCrown />
        </div>
        <h2>
          Taj Palace
          <span>Admin Suite</span>
        </h2>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={isActive(item.to) ? "active" : ""}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <Link to="/">
          <FaSignOutAlt />
          Logout
        </Link>
      </div>

    </aside>
  );
}
