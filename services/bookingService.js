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
