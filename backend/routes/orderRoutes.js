const express = require("express");

const router = express.Router();

const order = require("../controllers/orderController");

router.post("/", order.placeOrder);

router.get("/:userId", order.myOrders);

module.exports = router;