const Booking = require("../models/bookingModel");
const Tour = require("../models/tourModel");

exports.bookTour = async (data) => {
  const { user, tour, date, totalPrice } = data;

  const selectedTour = await Tour.findById(tour);
  if (!selectedTour) throw new Error("Tour not found");
  if (selectedTour.availableSlots <= 0) throw new Error("No slots available");

  const booking = new Booking({ user, tour, date, totalPrice });
  await booking.save();

  selectedTour.availableSlots -= 1;
  await selectedTour.save();

  return booking;
};

exports.getUserBookings = async (userId) => {
  return await Booking.find({ user: userId }).populate("tour");
};
