const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const adminMiddleware = require("../middleware/adminMiddleware");

// Add route to make a user an admin
router.post("/make-admin", userController.makeAdmin);
router.get("/all/users", userController.getAllUsersController);
router.get("/all/admins", userController.getAllAdminsController);
router.post("/single/user", userController.getSingleUserController);
router.get("/remove/user/:id", userController.removeUserController);

module.exports = router;
