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

exports.getAllUsers = async () => {
  // Fetch only users with the role 'user'
  const users = await User.find({ role: "user" });

  // Check if any users exist
  if (!users || users.length === 0) {
    throw new Error("No users found");
  }

  return users; // Return the filtered list of users
};

exports.getUserDetails = async (data) => {
  try {
    // Find the user by ID
    const user = await User.findById(data.userId);

    // If the user does not exist, throw an error
    if (!user) {
      throw new Error("User not found");
    }

    // Return the user details (excluding sensitive fields, e.g., password)
    const { password, ...userDetails } = user.toObject(); // Remove password field
    return userDetails;
  } catch (error) {
    throw new Error(`Error fetching user details: ${error.message}`);
  }
};

exports.removeUser = async (id) => {
  try {
    // Find and delete the user by ID
    const user = await User.findByIdAndDelete(id);

    // If the user does not exist, throw an error
    if (!user) {
      throw new Error("User not found");
    }

    return { message: "User removed successfully" }; // Return a success message
  } catch (error) {
    throw new Error(`Error removing user: ${error.message}`);
  }
};

exports.getAllAdmins = async () => {
  const users = await User.find({ role: "admin" });

  if (!users || users.length === 0) {
    throw new Error("No admins found");
  }

  return users;
};

exports.updateUserInfo = async (userId, updateData) => {
  console.log(updateData, "Update Data");
  console.log(userId, "User Id");
  // Find the user by ID and update the provided fields
  const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
  if (!user) {
    throw new Error("User not found");
  }

  return user; // Return the updated user
};
