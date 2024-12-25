const express = require("express");
const tourController = require("../controllers/tourController");
const router = express.Router();

router.post("/crt", tourController.uploadImages, tourController.addTour);
router.get("/getAll", tourController.getTours);
router.get("/:id", tourController.getTourById);

module.exports = router;
