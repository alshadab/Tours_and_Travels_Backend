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
