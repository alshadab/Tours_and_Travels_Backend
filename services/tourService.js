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

  // Create the tour object with the image paths
  const tourData = {
    ...data,
    images: imagePaths, // Store multiple image paths in an array
  };

  // Save to the database
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

exports.findToursByCity = async (id) => {
  try {
    let stringId = id.toString();

    // Search for tours where the id matches the provided id
    const tours = await Tour.find({ city: stringId });
    return tours;
  } catch (error) {
    throw new Error(`Error finding tours for id ${id}: ${error.message}`);
  }
};

exports.deleteTourById = async (id) => {
  try {
    // Find the tour by id
    const tour = await Tour.findById(id);
    if (!tour) {
      throw new Error("Tour not found");
    }

    // Define the folder where images are stored
    const folderPath = path.join(__dirname, "../public/uploads/tourImages");

    // Delete associated images from the file system
    if (tour.images && tour.images.length > 0) {
      tour.images.forEach((imageName) => {
        const imagePath = path.join(folderPath, imageName);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath); // Remove the file
        }
      });
    }

    // Delete the tour from the database using deleteOne
    await Tour.findByIdAndDelete(id);

    return { message: "Tour deleted successfully" };
  } catch (error) {
    throw new Error(`Error deleting tour: ${error.message}`);
  }
};
