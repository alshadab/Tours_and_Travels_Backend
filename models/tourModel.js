const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true }, // e.g., "3 days, 2 nights"
    datesAvailable: [Date],
    maxParticipants: { type: Number, required: true },
    images: [String], // URLs of tour images
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tour", tourSchema);
