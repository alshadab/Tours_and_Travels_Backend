const tourService = require("../services/tourService");
const multer = require("multer");
const storage = multer.memoryStorage(); // Store files in memory for processing
const upload = multer({ storage });
exports.uploadImages = upload.array("images", 10); // Here 'images' is the field name, and 10 is the max number of files allowed

exports.addTour = async (req, res) => {
  try {
    const { body, files } = req;
    // Ensure files are provided
    if (!files || files.length === 0) {
      return res.status(400).json({ message: "No images provided." });
    }

    // Pass body and files (array) to the service
    const newTour = await tourService.addTour(body, files);

    res.status(201).json({
      message: "Tour added successfully!",
      tour: newTour,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTours = async (req, res) => {
  try {
    const tours = await tourService.getAllTours();
    res.status(200).json(tours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTourById = async (req, res) => {
  try {
    const tour = await tourService.getTourById(req.params.id);
    if (!tour) return res.status(404).json({ message: "Tour not found" });
    res.status(200).json(tour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getToursByCity = async (req, res) => {
  try {
    const { city } = req.body;

    if (!city) {
      return res.status(400).json({ message: "City parameter is required." });
    }

    // Call the service to fetch tours by city
    const tours = await tourService.findToursByCity(city);

    if (tours.length === 0) {
      return res
        .status(404)
        .json({ data: [], message: `No tours found for city: ${city}` });
    }

    res
      .status(200)
      .json({ message: `Tours found for city: ${city}`, data: tours });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
