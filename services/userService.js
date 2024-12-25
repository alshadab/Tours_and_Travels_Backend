const User = require("../models/userModel");

exports.makeAdmin = async (userId) => {
  // Find the user by ID
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  // Update the role to 'admin'
  user.role = "admin";
  await user.save();

  return user; // Return the updated user
};
