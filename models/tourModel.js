const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    city: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    datesAvailable: [Date],
    maxParticipants: { type: Number, required: true },
    image: { type: String, required: false },
    itinerary: { type: [String], required: true },
    inclusions: { type: [String], required: true },
    exclusions: { type: [String], required: true },
    guide: {
      name: { type: String, required: true },
      bio: { type: String, required: true },
      contact: { type: String, required: true },
    },
    startDate: { type: Date, required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tour", tourSchema);
