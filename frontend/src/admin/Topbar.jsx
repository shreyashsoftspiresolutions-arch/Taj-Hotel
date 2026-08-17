import { FaSearch, FaBell } from "react-icons/fa";
import "./Dashboard.css";

export default function Topbar({ title = "Admin Dashboard", subtitle = "Manage your luxury hotel with ease" }) {
  return (
    <div className="topbar">

      <div className="topbar-title">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className="topbar-right">

        <div className="topbar-search">
          <FaSearch />
          <input type="text" placeholder="Search rooms, bookings..." />
        </div>

        <button className="icon-btn" aria-label="Notifications">
          <FaBell />
          <span className="dot"></span>
        </button>

        <div className="topbar-profile">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Admin"
          />
          <span>
            <span className="tp-name">Administrator</span>
            <span className="tp-role">Super Admin</span>
          </span>
        </div>

      </div>

    </div>
  );
}
