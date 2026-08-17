import "./QuickActions.css";
import {
  FaHotel,
  FaBed,
  FaCalendarCheck,
  FaUtensils,
} from "react-icons/fa";

export default function QuickActions() {

  return (

    <div className="quick-actions">

      <h2>Quick Actions</h2>

      <button>
        <FaHotel />
        Add Hotel
      </button>

      <button>
        <FaBed />
        Add Room
      </button>

      <button>
        <FaCalendarCheck />
        New Booking
      </button>

      <button>
        <FaUtensils />
        Add Food
      </button>

    </div>

  );

}