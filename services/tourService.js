const Tour = require("../models/tourModel");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

exports.addTour = async (data, imageFiles) => {
  // Define the folder to save images
  const folderPath = path.join(__dirname, "../public/uploads/tourImages");

  // Create the folder if it doesn't exist
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // Process and save each image file with a unique name
  const imagePaths = [];
  for (const file of imageFiles) {
    // Generate a unique file name using timestamp and random string
    const timestamp = Date.now();
    const randomString = crypto.randomBytes(8).toString("hex"); // 8 bytes hex string
    const fileExtension = path.extname(file.originalname); // Get the file extension (e.g., '.jpg')
    const uniqueFileName = `${timestamp}-${randomString}${fileExtension}`;

    const imagePath = path.join(folderPath, uniqueFileName);

    // Save the image buffer to the file system with the new unique name
    fs.writeFileSync(imagePath, file.buffer);

    // Save the relative path of the image for database storage
    imagePaths.push(uniqueFileName);
  }

  // Prepare the tour data for saving
  const tourData = {
    title: data.title,
    description: data.description,
    location: data.location,
    city: data.city,
    price: data.price,
    duration: data.duration,
    datesAvailable: data.datesAvailable
      .split(",")
      .map((date) => new Date(date)), // Convert date strings to Date objects
    maxParticipants: data.maxParticipants,
    images: imagePaths, // Store multiple image paths in an array
    itinerary: data.itinerary.split("\n"), // Split multiline input into an array
    inclusions: data.inclusions.split("\n"), // Split multiline input into an array
    exclusions: data.exclusions.split("\n"), // Split multiline input into an array
    guide: {
      name: data.guideName,
      bio: data.guideBio,
      contact: data.guideContact,
    },
    ratings: {
      average: data.ratingsAverage || 0,
      count: data.ratingsCount || 0,
    },
    startDate: new Date(data.startDate),
    createdBy: data.createdBy, // Ensure you pass the user ID from the request
  };

  // Save to the database
  const tour = new Tour(tourData);
  await tour.save();
  return tour;
};

exports.getAllTours = async () => {
  return await Tour.find().sort({ createdAt: -1 }); // Return all tours, sorted by the newest first
};

exports.getTourById = async (id) => {
  return await Tour.findById(id);
};

exports.findToursByCity = async (city) => {
  try {
    // Search for tours where the city matches the provided city
    const tours = await Tour.find({ city: city });
    return tours;
  } catch (error) {
    throw new Error(`Error finding tours for city ${city}: ${error.message}`);
  }
};

exports.updateTour = async (id, updatedData, imageFiles) => {
  // If there are new images, process them
  let imagePaths = [];
  if (imageFiles && imageFiles.length > 0) {
    const folderPath = path.join(__dirname, "../public/uploads/tourImages");

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    for (const file of imageFiles) {
      const timestamp = Date.now();
      const randomString = crypto.randomBytes(8).toString("hex");
      const fileExtension = path.extname(file.originalname);
      const uniqueFileName = `${timestamp}-${randomString}${fileExtension}`;

      const imagePath = path.join(folderPath, uniqueFileName);
      fs.writeFileSync(imagePath, file.buffer);

      imagePaths.push(uniqueFileName);
    }
  }

  // Prepare the updated data
  const updatedTourData = {
    ...updatedData,
    ...(imagePaths.length > 0 && { images: imagePaths }), // Add new images only if they exist
    datesAvailable: updatedData.datesAvailable
      ? updatedData.datesAvailable.split(",").map((date) => new Date(date))
      : undefined,
    itinerary: updatedData.itinerary
      ? updatedData.itinerary.split("\n")
      : undefined,
    inclusions: updatedData.inclusions
      ? updatedData.inclusions.split("\n")
      : undefined,
    exclusions: updatedData.exclusions
      ? updatedData.exclusions.split("\n")
      : undefined,
    guide: updatedData.guideName
      ? {
          name: updatedData.guideName,
          bio: updatedData.guideBio,
          contact: updatedData.guideContact,
        }
      : undefined,
  };

  // Update the tour in the database
  const updatedTour = await Tour.findByIdAndUpdate(id, updatedTourData, {
    new: true,
  });

  return updatedTour;
};

exports.deleteTour = async (id) => {
  const tour = await Tour.findById(id);

  if (!tour) {
    throw new Error("Tour not found");
  }

  // Delete associated images from the file system
  const folderPath = path.join(__dirname, "../public/uploads/tourImages");
  for (const imagePath of tour.images) {
    const fullPath = path.join(folderPath, imagePath);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
  }

  // Delete the tour from the database
  await Tour.findByIdAndDelete(id);
  return { message: "Tour deleted successfully" };
};
