const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // Title of the travel package
    description: { type: String, required: true }, // Overview of the package
    location: { type: String, required: true }, // Location of the tour
    city: { type: String, required: true }, // City/region for more specific targeting
    price: { type: Number, required: true }, // Price of the package
    duration: { type: String, required: true }, // Duration, e.g., "3 days, 2 nights"
    datesAvailable: [{ type: Date }], // Array of available start dates for the tour
    maxParticipants: { type: Number, required: true }, // Maximum allowed guests
    images: { type: [String], required: true }, // Array of image URLs
    itinerary: {
      type: [String],
      required: true,
    }, // Day-wise activities (e.g., ["Day 1: Arrival and check-in", "Day 2: Hiking and sightseeing"])
    inclusions: {
      type: [String],
      required: true,
    }, // List of included services/items (e.g., ["Hotel stay", "Meals"])
    exclusions: {
      type: [String],
      required: true,
    }, // List of excluded services/items (e.g., ["Personal expenses"])
    guide: {
      name: { type: String, required: true }, // Name of the guide
      bio: { type: String }, // Guide's bio or experience details
      contact: { type: String }, // Guide's contact information
    }, // Information about the guide
    ratings: {
      average: { type: Number, default: 0 }, // Average rating (e.g., 4.8)
      count: { type: Number, default: 0 }, // Number of ratings (e.g., 150 reviews)
    },
    startDate: { type: Date, required: true }, // Starting date of the package
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Admin or travel agency who created the package
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tour", tourSchema);
