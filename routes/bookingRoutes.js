const express = require("express");
const bookingController = require("../controllers/bookingController");
const router = express.Router();

router.post("/", bookingController.createBooking);
router.get("/user/:id", bookingController.getBookingsByUser);
router.get("/all", bookingController.getAllBookingsController);
router.get("/today/bookings", bookingController.getTodaysBookingsController);
router.get("/total-revenue", bookingController.getTotalRevenueController);
router.post(
  "/cancel-request",
  bookingController.cancelBookingRequestController
);
router.post(
  "/approve-cancel-request",
  bookingController.approveCancelBookingRequestController
);
router.post(
  "/deny-cancel-request",
  bookingController.denyCancelBookingRequestController
);

module.exports = router;
