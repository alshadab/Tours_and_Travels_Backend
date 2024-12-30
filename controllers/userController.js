const userService = require("../services/userService");

exports.makeAdmin = async (req, res) => {
  try {
    const { userId } = req.body; // Get userId from request params
    const updatedUser = await userService.makeAdmin(userId); // Call service function
    res.status(200).json({
      message: `User ${updatedUser.name} is now an admin.`,
      user: updatedUser,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllUsersController = async (req, res) => {
  try {
    // Call the service to get all users
    const users = await userService.getAllUsers();

    // Send the response with the user data
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    // Handle errors and send an appropriate response
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllAdminsController = async (req, res) => {
  try {
    // Call the service to get all users
    const users = await userService.getAllAdmins();

    // Send the response with the user data
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    // Handle errors and send an appropriate response
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getSingleUserController = async (req, res) => {
  try {
    // Call the service to get all users
    const users = await userService.getUserDetails(req.body);

    // Send the response with the user data
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    // Handle errors and send an appropriate response
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.removeUserController = async (req, res) => {
  try {
    // Extract the userId from request parameters or body
    const { id } = req.params;

    // Call the service function to remove the user
    const result = await userService.removeUser(id);

    // Send a success response
    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    // Handle errors and send an appropriate response
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
