const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const adminMiddleware = require("../middleware/adminMiddleware");

// Add route to make a user an admin
router.post("/make-admin", userController.makeAdmin);

module.exports = router;
