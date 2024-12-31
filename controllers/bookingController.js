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

    // Initiate payment
    const paymentResponse = await paymentService.initiatePayment(
      user,
      tour,
      totalPrice
    );

    // Check availability and reserve a slot
    const booking = await bookingService.bookTour(data);

    // Return payment gateway URL
    // res.status(200).json({
    //   message: "Booking reserved. Redirect to payment gateway.",
    // });

    res.status(201).json({
      message: "Pay for Booking",
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

exports.getTotalRevenueController = async (req, res) => {
  try {
    // Call the service function to calculate the total revenue
    const totalRevenue = await bookingService.totalRevenue();

    // Send a success response
    res.status(200).json({
      success: true,
      data: { totalRevenue },
    });
  } catch (error) {
    // Handle errors and send an appropriate response
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.cancelBookingRequestController = async (req, res) => {
  try {
    // Extract the bookingId from request parameters
    const { id } = req.body;

    // Call the service function to cancel the booking request
    const updatedBooking = await bookingService.cancelBookingRequest(id);

    // Send a success response
    res.status(200).json({
      success: true,
      data: updatedBooking,
    });
  } catch (error) {
    // Handle errors and send an appropriate response
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.approveCancelBookingRequestController = async (req, res) => {
  try {
    // Extract the bookingId from request parameters
    const { id, participants } = req.body;

    // Call the service function to cancel the booking request
    const updatedBooking = await bookingService.approveCancelBookingRequest(
      id,
      participants
    );

    // Send a success response
    res.status(200).json({
      success: true,
      data: updatedBooking,
    });
  } catch (error) {
    // Handle errors and send an appropriate response
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.denyCancelBookingRequestController = async (req, res) => {
  try {
    // Extract the bookingId from request parameters
    const { id } = req.body;

    // Call the service function to cancel the booking request
    const updatedBooking = await bookingService.denyCancelBookingRequest(id);

    // Send a success response
    res.status(200).json({
      success: true,
      data: updatedBooking,
    });
  } catch (error) {
    // Handle errors and send an appropriate response
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
