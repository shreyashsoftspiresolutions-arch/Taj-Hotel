const db = require("../config/db");

// Place Food Order
exports.placeOrder = (req, res) => {

    const {
        user_id,
        food_id,
        quantity,
        total_price
    } = req.body;

    const sql = `
        INSERT INTO food_orders
        (user_id,food_id,quantity,total_price,status)
        VALUES(?,?,?,?,?)
    `;

    db.query(
        sql,
        [
            user_id,
            food_id,
            quantity,
            total_price,
            "Pending"
        ],
        (err) => {

            if (err) return res.status(500).json(err);

            res.json({
                success: true,
                message: "Food Order Placed Successfully"
            });

        }
    );

};

// My Orders
exports.myOrders = (req, res) => {

    db.query(
        `
        SELECT food_orders.*,foods.food_name,foods.image
        FROM food_orders
        JOIN foods
        ON foods.id=food_orders.food_id
        WHERE user_id=?
        `,
        [req.params.userId],
        (err, result) => {

            if (err) return res.status(500).json(err);

            res.json(result);

        }
    );

};