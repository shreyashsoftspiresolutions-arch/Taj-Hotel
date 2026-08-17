const express = require("express");

const router = express.Router();

const booking = require("../controllers/bookingController");

router.post("/", booking.createBooking);

router.get("/", booking.getBookings);

module.exports = router;