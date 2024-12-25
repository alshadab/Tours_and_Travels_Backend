const express = require("express");
const bookingController = require("../controllers/bookingController");
const router = express.Router();

router.post("/", bookingController.createBooking);
router.get("/user/:userId", bookingController.getBookingsByUser);

module.exports = router;
