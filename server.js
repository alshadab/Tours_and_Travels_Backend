const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // Import MongoDB connection
const authRoutes = require("./routes/authRoutes");
const tourRoutes = require("./routes/tourRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const userRoutes = require("./routes/userRoutes");
const authMiddleware = require("./middleware/authMiddleware");
const path = require("path");

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));
app.use(express.raw({ type: "image/*", limit: "10mb" }));

app.use("/api/payment", paymentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tours", authMiddleware, tourRoutes);
app.use("/api/bookings", authMiddleware, bookingRoutes);
app.use("/api/users", authMiddleware, userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
