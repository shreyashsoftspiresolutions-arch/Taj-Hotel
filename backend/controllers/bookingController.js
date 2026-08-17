const db = require("../config/db");

// Create Booking
exports.createBooking = (req, res) => {

  const {
    user_id,
    room_id,
    check_in,
    check_out,
    guests,
    total_price,
  } = req.body;

  db.query(
    `INSERT INTO bookings
    (user_id,room_id,check_in,check_out,guests,total_price,status)
    VALUES(?,?,?,?,?,?,'Pending')`,
    [
      user_id,
      room_id,
      check_in,
      check_out,
      guests,
      total_price,
    ],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Booking Created Successfully",
      });

    }
  );

};

// Get Bookings
exports.getBookings = (req, res) => {

  db.query(
    "SELECT * FROM bookings",
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json(result);

    }
  );

};