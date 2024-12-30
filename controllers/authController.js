const authService = require("../services/authService");

exports.signup = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);
    res
      .status(201)
      .json({ data: user, message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await authService.authenticateUser(req.body);
    res
      .status(200)
      .json({ error: false, token, message: "User logged in successfully" });
  } catch (error) {
    res.status(401).json({ error: true, message: error.message });
  }
};
