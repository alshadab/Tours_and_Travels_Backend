const Tour = require("../models/tourModel");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

exports.addTour = async (data, imageFile) => {
  // Define the folder to save the image
  const folderPath = path.join(__dirname, "../public/uploads/tourImages");

  // Create the folder if it doesn't exist
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // Process and save the image with a unique name
  let imagePath = "";
  if (imageFile) {
    const timestamp = Date.now();
    const randomString = crypto.randomBytes(8).toString("hex");
    const fileExtension = path.extname(imageFile.originalname);
    const uniqueFileName = `${timestamp}-${randomString}${fileExtension}`;

    imagePath = path.join(folderPath, uniqueFileName);
    fs.writeFileSync(imagePath, imageFile.buffer); // Save the image
  }

  // Parse the itinerary field (in case it's sent as a JSON string)
  let itinerary = [];
  if (typeof data.itinerary === "string") {
    itinerary = JSON.parse(data.itinerary);
  } else {
    itinerary = data.itinerary;
  }

  // Parse the inclusions and exclusions (if sent as JSON strings)
  const inclusions =
    typeof data.inclusions === "string"
      ? JSON.parse(data.inclusions)
      : data.inclusions;
  const exclusions =
    typeof data.exclusions === "string"
      ? JSON.parse(data.exclusions)
      : data.exclusions;

  // Create the tour object
  const tourData = {
    ...data,
    itinerary,
    inclusions,
    exclusions,
    image: imagePath, // Store the image path
  };

  const tour = new Tour(tourData);
  await tour.save();
  return tour;
};

exports.getAllTours = async () => {
  return await Tour.find();
};

exports.getTourById = async (id) => {
  return await Tour.findById(id);
};

exports.findToursByCity = async (city) => {
  try {
    const tours = await Tour.find({ city: city });
    return tours;
  } catch (error) {
    throw new Error(`Error finding tours for city ${city}: ${error.message}`);
  }
};

exports.updateTour = async (id, data, imageFile) => {
  const folderPath = path.join(__dirname, "../public/uploads/tourImages");

  const tour = await Tour.findById(id);
  if (!tour) {
    throw new Error("Tour not found");
  }

  // Process new image if provided
  let imagePath = tour.image; // Retain the existing image path if no new image is provided
  if (imageFile) {
    const timestamp = Date.now();
    const randomString = crypto.randomBytes(8).toString("hex");
    const fileExtension = path.extname(imageFile.originalname);
    const uniqueFileName = `${timestamp}-${randomString}${fileExtension}`;

    imagePath = path.join(folderPath, uniqueFileName);
    fs.writeFileSync(imagePath, imageFile.buffer); // Save the new image
  }

  // Update tour fields
  tour.title = data.title || tour.title;
  tour.description = data.description || tour.description;
  tour.location = data.location || tour.location;
  tour.city = data.city || tour.city;
  tour.price = data.price || tour.price;
  tour.duration = data.duration || tour.duration;
  tour.datesAvailable = data.datesAvailable || tour.datesAvailable;
  tour.maxParticipants = data.maxParticipants || tour.maxParticipants;
  tour.itinerary = data.itinerary || tour.itinerary;
  tour.inclusions = data.inclusions || tour.inclusions;
  tour.exclusions = data.exclusions || tour.exclusions;
  tour.guide = data.guide || tour.guide;
  tour.startDate = data.startDate || tour.startDate;

  // Store the new image path if a new image is uploaded
  if (imageFile) {
    tour.image = imagePath;
  }

  await tour.save();
  return tour;
};

exports.deleteTour = async (id) => {
  const tour = await Tour.findById(id);
  if (!tour) {
    throw new Error("Tour not found");
  }

  // Optionally, delete associated images
  const folderPath = path.join(__dirname, "../public/uploads/tourImages");
  for (const image of tour.images) {
    const imagePath = path.join(folderPath, image);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
  }

  await Tour.findByIdAndDelete(id);
  return { message: "Tour deleted successfully" };
};
