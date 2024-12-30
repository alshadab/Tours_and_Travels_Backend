const express = require("express");
const bookingController = require("../controllers/bookingController");
const router = express.Router();

router.post("/", bookingController.createBooking);
router.get("/user/:id", bookingController.getBookingsByUser);
router.get("/all", bookingController.getAllBookingsController);
router.get("/today/bookings", bookingController.getTodaysBookingsController);

module.exports = router;
