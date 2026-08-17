const express = require("express");

const router = express.Router();

const contact = require("../controllers/contactController");

router.post("/", contact.sendMessage);

module.exports = router;