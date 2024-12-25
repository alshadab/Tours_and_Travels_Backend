const express = require("express");
const tourController = require("../controllers/tourController");
const router = express.Router();

router.post("/", tourController.createTour);
router.get("/", tourController.getTours);
router.get("/:id", tourController.getTourById);

module.exports = router;
