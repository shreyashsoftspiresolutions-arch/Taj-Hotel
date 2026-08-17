import db from "../config/db.js";

// Dashboard Summary
export const dashboard = (req, res) => {
    const dashboard = {};
    db.query("SELECT COUNT(*) AS totalUsers FROM users", (err, users) => {
        if (err) return res.status(500).json(err);
        dashboard.users = users[0].totalUsers;
        db.query("SELECT COUNT(*) AS totalRooms FROM rooms", (err, rooms) => {
            if (err) return res.status(500).json(err);
            dashboard.rooms = rooms[0].totalRooms;
            db.query("SELECT COUNT(*) AS totalFoods FROM foods", (err, foods) => {
                if (err) return res.status(500).json(err);
                dashboard.foods = foods[0].totalFoods;
                db.query("SELECT COUNT(*) AS totalBookings FROM bookings", (err, bookings) => {
                    if (err) return res.status(500).json(err);
                    dashboard.bookings = bookings[0].totalBookings;
                    db.query("SELECT COUNT(*) AS totalOrders FROM food_orders", (err, orders) => {
                        if (err) return res.status(500).json(err);
                        dashboard.orders = orders[0].totalOrders;
                        db.query("SELECT SUM(total_price) AS revenue FROM bookings WHERE status='Approved'", (err, bookingRevenue) => {
                            if (err) return res.status(500).json(err);
                            db.query("SELECT SUM(total_price) AS revenue FROM food_orders WHERE status='Approved'", (err, foodRevenue) => {
                                if (err) return res.status(500).json(err);
                                dashboard.revenue = (bookingRevenue[0].revenue || 0) + (foodRevenue[0].revenue || 0);
                                res.json(dashboard);
                            });
                        });
                    });
                });
            });
        });
    });
};

// Booking Status Update
export const updateBookingStatus = (req, res) => {
    const id = req.params.id;
    const { status } = req.body;
    db.query("UPDATE bookings SET status=? WHERE id=?", [status, id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ success: true, message: "Booking Status Updated Successfully" });
    });
};

// Food Order Status Update
export const updateOrderStatus = (req, res) => {
    const id = req.params.id;
    const { status } = req.body;
    db.query("UPDATE food_orders SET status=? WHERE id=?", [status, id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ success: true, message: "Food Order Updated Successfully" });
    });
};