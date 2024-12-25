const Tour = require("../models/tourModel");

exports.addTour = async (data) => {
  const tour = new Tour(data);
  await tour.save();
  return tour;
};

exports.getAllTours = async () => {
  return await Tour.find();
};

exports.getTourById = async (id) => {
  return await Tour.findById(id);
};
