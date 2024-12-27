const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (data) => {
  const { email, password } = data;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ password: hashedPassword, ...data });
  await user.save();

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    phoneNumber: user.phoneNumber,
  };
};

exports.authenticateUser = async (data) => {
  const { email, password } = data;

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  // Validate the password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Invalid credentials");

  // Generate the JWT token
  const token = jwt.sign(
    {
      id: user._id,
      userEmail: user.email,
      role: user.role,
      userName: user.name,
      phoneNumber: user.phoneNumber,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  // Return the token and user details
  return {
    token,
    user: {
      id: user._id,
      email: user.email,
      role: user.role,
      name: user.name,
      phoneNumber: user.phoneNumber,
    },
  };
};
