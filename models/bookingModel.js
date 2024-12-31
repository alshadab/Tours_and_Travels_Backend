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
    pickedDate: { type: String, required: true },
    participants: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, default: "Confirmed" }, // "pending", "confirmed", "cancelled"
    cancelRequest: { type: Boolean, default: false },
    adminRequest: { type: Boolean, default: false },
    active: { type: Boolean, default: true },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
