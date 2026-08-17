import "./RecentBookings.css";

export default function RecentBookings() {
  const bookings = [
    {
      id: 1,
      guest: "John Smith",
      room: "Presidential Suite",
      checkIn: "2026-08-01",
      status: "Confirmed",
    },
    {
      id: 2,
      guest: "Emma Wilson",
      room: "Deluxe Room",
      checkIn: "2026-08-03",
      status: "Pending",
    },
    {
      id: 3,
      guest: "David Brown",
      room: "Executive Room",
      checkIn: "2026-08-05",
      status: "Confirmed",
    },
    {
      id: 4,
      guest: "Sophia Lee",
      room: "Luxury Suite",
      checkIn: "2026-08-06",
      status: "Cancelled",
    },
  ];

  return (
    <div className="recent-bookings">

      <h2>Recent Bookings</h2>

      <table>

        <thead>
          <tr>
            <th>Guest</th>
            <th>Room</th>
            <th>Check In</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {bookings.map((booking) => (

            <tr key={booking.id}>

              <td>{booking.guest}</td>

              <td>{booking.room}</td>

              <td>{booking.checkIn}</td>

              <td>
                <span
                  className={`status ${booking.status.toLowerCase()}`}
                >
                  {booking.status}
                </span>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}