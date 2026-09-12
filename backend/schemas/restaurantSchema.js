import mongoose from "mongoose";
import { itemCardSchema } from "./itemCardSchema.js";

export const restaurantSchema = new mongoose.Schema({
  id: { type: String, required: [true, "Restaurant ID is required"] },
  name: { type: String, required: [true, "Restaurant name is required"] },
  cloudinaryImageId: {
    type: String,
    required: [true, "Cloudinary image ID is required"],
    trim: true,
  },
  locality: { type: String, required: [true, "Locality is required"] },
  areaName: { type: String, required: [true, "Area name is required"] },
  costForTwo: { type: String, required: [true, "Cost for two is required"] },
  cuisines: {
    type: [String],
    required: [true, "Cuisines are required"],
  },
  avgRating: {
    type: Number,
    required: [true, "Average rating is required"],
  },
  parentId: { type: String, required: [true, "Parent ID is required"] },
  avgRatingString: {
    type: String,
    required: [true, "Average rating string is required"],
  },
  itemsCard: {
    type: [itemCardSchema],
    required: [true, "Items card is required"],
  },
  totalRatingsString: {
    type: String,
    required: [true, "Total ratings string is required"],
  },
  sla: {
    deliveryTime: {
      type: Number,
      required: [true, "Delivery time is required"],
    },
    lastMileTravel: {
      type: Number,
      required: [true, "Last mile travel is required"],
    },
    serviceability: {
      type: String,
      required: [true, "Serviceability is required"],
    },
    slaString: { type: String, required: [true, "SLA string is required"] },
  },
  availability: {
    nextCloseTime: {
      type: String,
      required: [true, "Next close time is required"],
    },
    opened: { type: Boolean, required: [true, "Opened status is required"] },
  },
  isOpen: {
    type: Boolean,
    required: [true, "isOpen is required"],
  },
});
