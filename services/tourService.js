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
