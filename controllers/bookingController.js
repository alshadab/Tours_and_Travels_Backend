const bookingService = require("../services/bookingService");
const paymentService = require("../services/paymentService");

exports.createBooking = async (req, res) => {
  try {
    const { user, tour, date, totalPrice } = req.body;

    // Check availability and reserve a slot
    const booking = await bookingService.bookTour({
      user,
      tour,
      date,
      totalPrice,
    });

    // Initiate payment
    const paymentResponse = await paymentService.initiatePayment(
      user,
      tour,
      totalPrice
    );

    // Return payment gateway URL
    res.status(200).json({
      message: "Booking reserved. Redirect to payment gateway.",
      paymentGatewayUrl: paymentResponse.GatewayPageURL,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBookingsByUser = async (req, res) => {
  try {
    const bookings = await bookingService.getUserBookings(req.params.userId);
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
