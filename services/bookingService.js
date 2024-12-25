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
  return await Booking.find({ user: userId }).populate("tour");
};
