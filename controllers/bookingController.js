const bookingService = require("../services/bookingService");
const paymentService = require("../services/paymentService");

exports.createBooking = async (req, res) => {
  try {
    const { user, tour, totalPrice, participants, pickedDate } = req.body;

    const data = {
      userId: user.userId,
      tourId: tour.tourId,
      totalPrice,
      participants,
      pickedDate,
    };
    // Check availability and reserve a slot
    const booking = await bookingService.bookTour(data);

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
    const bookings = await bookingService.getUserBookings(req.params.id);
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllBookingsController = async (req, res) => {
  try {
    const bookings = await bookingService.getAllBookings();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTodaysBookingsController = async (req, res) => {
  try {
    const todaysBookings = await bookingService.getTodaysBookings();
    res.status(200).json({
      message: "Today's bookings retrieved successfully",
      data: todaysBookings,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching today's bookings",
      error: error.message,
    });
  }
};
