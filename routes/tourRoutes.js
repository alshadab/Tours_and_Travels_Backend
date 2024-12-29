const express = require("express");
const tourController = require("../controllers/tourController");
const router = express.Router();

router.post("/crt", tourController.uploadImages, tourController.addTour);
router.get("/getAll", tourController.getTours);
router.get("/:id", tourController.getTourById);
router.post("/city", tourController.getToursByCity);
router.get("/del/tour/:id", tourController.deleteTour);

module.exports = router;
