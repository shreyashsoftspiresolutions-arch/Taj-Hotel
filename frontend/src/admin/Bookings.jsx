import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./Dashboard.css";

const bookings = [
  { guest: "John Smith", room: "Luxury Suite", checkIn: "20 July", checkOut: "24 July", status: "Confirmed" },
  { guest: "Emma Wilson", room: "Deluxe Room", checkIn: "21 July", checkOut: "23 July", status: "Pending" },
  { guest: "David Brown", room: "Executive Suite", checkIn: "22 July", checkOut: "26 July", status: "Confirmed" },
  { guest: "Sophia Lee", room: "Presidential Suite", checkIn: "23 July", checkOut: "28 July", status: "Cancelled" },
  { guest: "Arjun Mehta", room: "Royal Suite", checkIn: "24 July", checkOut: "27 July", status: "Confirmed" },
];

export default function Bookings() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main">

        <Topbar title="Booking Management" subtitle="Track and manage guest reservations" />

        <div className="table-section">

          <h2>All Bookings</h2>
          <p className="page-subtitle">
            View reservation details and monitor booking statuses in real time.
          </p>

          <table>

            <thead>
              <tr>
                <th>Guest</th>
                <th>Room</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.guest}</td>
                  <td>{booking.room}</td>
                  <td>{booking.checkIn}</td>
                  <td>{booking.checkOut}</td>
                  <td>
                    <span className={`status ${booking.status.toLowerCase()}`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}
