const express = require("express");
const districtController = require("../controllers/districtController");
const router = express.Router();

// Add route to make a user an admin
router.get("/getAllDstrct", districtController.getAllDistricts);

module.exports = router;
