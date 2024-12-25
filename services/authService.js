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

  return { id: user._id, name: user.name, email: user.email, role: user.role };
};

exports.authenticateUser = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Invalid credentials");

  return jwt.sign(
    {
      id: user._id,
      userEmail: user.email,
      role: user.role,
      userName: user.name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
};
