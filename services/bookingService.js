const Booking = require("../models/bookingModel");
const Tour = require("../models/tourModel");

exports.bookTour = async (data) => {
  const { tourId, participants } = data;

  const selectedTour = await Tour.findById(tourId);
  if (!selectedTour) throw new Error("Tour not found");
  if (selectedTour.maxParticipants <= 0) throw new Error("No slots available");

  const booking = new Booking(data);
  await booking.save();

  selectedTour.maxParticipants -= participants;
  await selectedTour.save();

  return booking;
};

exports.getUserBookings = async (userId) => {
  return await Booking.find({ userId: userId }).populate("tourId");
};

exports.getAllBookings = async () => {
  try {
    // Fetch all bookings and populate the associated tour and user details
    const bookings = await Booking.find().populate("tourId").populate("userId");
    return bookings;
  } catch (error) {
    throw new Error(`Error fetching bookings: ${error.message}`);
  }
};

exports.getTodaysBookings = async () => {
  try {
    // Get the current date and set the start and end times for today
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0); // Set to the start of the day (midnight)
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999); // Set to the end of the day

    // Query to fetch bookings created within today's date range
    const todaysBookings = await Booking.find({
      createdAt: { $gte: startOfDay, $lte: endOfDay },
    })
      .populate("userId", "name email phoneNumber") // Populate user details with specific fields
      .populate("tourId", "title description price"); // Populate tour details with specific fields

    return todaysBookings;
  } catch (error) {
    throw new Error(`Error fetching today's bookings: ${error.message}`);
  }
};

exports.totalRevenue = async () => {
  try {
    // Fetch all bookings and calculate the total revenue
    const bookings = await Booking.find();
    const totalRevenue = bookings.reduce(
      (total, booking) => total + booking.totalPrice,
      0
    );
    return totalRevenue;
  } catch (error) {
    throw new Error(`Error calculating total revenue: ${error.message}`);
  }
};

exports.cancelBookingRequest = async (bookingId) => {
  try {
    // Find the booking and update the cancelRequest field to true
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { cancelRequest: true },
      { new: true }
    );
    if (!booking) {
      throw new Error("Booking not found");
    }

    // Find the associated tour and increase the maxParticipants

    return booking;
  } catch (error) {
    throw new Error(`Error cancelling booking request: ${error.message}`);
  }
};

exports.approveCancelBookingRequest = async (bookingId, participants) => {
  try {
    // Find the booking and update the cancelRequest field to true
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { cancelRequest: true, adminRequest: true, status: "Cancelled" },
      { new: true }
    );
    if (!booking) {
      throw new Error("Booking not found");
    }

    // Find the associated tour and increase the maxParticipants
    const tour = await Tour.findById(booking.tourId);
    if (tour) {
      tour.maxParticipants += participants;
      await tour.save();
    }

    return booking;
  } catch (error) {
    throw new Error(`Error cancelling booking request: ${error.message}`);
  }
};

exports.denyCancelBookingRequest = async (bookingId) => {
  try {
    // Find the booking and update the cancelRequest field to true
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { cancelRequest: false, adminRequest: true, status: "Confirmed" },
      { new: true }
    );
    if (!booking) {
      throw new Error("Booking not found");
    }

    return booking;
  } catch (error) {
    throw new Error(`Error cancelling booking request: ${error.message}`);
  }
};
