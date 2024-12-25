const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tourId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
    bookingDate: { type: Date, default: Date.now },
    participants: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, default: "pending" }, // "pending", "confirmed", "cancelled"
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
