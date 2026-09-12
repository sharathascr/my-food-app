import mongoose from "mongoose";

export const itemCardSchema = new mongoose.Schema({
  id: { type: String, required: [true, "Item ID is required"] },
  name: { type: String, required: [true, "Item name is required"] },
  category: { type: String, required: [true, "Item category is required"] },
  description: {
    type: String,
  },
  imageId: { type: String },
  inStock: { type: Number },
  itemAttribute: {
    vegClassifier: {
      type: String,
      required: [true, "Item veg classifier is required"],
      enum: {
        values: ["VEG", "NONVEG"],
        message: "Item veg classifier must be either 'VEG' or 'NONVEG'",
      },
    },
  },
  defaultPrice: { type: Number, required: [true, "Item price is required"] },
  showImage: {
    type: Boolean,
  },
  ratings: {
    aggregatedRating: {
      rating: { type: String },
      ratingCount: {
        type: String,
      },
      ratingCountV2: {
        type: String,
      },
    },
  },
});
